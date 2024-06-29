import Otp from "@/modules/account/components/otp";
import { getOtpSessionAndUserId } from "../data/services/get-token";

const OtpPage = async () => {
  const info = await getOtpSessionAndUserId();
  return (
    <div className="max-w-md mx-auto border p-3 rounded-xl mb-12">
      <Otp userId={info.userId} otpSession={info.otpSession} />
    </div>
  );
};

export default OtpPage;
