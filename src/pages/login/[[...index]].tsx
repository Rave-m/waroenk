import { SignIn } from "@clerk/nextjs";
import Link from "next/link"

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Link href={'/'}>Kembali</Link>
      <SignIn />
    </div>
  );
};

export default SignInPage;
