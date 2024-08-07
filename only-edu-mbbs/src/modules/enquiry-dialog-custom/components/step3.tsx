import { Label } from "@/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        <Label>Course Interested In</Label>
        <Input type="text" {...register("course")} />
        {errors.course && (
          <span>{errors.course.message as React.ReactNode}</span>
        )}
      </div>
    </div>
  );
};

export default Step3;
