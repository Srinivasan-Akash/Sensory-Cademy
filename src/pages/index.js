import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa"

export default function Login() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <main className={styles.loginContainer}>
          <div className={styles.loginForm}>
            <Image src={"/logo.png"} alt={"logo"} width={80} height={80} />
            <h1>Welcome To Sensory-Cademy</h1>
            <p>Login Via Email Or Social Handles</p>
            <form className={styles.formInput}>
              <div className={styles.socialHandles}>
              <button><FcGoogle /></button>
                        <button><Image src={"/linkedin.svg"} className={styles.linkedin} width={22} height={22} /></button>
                        <button><AiFillGithub /></button>
                        <button><FaTwitter className={styles.twitter} /></button>
                        <button><FaFacebookSquare className={styles.facebook} /></button>
                    
              </div>
              <div className={styles.divider}>OR</div> {/* Divider with text */}
              <input
                type="email"
                placeholder="Enter Your Email"
              />
              <input
                type="password"
                placeholder="Enter Your Password"
              />
              <button className={styles.submit} type="submit">Log In</button>
              <p>Don't have an account yet ?? <Link href='/signUp'>Sign Up</Link></p>
            </form>
          </div>
        </main>
      </main>
    </>
  )
}
