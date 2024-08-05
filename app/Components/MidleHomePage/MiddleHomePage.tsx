"use client"
import styles from "./MiddleHomePage.module.css"
import Stories from "./Stories";

const MiddleHomePage = () => {
  return ( 
    <section className={styles.middle_section}>
      <div className={styles.middle_row}>
        <Stories />
      </div>
    </section>
   );
}
 
export default MiddleHomePage;