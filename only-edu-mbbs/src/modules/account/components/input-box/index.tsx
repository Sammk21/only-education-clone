import React, { useEffect, useImperativeHandle, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  // error:boolean;
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
  topLabel?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);


    console.log(props)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text");
      }

      if (type === "password" && !showPassword) {
        setInputType("password");
      }
    }, [type, showPassword]);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <label className="mb-2 bg-light dark:bg-dark txt-compact-medium-plus">
            {topLabel}
          </label>
        )}
        {/* <div className="inputGroup border border-borderLight dark:border-border rounded-3xl "> */}
        <div >



          <label
            className="text-accent dark:focus:bg-dark focus:bg-light focus:outline-foreground"
            htmlFor={name}
            onClick={() => inputRef.current?.focus()}
          >
            {label}
            {required && <span className="text-error">*</span>}
          </label>
          <input
            className={`inputGroup border border-borderLight dark:border-border rounded-3xl invalid:border-error invalid:text-error w-full py-4 px-4`}
            type={inputType}
            name={name}
            placeholder=" "
            required={required}
            {...props}
            ref={inputRef}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-accent px-4 focus:outline-none transition-all duration-150 outline-border focus:text-accent absolute right-0 top-3"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
