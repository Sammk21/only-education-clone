import pool from "../utils/db";
import { Enquiry } from "../types/types";

export const checkUserEnquiry = async (userId: number): Promise<Enquiry[]> => {
  console.log("Checking user enquiries for user ID:", userId);
  const result = await pool.query(
    "SELECT * FROM onlyedudb.enquiries_users_permissions_user_links WHERE user_id = $1",
    [userId]
  );
  console.log("Query result:", result.rows);
  return result.rows;
};

export const createNewEnquiry = async (
  userId: number,
  level: string,
  specialization: string,
  universityId: number
): Promise<number> => {
  console.log("Creating new enquiry for user ID:", userId);
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const newEnquiryResult = await client.query(
      "INSERT INTO onlyedudb.enquiries (created_at, updated_at, published_at, created_by_id, updated_by_id) VALUES (NOW(), NOW(), NOW(), $1, $1) RETURNING id",
      [1]
    );
    const newEnquiryId = newEnquiryResult.rows[0].id;
    console.log("New enquiry ID:", newEnquiryId);

    await client.query(
      "INSERT INTO onlyedudb.enquiries_users_permissions_user_links (enquiry_id, user_id, enquiry_order) VALUES ($1, $2, 1)",
      [newEnquiryId, userId]
    );

    const newComponentResult = await client.query(
      "INSERT INTO onlyedudb.components_shared_enquiries (level, specialization) VALUES ($1, $2) RETURNING id",
      [level, specialization]
    );
    const newComponentId = newComponentResult.rows[0].id;
    console.log("New component ID:", newComponentId);

    await client.query(
      'INSERT INTO onlyedudb.enquiries_components (entity_id, component_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)',
      [newEnquiryId, newComponentId, "shared.enquiry", "enquires", 1]
    );

    await client.query(
      "INSERT INTO onlyedudb.components_shared_enquiries_university_links (enquiry_id, university_id) VALUES ($1, $2)",
      [newComponentId, universityId]
    );

    await client.query("COMMIT");
    return newEnquiryId;
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error creating new enquiry:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const appendToExistingEnquiry = async (
  enquiryId: number,
  level: string,
  specialization: string,
  universityId: number
): Promise<number> => {
  console.log("Appending to existing enquiry with ID:", enquiryId);
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const newComponentResult = await client.query(
      "INSERT INTO onlyedudb.components_shared_enquiries (level, specialization) VALUES ($1, $2) RETURNING id",
      [level, specialization]
    );
    const newComponentId = newComponentResult.rows[0].id;
    console.log("New component ID:", newComponentId);

    const orderResult = await client.query(
      'SELECT MAX("order") AS max_order FROM onlyedudb.enquiries_components WHERE entity_id = $1',
      [enquiryId]
    );
    const order = orderResult.rows[0].max_order + 1;
    console.log("New component order:", order);

    await client.query(
      'INSERT INTO onlyedudb.enquiries_components (entity_id, component_id, component_type, field, "order") VALUES ($1, $2, $3, $4, $5)',
      [enquiryId, newComponentId, "shared.enquiry", "enquires", order]
    );

    await client.query(
      "INSERT INTO onlyedudb.components_shared_enquiries_university_links (enquiry_id, university_id) VALUES ($1, $2)",
      [newComponentId, universityId]
    );

    await client.query("COMMIT");
    return newComponentId;
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error appending to existing enquiry:", error);
    throw error;
  } finally {
    client.release();
  }
};
