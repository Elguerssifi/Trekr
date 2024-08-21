"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SideBarMenu.module.css";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaHome, FaCompass, FaEnvelope, FaBell, FaPlus, FaUsers, FaMap, FaUser } from "react-icons/fa";

type LinkItem = {
  title: string;
  icon: IconType;
  href?: string; // Optional href
  img?: string;
  onClick?: () => void;
};

const links: LinkItem[] = [
  { title: "Acceuil", icon: FaHome, href: "/acceuil" },
  { title: "Explorer", icon: FaCompass, href: "/explorer" },
  { title: "Message", icon: FaEnvelope, href: "/message" },
  { title: "Notifications", icon: FaBell, href: "/notifications" },
  { title: "Créer", icon: FaPlus, onClick: () => document.dispatchEvent(new Event("openPopup")) }, // Trigger popup
  { title: "Communauté", icon: FaUsers, href: "/communaute" },
  { title: "Carte", icon: FaMap, href: "/carte" },
  { title: "Profile", icon: FaUser, img: "https://s3-alpha-sig.figma.com/img/1abc/33ed/260797fb26280ba4939cb0d7e5835f5c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuekCKC-q0VU78KOyCcMhfnCvQqA-TmRPhHwcugq-VZyEndkaVu1qnyrmdGdiUsMWKYJEoo9mbCWfHrHPztAullGX57GGEuXl~whraKNlQcKwq55AssYZMHTNZx9JMH6cyDHfS1KtltQN3CB-vj~fgC4Pae6zSjS4Xk6S-oj7tobExhEFETDvj7MUCoGfBXzxR~SnhKtv3Kn2Zv~6cg1xjYMvXMi8xIy~xy4C6nbEH9t0I68vIDRa9jOzkATF8EbMmBvujqT4F2Bk5vWFznVAHkP4fJwHKOpn9F5JXjvQEqXNwyxVUbK8YY53qYypEjjXPswPPdob6ybEJMLjFriNg__", href: "/profile" },
];

const SideBarMenu: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(
    "https://s3-alpha-sig.figma.com/img/e09f/7516/cb7ecdc363602a2ec1bfe9d947d12d73?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxmurMXWxSvW9sIHxjvPR2dB32A52kboZBcdosAsHiEyArIg2hHDZTgwLmSa4hriu9WBTGRvQLmiLk7sLHB0cViFYJN86RKB8KI-Zb2j6mPO1NlPgLJKsSy4HjR4ag8YRt42QaIpePaRD3H4CW0~vGlxFaHabeLvI2MZEPdeZG~AZ7rceSBXwscKq3GNovi8rvY5CUv-t5hvXMzj7dMay6FKT~c8-iuf05JnRrfboV43qPTtYEEC3Rdfi7wnBkFuyGnl-z7pr0iQECyTiARAH~kWk5yCnYWMfe-ZlcYM4xPn5ojKbikPK77D45Ra4nKIf0nbaVTjxnIo~PSmInJckw__"
  );
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/Assets/e-image.png"); 
        setShowText(false);
      } else {
        setImageSrc(
          "https://s3-alpha-sig.figma.com/img/e09f/7516/cb7ecdc363602a2ec1bfe9d947d12d73?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxmurMXWxSvW9sIHxjvPR2dB32A52kboZBcdosAsHiEyArIg2hHDZTgwLmSa4hriu9WBTGRvQLmiLk7sLHB0cViFYJN86RKB8KI-Zb2j6mPO1NlPgLJKsSy4HjR4ag8YRt42QaIpePaRD3H4CW0~vGlxFaHabeLvI2MZEPdeZG~AZ7rceSBXwscKq3GNovi8rvY5CUv-t5hvXMzj7dMay6FKT~c8-iuf05JnRrfboV43qPTtYEEC3Rdfi7wnBkFuyGnl-z7pr0iQECyTiARAH~kWk5yCnYWMfe-ZlcYM4xPn5ojKbikPK77D45Ra4nKIf0nbaVTjxnIo~PSmInJckw__"
        ); 
        setShowText(true);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function initially to set the image and text on load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if (!accessToken) {
    return <></>;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <Image 
            className={styles.trekr_image}
            src={imageSrc} 
            alt="Trekr" 
            width={166} 
            height={172} 
          />
        </div>
        <div className={styles.nav_link}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.href ? (
                  <Link href={link.href}>
                    {link.img ? (
                      <div className={styles.image_container}>
                        <img src={link.img} alt={`${link.title} icon`} />
                      </div>
                    ) : (
                      <link.icon />
                    )}
                    {showText && link.title}
                  </Link>
                ) : (
                  <button onClick={link.onClick} className={styles.buttonLink}>
                    <link.icon />
                    {showText && link.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBarMenu;
