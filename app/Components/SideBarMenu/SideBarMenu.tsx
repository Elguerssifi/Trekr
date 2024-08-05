"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./SideBarMenu.module.css"
import { IconType } from "react-icons";
import { FaHome, FaCompass, FaEnvelope, FaBell, FaPlus, FaUsers, FaMap, FaUser } from "react-icons/fa";

type LinkItem = {
  title: string;
  icon: IconType;
  href: string;
  img?: string;
};

const links: LinkItem[] = [
  { title: "Acceuil", icon: FaHome, href: "/acceuil" },
  { title: "Explorer", icon: FaCompass, href: "/explorer" },
  { title: "Message", icon: FaEnvelope, href: "/message" },
  { title: "Notifications", icon: FaBell, href: "/notifications" },
  { title: "Créer", icon: FaPlus, href: "/creer" },
  { title: "Communauté", icon: FaUsers, href: "/communaute" },
  { title: "Carte", icon: FaMap, href: "/carte" },
  { title: "Profile", icon: FaUser, img: "/Assets/e-image.png", href: "/profile" },
];

const SideBarMenu: React.FC = () => {
  return ( 
    <nav className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.logo}>
         <Image
            src="https://s3-alpha-sig.figma.com/img/e09f/7516/cb7ecdc363602a2ec1bfe9d947d12d73?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxmurMXWxSvW9sIHxjvPR2dB32A52kboZBcdosAsHiEyArIg2hHDZTgwLmSa4hriu9WBTGRvQLmiLk7sLHB0cViFYJN86RKB8KI-Zb2j6mPO1NlPgLJKsSy4HjR4ag8YRt42QaIpePaRD3H4CW0~vGlxFaHabeLvI2MZEPdeZG~AZ7rceSBXwscKq3GNovi8rvY5CUv-t5hvXMzj7dMay6FKT~c8-iuf05JnRrfboV43qPTtYEEC3Rdfi7wnBkFuyGnl-z7pr0iQECyTiARAH~kWk5yCnYWMfe-ZlcYM4xPn5ojKbikPK77D45Ra4nKIf0nbaVTjxnIo~PSmInJckw__"
            alt="Trekr"
            width={166}
            height={172}
          />
        </div>
        <div className={styles.nav_link}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                    {link.img ? (
                      <div className={styles.image_container}>
                        <img src={link.img} alt={`${link.title} icon`} />
                      </div>
                    ) : (
                      <link.icon />
                    )}
                    {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
   );
}

export default SideBarMenu;
