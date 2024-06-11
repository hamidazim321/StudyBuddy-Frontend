interface mockLoginReturn {
  data: {
    username: string;
    token: string;
  };
  status: number;
  message: string;
}

interface mockSignUpReturn {
  data: {
    email: string;
    username: string;
    token: string;
  };
  status: number;
  message: string;
}

export const mockLogin = (loginData: FormData): mockLoginReturn => {
  if (loginData.get("email") && loginData.get("password")) {
    return {
      data: {
        username: "mock user",
        token: "mock token",
      },
      status: 200,
      message: "login successful",
    };
  } else {
    const error = new Error("user not found");
    (error as any).status = 400;
    throw error;
  }
};

export const mockSignup = (signUpData: FormData): mockSignUpReturn => {
  if (
    (signUpData.get("username") as string) &&
    (signUpData.get("email") as string) &&
    (signUpData.get("password") as string) &&
    (signUpData.get("password_confirmation") as string)
  ) {
    if (
      signUpData.get("password") === signUpData.get("password_confirmation")
    ) {
      return {
        data: {
          username: signUpData.get("username") as string,
          email: signUpData.get("email") as string,
          token: "mock token 1234",
        },
        status: 200,
        message: "sign up successful",
      };
    } else {
      const error = new Error("password dont match");
      (error as any).status = 400;
      throw error;
    }
  } else {
    const error = new Error("sign up unsuccessful");
    (error as any).status = 400;
    throw error;
  }
};
