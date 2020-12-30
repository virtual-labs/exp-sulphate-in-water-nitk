
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
      question: "Transmittance is the ratio of the intensity of transmitted light to that of incident light.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },

    {
      question: "A calibration curve is the plot of ",
      answers: {
        a: "Absorbance of solutions against time",
        b: "Time against concentration of solutions",
        c: "Absorbance against concentration of solutions",
        d: "Concentration of solutions against time"
      },
      correctAnswer: "c"
    },

    {
      question: "As per Beer - Lambert’s Law the amount of light absorbed is _________________ the concentration of the solution. ",
      answers: {
        a: "Directly proportional",
        b: "Inversely proportional",
        c: "Greater than",
        d: "Smaller than"
      },
      correctAnswer: "a"
    },
    {
      question: "The optical density is ______________ to concentration of the substance.",
      answers: {
        a: "Inversely proportional",
        b: "Directly proportional",
        c: "Linearly proportional",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Blank solution is used in colorimetric estimation to",
      answers: {
        a: "Check the instrument",
        b: "Nullify the absorbance caused due to the colouring impurities present in the reagents",
        c: "Nullify the error caused by the instrument",
        d: "Nullify the error caused by colour"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
