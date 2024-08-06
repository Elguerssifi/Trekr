import styles from "./page.module.css"
import SideBarMenu from "./Components/SideBarMenu/SideBarMenu";
import MiddleHomePage from "./Components/MidleHomePage/MiddleHomePage";
import RightSideHomePage from "./Components/RightSideHomePage/RightSideHomePage";

export default function Home() {
  return (
    <main>
      <div className={styles.row}>
        <div className={styles.nav}>
          <SideBarMenu />
        </div>
        <div className={styles.home}>
          <MiddleHomePage /> 
          <RightSideHomePage />
        </div>
      </div>
    </main>
  );
}
