import { Router } from "express";
import { handleEnquiry } from "../controllers/enquiryControllers";

const router = Router();

router.post("/submit-enquiry", handleEnquiry);

export default router;
