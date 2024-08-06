"use client"
import styles from "./RightSideHomePage.module.css"
const BottomDescription = () => {
  return ( 
    <div className={styles.bottom_container}>
      <div className={styles.description}>
        <h4>Vous êtes <span>Unique</span></h4>
        <p>Unique. Inclusif. Personnalisé.</p>
      </div>
      <div className={styles.image_description}>
        <img 
          src="https://s3-alpha-sig.figma.com/img/3ee2/79d2/7616179ca9d78223dfa7cf98577163c7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kCNU0xmYYjN3rlqOWXl48~TKnWY-FYWK79AjKmCGB43fNiY-vziIEQoB2GhYWYQNzjAncfRWQUYyUu0MXoDMdzqdyQvSjJkwnFeNpp~7qi3EqrqzlVgGhAlvvYeaE04JDURfHYVF5baBVsghl32mHBMK4AVZ2xxihLFXzXMjEUxjgCryq2IoHl3M6ExEiaDVSPvJlWs0xVeMt2lyu3N22d98Ba3YtLM0yqgNUzegrxWxODMsJZLt6dnpayG0UG-EuEAsCGPdi45EBc2DVc3DP0v3E9YBDT8HsDrYSYWTdLOh44GOxBOaxYgLRlX9QY5wO~shdkj-DmzCJa0Me0NMqw__" 
          alt="" 
        />
      </div>
      <div className={styles.area_button}>
        <button>Explorez Maintenant</button>
      </div>
    </div>
   );
}
 
export default BottomDescription;