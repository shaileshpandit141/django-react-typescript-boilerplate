import React from "react";
import { NavLink } from "components";
import { isAuthenticated } from "utils";

const SignupLink: React.FC = (): JSX.Element | null => {
  if (isAuthenticated()) {
    return null;
  }

  return (
    <NavLink to="/auth/sign-up" type="link" icon="signup">
      Sign up
    </NavLink>
  );
};

export default SignupLink;
