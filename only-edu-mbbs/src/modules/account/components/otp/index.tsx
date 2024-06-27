import React from "react";
import { LOGIN_VIEW } from "../../templates/login-template";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Otp = ({ setCurrentView }: Props) => {
  return <div>Otp</div>;
};

export default Otp;
