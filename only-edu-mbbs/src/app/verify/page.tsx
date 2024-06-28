import Otp from "@/modules/account/components/otp";
import { searchParamUserId } from "@/types/types";
import { getOtpSession } from "../data/services/get-token";

const OtpPage = async ({ searchParams }: Readonly<searchParamUserId>) => {
  //    const otpVerificationResponse = await verifyOtpAction(
  //      otpSessionId,
  //      data,
  //      userId
  //    );
  //    if (otpVerificationResponse?.success) {
  //      toast.success("OTP verified successfully");
  //      // router.push("/");
  //    } else {
  //      // Handle OTP verification errors here
  //      toast.error("OTP verification failed");
  //    }

  let { dh } = searchParams;

  console.log("searchParams", searchParams);

  const otpSession = await getOtpSession();

  console.log("userId", dh);
  console.log("otpSession", otpSession);

  return (
    <div className="max-w-xs mx-auto border p-3 rounded-xl mb-12">
      <Otp userId={dh} otpSession={otpSession} />
    </div>
  );
};

export default OtpPage;
