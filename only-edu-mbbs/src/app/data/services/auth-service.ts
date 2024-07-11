import axios from "axios";

interface RegisterUserProps {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  email: string;
  username?: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

type EnquiryData = {
  userId: number;
  uniId: number;
  level: string;
  specialization: string;
};

const baseUrl = "https://admin.onlyeducation.co.in";

// Register User Service
export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL("/api/auth/local/register", baseUrl);
  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-cache",
    });

    return await response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
    throw new Error("Failed to register user. Please try again later.");
  }
}

// Send OTP Service
export async function sendOtpService(phone: string) {
  try {
    const apiKey = process.env.TWOFACTOR_API_KEY;
    const otpTemplateName = process.env.OTP_TEMPLATE_NAME;
    const pathVariables = `/${apiKey}/SMS/+91${phone}/AUTOGEN3/${otpTemplateName}`;
    const response = await axios.get(
      `https://2factor.in/API/V1${pathVariables}`
    );
    return response.data;
  } catch (error) {
    console.error("Send OTP Service Error:", error);
    throw new Error("Failed to send OTP. Please try again later.");
  }
}

// Update OTP Session Service
export async function putOtpSession(otpSession: string, userId: number) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${userId}?populate=true`,
      {
        otp_session: otpSession,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Put OTP Session Service Error:", error);
    throw new Error("Failed to update OTP session. Please try again later.");
  }
}

// Verify OTP Service
export async function verifyOtpService(
  otpSession: string,
  otpEnteredByUser: string
) {
  try {
    const apiKey = process.env.TWOFACTOR_API_KEY;
    const response = await axios.get(
      `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${otpSession}/${otpEnteredByUser}`
    );
    return response.data;
  } catch (error) {
    console.error("Verify OTP Service Error:", error);
    throw new Error("Failed to verify OTP. Please try again later.");
  }
}

// Update Verified User Service
export async function updateVerifiedUserService(userId: number | string) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${userId}?populate=true`,
      {
        verified: true,
        otp_session: "",
      }
    );
    return response.data;
  } catch (error) {
    // console.error("Update Verified User Service Error:", error);
    // throw new Error("Failed to update verified user. Please try again later.");
    return { error: "Something went wrong please try again later" };
  }
}

// Update Phone User Service
export async function putPhoneUserService(userId: number, phone: string) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${userId}?populate=true`,
      {
        phone: phone,
        username: phone,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Put Phone User Service Error:", error);
    throw new Error("Failed to update phone number. Please try again later.");
  }
}

// Login User Service
export async function loginUserService(userData: LoginUserProps) {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await axios.post(url.toString(), userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return { error: "Invalid Credentials! please try again." };
  }
}

// Verify Phone User Service
export async function verifyPhoneUserService(
  userId: number,
  data: { last_otp_request: Date; resend_attempts: number }
) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${userId}?populate=true`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Verify Phone User Service Error:", error);
    throw new Error("Failed to verify phone user. Please try again later.");
  }
}

export async function enquiryService({
  userId,
  uniId,
  level,
  specialization,
}: EnquiryData) {
  try {
    // Attempt to update the existing enquiry
    const putResponse = await axios.put(`${baseUrl}/api/enquiries`, {
      data: {
        users_permissions_user: {
          connect: [userId],
        },
        university: {
          connect: [uniId],
        },
        level: level,
        specialization: specialization,
      },
    });

    console.log(putResponse);
    return {
      success: true,
      error: false,
      userId: userId,
    };
  } catch (putError) {
    try {
      // If update fails, create a new enquiry
      const postResponse = await axios.post(`${baseUrl}/api/enquiries`, {
        data: {
          users_permissions_user: {
            connect: [userId],
          },
          university: {
            connect: [uniId],
          },
          level: level,
          specialization: specialization,
        },
      });

      return {
        success: true,
        error: false,
        userId: userId,
      };
    } catch (postError) {
      return {
        success: false,
        error: true,
        userId: userId,
      };
    }
  }
}
