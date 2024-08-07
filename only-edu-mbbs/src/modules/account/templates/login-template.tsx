"use client";
import React, { useState } from "react";
import Login from "../components/login";
import { Register } from "../components/register";
import Otp from "../components/otp";

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

interface response {
  success: boolean;
  details: string;
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in");

  return (
    <div className="w-full flex justify-start px-8">
      {currentView === LOGIN_VIEW.SIGN_IN ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  );
};

export default LoginTemplate;
