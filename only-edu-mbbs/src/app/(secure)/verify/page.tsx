import Otp from "@/modules/account/components/otp";
import { getOtpSession } from "@/app/data/services/get-token";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const OtpPage = async () => {
  const info = await getOtpSession();
  const user = await getUserMeLoader();
  if (!user.ok) {
    redirect("/");
  }

  return (
    <Card className="max-w-md mx-auto border p-3 rounded-xl mb-12 ">
      <CardContent className="flex justify-center items-center w-full flex-col px-0 pb-0">
        <p className="text-center text-xs text-accent my-0">
          Verify yourself by entering OTP below
        </p>
        <div className="w-[180px] h-[110px] relative">
          <Image
            className="object-center object-cover items-center"
            alt="logo"
            fill={true}
            src="https://admin.onlyeducation.co.in/uploads/Only_Edu_Logo_56f967fe38.png"
          />
        </div>
        <Otp user={user} otpSession={info.otpSession} />
      </CardContent>
    </Card>
  );
};

export default OtpPage;
