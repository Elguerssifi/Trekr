"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./SignUp.module.css"
import BottomSide from "../BottomSideLoginLogout/BottomSide";
import { useRouter } from "next/navigation";
import Axios from 'axios';


const SignUp = () => {
  const router = useRouter();
  const navigateLogin = () => {
    router.push("/login")
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    termsAccepted: false
  });

  const handleChange = (e : any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }
    try {
      const response = await Axios.post('https://213.130.144.203:8084/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const token = response.data.token; 
      localStorage.setItem('token', token); 
      console.log('Sign up successful:', response.data);
      router.push('/login');
    } catch (error) {
      console.error('Error:', error);
      alert('Error during sign up. Please try again.');
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
            <form onSubmit={handleSubmit}>
              <div className={styles.description}>
                <h2>Votre Compagnon de Voyage</h2>
                <p>Veuillez remplir vos coordonnées ci-dessous pour créer un compte</p>
              </div>
              <div className={styles.input_container}>
                <div className={styles.input_area}>
                  <label htmlFor="username">Nom d&apos;utilisateur </label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Entrer votre Nom" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={styles.input_area}>
                  <label htmlFor="email">Email </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Entrer votre Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={styles.input_area}>
                  <label htmlFor="phone">Numéro de téléphone </label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    placeholder="Entrer votre Numéro de téléphone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={styles.input_area}>
                  <label htmlFor="password">Mot de passe </label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Entrer votre Mot de passe" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className={styles.term_condition}>
                <input 
                  type="checkbox" 
                  name="termsAccepted" 
                  checked={formData.termsAccepted} 
                  onChange={handleChange} 
                />
                <p>J&apos;accepte les conditions d&apos;utilisation et la politique de confidentialité</p>
              </div>
              <div className={styles.side_button}>
                <button type="submit">S&apos;inscrire</button>
                <p>Vous avez déjà un compte ? <span onClick={navigateLogin}>se connecter</span></p>
              </div>
            </form>
          </div>
        </div>
        <div className={styles['image-container']}>
          <Image 
            src="https://s3-alpha-sig.figma.com/img/0bd0/baa3/4df486b636462479ad539b92d712b986?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pp5K21t6LXyBMavDpFjvsNbRVkLZ-q44M2Dm~xMH0JW7i0i6TwdV668bAmogVMyNj1HO7BJR28CIYP03xZfqRP240Q7ETtUINr9RqBkuh7HIPU4eToP818ojDhTbqs0zIvlxIaeiYs9Oqt0yLaNlqcHCSTeKiw1X6LUjfX90P~qs7HGAWP6MUMLF5pc6IDpyzyc41lkgj1LKZ2xJ7VBu83LRWrVDCvsQ6S6ah6I3YGJ40mRpc~4873ZxzNYQli9sjmIp90Y6yJEwMUxmgauinOzIWful407BeOoQrNyivqNQIW8PMfA6~tEqiXqQKGvFgFPNhbU9xeoFxqmyBslOTw__"
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
 
export default SignUp;