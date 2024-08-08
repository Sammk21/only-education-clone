// src/components/MultiStepForm.tsx
"use client";
import { Step, Stepper, useStepper, type StepItem } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validationSchema";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Image from "next/image";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepItem[];

const MultiStepForm = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="grid grid-cols-8 max-w-6xl">
        <div className="col-span-3">
          <Left />
        </div>
        <div className="flex w-full flex-col gap-4 col-span-5">
          <div>
            <h4 className="text-2xl font-medium text-orange-500">
              Register now to apply
            </h4>
            <p>get detail and latest updates</p>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Stepper initialStep={0} steps={steps}>
                {steps.map(({ label }, index) => {
                  return (
                    <Step key={label} label={label}>
                      <div className="flex flex-col my-4 text-primary rounded-md">
                        {index === 0 && <Step1 />}
                        {index === 1 && <Step2 />}
                        {index === 2 && <Step3 />}
                      </div>
                    </Step>
                  );
                })}
                <Footer />
              </Stepper>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();

  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button type="submit" size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default MultiStepForm;

function Left() {
  const features = [
    {
      title: "Brochure Details",
      icon: "https://admin.onlyeducation.co.in/uploads/358011031_10_ce3dc839b2.webp",
    },
    {
      title: "Check Detailed Fees",
      icon: "https://admin.onlyeducation.co.in/uploads/270130412_commerce_705b881267.webp",
    },
    {
      title: "Shortlist & Apply",
      icon: "https://admin.onlyeducation.co.in/uploads/14_adbf03960e.png",
    },
    {
      title: "24/7 Counselling",
      icon: "https://admin.onlyeducation.co.in/uploads/14_adbf03960e.png",
    },
    {
      title: "Scholarships",
      icon: "https://admin.onlyeducation.co.in/uploads/14_adbf03960e.png",
    },
    {
      title: "Application Deadlines",
      icon: "https://admin.onlyeducation.co.in/uploads/14_adbf03960e.png",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        How Only education helps you in Admission
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-center items-center text-xs p-4 rounded-lg shadow-md"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
            />
            <p className="mt-2 text-sm">{feature.title}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">What people say</h2>

      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <Image
          src="https://admin.onlyeducation.co.in/uploads/download_1_e27487aaa5.png"
          alt="Gurmeet Singh"
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div>
          <p className="text-sm">
            Collegedunia is a one-stop solution to all your education related
            queries.
          </p>
          <p className="font-semibold mt-1">Gurmeet Singh</p>
        </div>
      </div>
    </div>
  );
}
