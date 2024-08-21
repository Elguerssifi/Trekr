import styles from "./page.module.css"
import SideBarMenu from "./Components/SideBarMenu/SideBarMenu";
import MiddleHomePage from "./Components/MidleHomePage/MiddleHomePage";
import RightSideHomePage from "./Components/RightSideHomePage/RightSideHomePage";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
    <main>
      <div className={styles.row}>
        <div className={styles.nav}>
          <SideBarMenu />
        </div>
        <nav className={styles.home}>
          <MiddleHomePage /> 
          <RightSideHomePage />
        </nav>
      </div>
    </main>
    </>
  );
}
