import axios from "axios";

const baseUrl = "https://admin.onlyeducation.co.in";

type dataProp = {};

export async function enquiryService(
  userId: number,
  uniSlug: string,
  level: string,
  specicalization: string
) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/enquiry/${userId}?populate=true`,
      {
        confirmed: true,
      }
    );
    return {
      success: true,
      error: false,
      userId: userId,
    };
  } catch (error) {
    return {
      success: true,
      error: false,
      userId: userId,
    };
  }
}
