import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/modules/account/components/ui/input";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <p className="text-xl font-medium uppercase">Current education details</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <Label>Select Your Gender</Label>
          <RadioGroup className="flex" defaultValue="male">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="male"
                id="male"
                {...register("step2.gender")}
              />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="female"
                id="female"
                {...register("gender")}
              />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="other"
                id="other"
                {...register("gender")}
              />
              <Label htmlFor="other">Rather Not Say</Label>
            </div>
          </RadioGroup>
          {errors.gender && (
            <p className="text-sm text-red-500">
              {errors.gender.message as React.ReactNode}
            </p>
          )}
        </div>
        <div>
          <Label>Select Graduation College/Institute</Label>
          <Input type="text" {...register("mobileNumber")} />
          {errors.mobileNumber && (
            <span className="text-red-500 font-medium">
              {errors.mobileNumber.message as React.ReactNode}
            </span>
          )}
        </div>
        <div>
          <Label>Work experience (in years)</Label>
          <Input type="text" {...register("city")} />
          {errors.city && <span>{errors.city.message as React.ReactNode}</span>}
        </div>
      </div>
    </div>
  );
};

export default Step2;
