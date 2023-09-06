import React, { useState, useRef } from 'react';
import styles from '@/styles/OnBoarding.module.css';
import Image from 'next/image';

export default function OnBoarding() {
  const questions = [
    {
      question: "Who Are You ??",
      options: ["Teacher", "Student", "Guardian", "Instructor"],
      selectedOption: null,
    },
    {
      question: "What Is Your Gender ??",
      options: ["Male", "Female"],
      selectedOption: null,
    },
    {
      question: "What Is Your Disability ??",
      options: ["Blind", "Deaf", "Dumb", "None"],
      selectedOption: null,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const questionRefs = questions.map(() => useRef(null)); // Create refs for each question

  function handleClick(questionIndex, optionIndex) {
    const selectedOption = questions[questionIndex].options[optionIndex];

    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[questionIndex] = selectedOption;
      return updatedAnswers;
    });

    // Scroll to the next question
    if (questionIndex < questions.length - 1) {
      setTimeout(() => questionRefs[questionIndex + 1].current.scrollIntoView({ behavior: 'smooth' }), 500)
    }
  }

  return (
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
          <Image src={"/codingyogi.png"} width={60} height={30} />
        </button>
      </div>
    </main>
  );
}