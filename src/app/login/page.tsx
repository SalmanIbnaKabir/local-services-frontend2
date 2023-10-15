import Navbar from "@/components/UI/Navbar";
import Login from "@/components/page/login";

export const metadata = {
  title: "LService | Login",
  description: "This is a Login Page",
};

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
