import Navbar from "@/components/UI/Navbar";
import SignUp from "@/components/page/signup";

export const metadata = {
  title: "LService | Register",
  description: "This is a Register Page",
};

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
