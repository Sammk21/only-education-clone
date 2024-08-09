import { Request, Response } from "express";
import {
  checkUserEnquiry,
  createNewEnquiry,
  appendToExistingEnquiry,
} from "../model/enquiryModel";

export const handleEnquiry = async (req: Request, res: Response) => {
  const { userId, level, specialization, universityId } = req.body;
  console.log("Received enquiry request:", req.body);

  try {
    const userEnquiries = await checkUserEnquiry(userId);
    console.log("User enquiries:", userEnquiries);

    if (userEnquiries.length === 0) {
      const newEnquiryId = await createNewEnquiry(
        userId,
        level,
        specialization,
        universityId
      );
      console.log("New enquiry created with ID:", newEnquiryId);
      res
        .status(201)
        .json({ message: "New enquiry created", enquiryId: newEnquiryId });
    } else {
      const enquiryId = userEnquiries[0].enquiry_id;
      console.log("Appending to existing enquiry with ID:", enquiryId);
      const newComponentId = await appendToExistingEnquiry(
        enquiryId,
        level,
        specialization,
        universityId
      );
      console.log("New component added with ID:", newComponentId);
      res
        .status(200)
        .json({ message: "Enquiry appended", componentId: newComponentId });
    }
  } catch (error) {
    console.error("Error handling enquiry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
