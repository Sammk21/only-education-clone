import Otp from "@/modules/account/components/otp";
import { getOtpSessionAndUserId } from "../data/services/get-token";
import { cookies } from "next/headers";

const OtpPage = async () => {
  const info = await getOtpSessionAndUserId();
  const phone = cookies().get("_phn_")?.value;
  return (
    <div className="max-w-md mx-auto border p-3 rounded-xl mb-12">
      <Otp userId={info.userId} otpSession={info.otpSession} phone={phone} />
    </div>
  );
};

export default OtpPage;
