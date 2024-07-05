import Otp from "@/modules/account/components/otp";
import { getOtpSession } from "../data/services/get-token";
import { cookies } from "next/headers";
import { useRouter } from "next/router";
import { getUserMeLoader } from "../data/services/get-user-loader";
import { redirect } from "next/navigation";

const OtpPage = async () => {
  const info = await getOtpSession();
  const user = await getUserMeLoader();
  if (!user.ok) {
    redirect("/");
  }
  const { id, phone } = user.data;

  return (
    <div className="max-w-md mx-auto border p-3 rounded-xl mb-12">
      <Otp userId={id} otpSession={info.otpSession} phone={phone} />
    </div>
  );
};

export default OtpPage;
