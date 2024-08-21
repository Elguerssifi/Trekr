"use client"
import FeedPage from "./FeedPage";
import styles from "./MiddleHomePage.module.css"
import Stories from "./Stories";
import { useRouter } from "next/navigation";
import Head from "next/head";
const MiddleHomePage = () => {
  const router = useRouter();
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if(!accessToken){
    router.push("/login")
    return <></>
  }
  return ( 
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
    <section className={styles.middle_section}>
      <div className={styles.middle_row}>
        <Stories />
        <FeedPage />
      </div>
    </section>
    </>
   );
}
 
export default MiddleHomePage;