import Head from "next/head";
import Login from "../Components/Login/Login";

const login = () => {
  return ( 
    <>
    <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
      <Login />
    </>
   );
}
 
export default login;