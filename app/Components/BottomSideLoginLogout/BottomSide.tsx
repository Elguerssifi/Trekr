"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BottomSide.module.css"

const BottomSide: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("/Assets/image_phones.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/Assets/phones_tab_media.png"); // Replace with your small image source
      } else {
        setImageSrc("/Assets/image_phones.png"); // Replace with your large image source
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function initially to set the image on load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return ( 
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.logo_description}>
          <div className={styles.image_container}>
            <Image
              className={styles.trekr_image} 
              src="https://s3-alpha-sig.figma.com/img/e09f/7516/cb7ecdc363602a2ec1bfe9d947d12d73?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpkE6EzHqgKoJ49c81fJOWQpZHX0zbe3c9G2BJffV6Hp8qN0ZGy8vuSBW22wo3tNzn4J6nZAZQLDMFO31DH6Zrpfk4EnuXaaoap5o0RzJjzw2t7lTQIAkt~yDvcdXiTlxHlrHAcx4Y53totJ54rFeeTslHPiPfF4HzgJtkQEzbO5bxl48y3F6Br5Mkzwv5~JscRf6xXT4-TIqJ2XvWY8YuV5it7iAHrhTTT3LdS9owwI61S2W0QwjhVKE5vAk7NL3qtsEG01Kp3HJeiY7I8Pur6pot1hE-DpiaMhn7mmKPRgE5g5XnH6aSJERpIiY0xwsnAAaWuh3AS66E~z2J0syg__"
              alt="Trekr"
              width={432}
              height={380}
            />
          </div>
          <div className={styles.description}>
            <p>Explorer le Monde avec <span>Trekr</span>: <br />
            Votre Compagnon de Voyage Social</p>
          </div>
        </div>
        <div className={styles.application_store}>
          <p>Téléchargez l&apos;application</p>
          <div className={styles.images_store}>
            <Image 
              src="/Assets/google_play.png"
              alt="google play"
              width={135}
              height={40}
            />
            <Image 
              src="/Assets/app_store.png"
              alt="app store"
              width={135}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className={styles.phones_side}>
        <Image 
          className={styles.phones_images}
          src={imageSrc}
          alt="iphone"
          width={1200}
          height={700}
        />
      </div>
    </div>
  );
}

export default BottomSide;
