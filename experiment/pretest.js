
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "In this method, the sulphates present are estimated in the form of ",
      answers: {
        a: "Calcium Sulphate",
        b: "Magnesium Sulphate ",
        c: "Sodium Sulphate",
        d: "Barium Sulphate "
      },
      correctAnswer: "d"
    },
    {
      question: "The turbidity is measured using UV-visible spectrometer at ",
      answers: {
        a: "400nm",
        b: "410nm",
        c: "420nm",
        d: "430nm"
      },
      correctAnswer: "c"
    },
    {
      question: "The presence of calcium sulphate in water causes corrosion. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
        question: "The method used to test sulfate in water in this is ",
        answers: {
          a: "Spectrometric method",
          b: "Turbidimetric method",
          c: "Nephelometric method",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
    {
        question: "The minimum detectable concentration by turbidimetric method is ",
    answers: {
          a: "1ppm",
          b: "5ppm",
          c: "10ppm",
          d: "None of the above"
        },
        correctAnswer: "a"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
