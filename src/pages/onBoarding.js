import React from 'react';
import styles from '@/styles/OnBoarding.module.css';
import Image from 'next/image';

export default function OnBoarding() {
  const questions = [
    {
      question: "Who Are You ??",
      options: ["Teacher", "Student", "Guardian"]
    },
    {
      question: "What Is Your Gender ??",
      options: ["Male", "Female"]
    },
    {
      question: "What Is Your Disability ??",
      options: ["Blind", "Deaf", "Dumb", "None"]
    }
  ];

  return (
    <main className={styles.container}>
      {questions.map((element, index) => (
        <div className={styles.question} id={`question-${index}`} key={index}>
          <h1>{element.question}</h1>
          <div className={styles.options}>
            {element.options.map((option, optionIndex) => (
              <div className={styles.option} key={optionIndex}>
                <h2>{option}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.navigationButtons}>
        <button>Made By Akash With Love 💖</button>
        <button><Image src={"/codingyogi.png"} width={60} height={30}/></button>
      </div>
    </main>
  );
}