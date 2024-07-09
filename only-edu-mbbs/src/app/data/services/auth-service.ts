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

    if (!response.ok) {
      return response.json();
    }

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
    throw new Error("Failed to register user. Please try again later.");
  }
}

// Send OTP Service
export async function sendOtpService(phone: string) {
  const apiKey = process.env.TWOFACTOR_API_KEY;
  const otpTemplateName = process.env.OTP_TEMPLATE_NAME;
  const pathVariables = `/${apiKey}/SMS/+91${phone}/AUTOGEN3/${otpTemplateName}`;
  const response = await axios.get(`https://2factor.in/API/V1${pathVariables}`);
  return response.data;
}

export async function putOtpSession(otpS: string, id: number) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${id}?populate=true`,
      {
        otp_session: otpS,
      }
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: true,
    };
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
    return { Status: "fail" };
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
    return {
      success: false,
      error: true,
      userId: userId,
    };
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
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Login User Service
export async function loginUserService(userData: LoginUserProps) {

  const url = new URL("/api/auth/local", baseUrl);

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...userData }),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}

// Additional Send OTP Service (if needed)
export async function sendOtp(phone: string) {
  try {
    const apiKey =
      process.env.TWOFACTOR_API_KEY ?? "15288276-dc54-11ee-8cbb-0200cd936042";
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
    console.error("Error updating user data:", error);
    throw error;
  }
}
