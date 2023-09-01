import React from 'react';
import styles from '@/styles/OnBoarding.module.css';

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

  function nextQuestion() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const newScrollPosition = currentScrollPosition + window.innerHeight;

    // Scroll to the new position with a smooth animation
    window.scrollTo({
      top: newScrollPosition,
      behavior: "smooth"
    });
  }

  function prevQuestion() {
    // Calculate the new scroll position by subtracting 100vh from the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const newScrollPosition = currentScrollPosition - window.innerHeight;

    // Ensure the new scroll position doesn't go below 0
    const finalScrollPosition = Math.max(0, newScrollPosition);

    // Scroll to the new position with a smooth animation
    window.scrollTo({
      top: finalScrollPosition,
      behavior: "smooth"
    });
  }

  return (
    <main className={styles.container}>
      
      {questions.map((element, index) => (
        <div className={styles.question} key={index}>
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
        <button onClick={prevQuestion}>Prev</button>
        <button onClick={nextQuestion}>Next</button>
      </div>
    </main>
  );
}
