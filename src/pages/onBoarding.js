import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/OnBoarding.module.css';
import Image from 'next/image';
import { questions } from '@/utils/questions';

import { account, databases } from '@/appwrite/appwriteConfig';
import { useRouter } from 'next/router';

import getConfig from 'next/config';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Preloader from '@/components/Preloader';

import { v4 as uuidv4 } from 'uuid';

export default function OnBoarding() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState()
  const { publicRuntimeConfig } = getConfig();

  const questionRefs = questions.map(() => useRef(null))
  const router = useRouter()

  useEffect(() => {
    const user = account.get()
    setLoading(true)

    user.then(
      (response) => {
        setLoading(false)
        setUserInfo(response)
        console.log(response)
      },
      (err) => {
        setLoading(false)
        router.push("/")
      }
    )
  }, [router])

  function handleClick(questionIndex, optionIndex) {
    const selectedOption = questions[questionIndex].options[optionIndex];

    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[questionIndex] = selectedOption;
      return updatedAnswers;
    });

    scrollToView(questionIndex)
  }

  async function scrollToView(questionIndex) {
    if (questionIndex < questions.length - 1) {
      setTimeout(() => questionRefs[questionIndex + 1].current.scrollIntoView({ behavior: 'smooth' }), 250)
    } else {
      await toast.promise(
        () => updateDB(),
        {
          pending: 'Redirecting To DashBoard',
          // success: '👌',
          // error: 'Operation Failed 🤯',
        }
      );
    }
  }

  async function updateDB() {
    const [Role, Gender, Disability] = selectedAnswers
    const response = await databases.updateDocument(publicRuntimeConfig.APPWRITE_DATABASE_ID, publicRuntimeConfig.APPWRITE_COLLECTION_ID, userInfo?.$id, {
      isBioDataFilled: true,
      Role,
      Gender,
      Disability
    })

    router.push("/dashboard")

    console.log(response)
  }

  return (
    <>
      {
        loading ? <Preloader /> :
          <main className={styles.container}>
            {questions.map((element, questionIndex) => (
              <div
                className={styles.question}
                id={`question-${questionIndex}`}
                key={questionIndex}
                ref={questionRefs[questionIndex]} // Assign the ref to the question element
              >
                <h1>{element.question}</h1>
                <div className={styles.options}>
                  {element.options.map((option, optionIndex) => (
                    <div
                      onClick={() => handleClick(questionIndex, optionIndex)}
                      className={styles.option}
                      id={
                        selectedAnswers[questionIndex] === option
                          ? styles.selected
                          : '' // Apply the "selected" class when selected
                      }
                      key={optionIndex}
                    >
                      <h2>{option}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.navigationButtons}>
              <button>Made By Akash With Love 💖</button>
              <button>
                <Image src={"/codingyogi.png"} width={60} height={30} alt='sponsers logo' />
              </button>
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </main>
      }
    </>
  );
}