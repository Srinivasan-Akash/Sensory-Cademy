import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { account } from '@/appwrite/appwriteConfig'
import Preloader from '@/components/Preloader'
import SideBar from '@/components/SideBar'

export default function dashboard() {

  const router = useRouter()
  const [userData, setUserData] = useState()

  useEffect(() => {
    const user = account.get()
    user.then(
      (respose) => {
        setUserData(respose)
      },
      (err) => {
        router.push("/")
      }
    )

  }, [router])

  async function logOut() {
    await account.deleteSession("current")
    router.push("/")
  }

  return (
    <>
      {
        userData ? (
          <div className={styles.container}>
            {/* <SideBar/> */}
            <h1>Hello {userData ? userData.email : "loading"}</h1>
            <button onClick={logOut}>LOG OUT</button>
          </div>
        ) : <Preloader />
      }
    </>
  )
}
