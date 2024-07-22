import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import enquiryRoutes from "./routes/enquiryRoutes";

const app = express();
const port = 8000;

app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());
app.use("/api", enquiryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
