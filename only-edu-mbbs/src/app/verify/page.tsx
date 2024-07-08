import Otp from "@/modules/account/components/otp";
import { getOtpSession } from "../data/services/get-token";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { redirect } from "next/navigation";

const OtpPage = async () => {
  const info = await getOtpSession();
  const user = await getUserMeLoader();
  if (!user.ok) {
    redirect("/");
  }

  return (
    <div className="max-w-md mx-auto border p-3 rounded-xl mb-12">
      <Otp user={user} otpSession={info.otpSession} />
    </div>
  );
};

export default OtpPage;
