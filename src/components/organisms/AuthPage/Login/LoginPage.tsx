import React, { useState } from "react";
import { authImages } from "../../../../utilities/authImages";
import LoginForm from "../../../molecules/Auth/Login/LoginForm";
import RandomImageGenerator from "../../../molecules/Shared/RandomImageGenerator";

const LoginPage: React.FC = () => {
  const [loading] = useState(false);

  const imagePaths = authImages;

  return (
    <>
      <div className="md:w-1/2 px-8 md:px-16">
        <LoginForm loading={loading} />
      </div>

      <div className="md:block hidden w-1/2">
        <RandomImageGenerator imagePaths={imagePaths} />
      </div>
    </>
  );
};

export default LoginPage;
