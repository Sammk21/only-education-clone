import axios from "axios";

const baseUrl = "https://admin.onlyeducation.co.in";

type dataProp = {};

export async function enquiryService(
  userId: number,
  uniId: number,
  level: string,
  specicalization: string
) {
  try {
    const response = await axios.post(`${baseUrl}/api/enquiries`, {
      data: {
        users_permissions_user: {
          connect: [userId],
        },
        enquires: [
          {
            university: {
              connect: [uniId],
            },
            level: level,
            specialization: specicalization,
          },
        ],
      },
    });
    console.log(response);
    return {
      success: true,
      error: false,
      userId: userId,
    };
  } catch (error) {
    return {
      success: false,
      error: true,
      userId: userId,
    };
  }
}
