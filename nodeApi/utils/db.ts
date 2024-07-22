import { Pool } from "pg";

console.log("Initializing database pool...");

const pool = new Pool({
  user: "superadmin",
  host: "194.238.19.130",
  database: "onlyeducation",
  password: "seaCalf", // Replace with your actual password
  port: 5432,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err: Error) => {
  console.error("Database error:", err);
});

pool
  .connect()
  .then((client) => {
    console.log("Database connection successful");
    client.release();
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

export default pool;
