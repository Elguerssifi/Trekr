"use client"
import FeedPage from "./FeedPage";
import styles from "./MiddleHomePage.module.css"
import Stories from "./Stories";
import { useRouter } from "next/navigation";

const MiddleHomePage = () => {
  const router = useRouter();
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if(!accessToken){
    router.push("/login")
    return <></>
  }
  return ( 
    <section className={styles.middle_section}>
      <div className={styles.middle_row}>
        <Stories />
        <FeedPage />
      </div>
    </section>
   );
}
 
export default MiddleHomePage;