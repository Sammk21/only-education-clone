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
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
    throw new Error("Failed to register user. Please try again later.");
  }
}

// Send OTP Service
export async function sendOtpService(phone: string) {
  console.log(phone);

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
export async function updateVerifiedUserService(userId: string) {
  try {
    const response = await axios.put(
      `${baseUrl}/api/users/${userId}?populate=true`,
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

// Login User Service
export async function loginUserService(userData: LoginUserProps) {
  console.log(userData);

  const url = new URL("/api/auth/local", baseUrl);

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
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
    const apiKey = process.env.TWOFACTOR_API_KEY ?? "15288276-dc54-11ee-8cbb-0200cd936042";
    const otpTemplateName = process.env.OTP_TEMPLATE_NAME;
    const pathVariables = `/${apiKey}/SMS/+91${phone}/AUTOGEN3/${otpTemplateName}`;
    const response = await axios.get(`https://2factor.in/API/V1${pathVariables}`);

    return response.data;
  } catch (error) {
    console.error("Send OTP Service Error:", error);
    throw new Error("Failed to send OTP. Please try again later.");
  }
}