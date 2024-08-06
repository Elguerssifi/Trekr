"use client"
import styles from "./RightSideHomePage.module.css"
const Map = () => {
  return ( 
    <div className={styles.map_container}>
      <div className={styles.first_image}>
        <img 
          src="https://s3-alpha-sig.figma.com/img/5139/b237/1c40fd0e14d58c324a5388109df27c76?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBzwMpQrt-HNgBaxGoWILkhHlIj26KUVyYpyRqVVitS7RDUFmD1FQJEw5g6L0ucGoK4AGSR509rAZ79TeHa10C71dXiCzxWLzZUwcXYxCVXpdnILYlG56V2gM0snhWYDkMcYJ7VFHChzGP2cj8ESdHSIVj7DRX3QQ2HxEgfOnbZDiL6427bCoZRmZZ~j0jW6HPx82XEbsPdSlZBQjTpib6BFcVUhsY69kg-T1sZMAF5DBvcF2K~oggkftwjRQbRvmVssSJ8o0V6NfndAaPo9uf1xjY6SRn5215SY5x8Z5dc6hW8Jfir81ozUsW7XYmcdCcUsfV1dTDxFnOTrWLKWcQ__" 
          alt="" 
        />
      </div>
      <div className={styles.map_image}>
        <img 
          src="/Assets/MAP.png" 
          alt="Map image trekr" 
        />
      </div>
    </div>
   );
}
 
export default Map;