"use client"
import Image from "next/image";
import styles from "./Login.module.css"
import BottomSide from "../BottomSideLoginLogout/BottomSide";
import { useRouter } from "next/navigation";

const dummyUsers = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' }
];

const Login = () => {
  const router = useRouter();

  const navigateSignUp = () => {
    router.push("/signup")
  }

  const handleLogin = (event : any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate against dummy data
    const isValidUser = dummyUsers.some(user => user.email === email && user.password === password);

    if (isValidUser) {
        router.push("/"); // Navigate to home page
    } else {
        alert("Email ou mot de passe incorrecte");
    }
};
  return ( 
    <>
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.e_image}>
          <Image 
            src="/Assets/e-image.png"
            width={196}
            height={207}
            alt="e-image"
          />
        </div>
        <div className={styles.content_container}>
          <form onSubmit={handleLogin}>
            <div className={styles.description}>
              <h2>Votre Compagnon de Voyage</h2>
              <p>Veuillez remplir vos coordonnées ci-dessous pour ce connecter</p>
            </div>
            <div className={styles.input_container}>
              <div className={styles.input_area}>
                <label htmlFor="email">Nom d'utilisateur ou email</label>
                <input type="email" id="email" name="email" placeholder="Entrer votre Email" required />
              </div>
              <div className={styles.input_area}>
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" id="password" name="password" placeholder="*******" required />
              </div>
            </div>
            <div className={styles.side_button}>
              <button type="submit">Se connecter</button>
              <p>Vous n'avez pas de compte ? <span onClick={navigateSignUp}>s'inscrire</span></p>
              <p><span></span> ou <span></span></p>
            </div>
            <div className={styles.google_button}>
            <button>
              <Image 
                src="https://s3-alpha-sig.figma.com/img/2e2b/1d68/e2c3cfd3921a08e1e32f9728eb1f8e16?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEtEPn5dVq-Nh-dvXHHQsz7WCpRjq9QwC-Cvm6LlBEw6hWs0GqOhp4TSvhQOEONmBLINMhhbMl8CYfgn0gonLlj6Nx-TFywvM5bu2FcWToCv-GFuiFiLO4MoUijjoPYRDtW8FoTKQLYO0KSsHT6M90fR1OE4Zf86nsiMfDKNDFjuvJ0qCSYOIyCXO0UOn-IRtd8SwpysU8hy-6FCRTIjbOqla0de6e0D4sE7I8oBC0jBcCgYFflkwW5cleL1-gYB-hDwV57psuSwjXFAZW3ZK-UtovKHsCjbFYAxAoVLdFjmnMq7iGH3xAeBnFI8QO31r4RrFvqIJcdYJrOaUuu3uQ__"
                alt="google logo"
                width={20}
                height={20}            
              />
              <span >Continuer avec Google</span>
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles['image-container']}>
        <Image 
          src="https://s3-alpha-sig.figma.com/img/7aea/8ab1/34bebb570b0398ecef6d1ff3cb9df3dc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0MmWdCfXPzsn3tV~N05Zw7w6M1uVh4XUuByf~r9RiIDGfJnqvllzky7E78JqFf5jWHcWZHwMGnqVmAZ547siOLy-zhZMBL~FWv958UsIev9ryopvtfjsLWWP9~UjX1Pq7Efa-aF21U5mnf92fbR5zz7mDtPycJMX2vJAgC1q3d0FRbOHRnjPZNWbwQS7NTQml4LO75GN2fDuhNOLF6~PDTspeheNJFcwwZpnOUOovIq3hAOnFoUshw1yJZ3llz9pIiPl8GRjYXkqo2-YV0r1T1kqJT7G0zEBcUke3WJSLgIG3ZMbI4ktlDYub5ZCxLvPWZkI4fB~bbu6q0P0occMw__"
          alt="Voyage tkeker" 
          width={720}
          height={1024}
        />
      </div>
    </div>
    <BottomSide />
    </>
   );
}
 
export default Login;