import { Label } from "@/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="grid-cols-2 grid gap-4">
        <div>
          <Label>Full Name</Label>
          <Input type="text" {...register("fullName")} />
          {errors.fullName && (
            <span>{errors.fullName.message as React.ReactNode}</span>
          )}
        </div>
        <div>
          <Label>Email Address</Label>
          <Input type="email" {...register("email")} />
          {errors.email && (
            <span>{errors.email.message as React.ReactNode}</span>
          )}
        </div>
        <div>
          <Label>Phone</Label>
          <Input type="tel" {...register("phone")} />
          {errors.phone && (
            <span>{errors.phone.message as React.ReactNode}</span>
          )}
        </div>
        <div>
          <Label>City</Label>
          <Input type="text" {...register("city")} />
          {errors.city && <span>{errors.city.message as React.ReactNode}</span>}
        </div>
        <div>
          <Label>Course you want to study in</Label>
          <Input type="text" {...register("city")} />
          {errors.city && <span>{errors.city.message as React.ReactNode}</span>}
        </div>
      </div>
      <p className="mt-6 font-medium">
        By submitting this form, you accept and agree to our
        <span className="text-blue-500"> Terms of Use.</span>
      </p>
    </div>
  );
};

export default Step1;
