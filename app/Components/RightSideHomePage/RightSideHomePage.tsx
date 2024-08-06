"use client"
import styles from "./RightSideHomePage.module.css"
import SearchUsers from "./SearchUsers";
import Suggestions from "./Suggestions";
import Map from "./Map";
import BottomDescription from "./BottomDescription";

const RightSideHomePage = () => {
  return ( 
    <section className={styles.right_side}>
      <div className={styles.row_right_side}>
        <SearchUsers />
        <Suggestions />
        <Map />
        <BottomDescription />
      </div>
    </section>
   );
}
 
export default RightSideHomePage;