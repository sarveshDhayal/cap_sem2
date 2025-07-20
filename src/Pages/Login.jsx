import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
      <SignIn routing="path" path="/login" />
    </div>
  );
};

export default Login;
