import Head from "next/head";
import SignUp from "../Components/SignUp/SignUp";

const signup = () => {
  return ( 
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
      <SignUp />
    </>
   );
}
 
export default signup;