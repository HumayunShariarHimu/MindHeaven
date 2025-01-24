let currentQuestion = 0;
let yesAnswers = 0;
let noAnswers = 0;

const questions = [
  "Is There Any Joy or Happiness or Festive Feeling in Your Mind Right Now?",
  "Do You Consider Yourself Happy?",
  "Are You Able to Laugh Naturally at the Situation You are in Right Now?",
  "You Do not Have any Fear or Danger of Harm? That is, Do you feel Completely Safe & Secure?",
  "Do You Have an Optimistic Mindset?",
  "Are You Comfortable with Your Current State of Mind?",
  "Do You Consider Yourself as A Person without Depression?",
  "Are You Determined to be 100% Committed to Achieving Your Goals?"
];

function answerQuestion(isYes) {
  // Count Yes and No answers
  if (isYes) {
    yesAnswers++;
  } else {
    noAnswers++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    // Show the next question
    document.getElementById("question").innerText = questions[currentQuestion];
  } else {
    // Show the result
    showResults();
  }
}

function showResults() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  // Calculate percentages
  let positivePercentage = (yesAnswers / questions.length) * 100;
  let negativePercentage = (noAnswers / questions.length) * 100;

  // Determine the interpretation based on positive percentage
  let mentalCondition = "";
  if (positivePercentage <= 10) {
    mentalCondition = "Too Much Sad & Bad Condition => Try to get your mental health as soon as possible. Such a mindset can be extremely harmful to yourself and others, so take care of yourself and try to ensure your well-being.";
  } else if (positivePercentage <= 30) {
    mentalCondition = "Bad & Sad Condition => Try to get relief from your upset condition as soon as possible. Such situation is harmful for your life so strive for a beautiful life with a healthy mind.";
  } else if (positivePercentage <= 50) {
    mentalCondition = "Unhealthy Mind => One can never achieve happiness or success with a diseased mind so try to engage in activities that can be pleasurable.";
  } else if (positivePercentage <= 70) {
    mentalCondition = "Average & Natural Mind Condition => In an instinctive and normal mindset, you can try to keep the mind cheerful with more joy stimulation despite being healthy.";
  } else if (positivePercentage <= 90) {
    mentalCondition = "Enjoying Condition => Enjoy the pleasure.";
  } else {
    mentalCondition = "Very Much Joyfulness Mind => Enjoy the feeling of happiness with intense pleasure and excitement. But of course, even in such pleasant situations one should be aware of the reality. Best wishes for your enjoyment";
  }

  // Display the result
  let resultText = `Your Positive Mental Condition: ${positivePercentage.toFixed(2)}%\n`;
  resultText += `Your Negative Mental Condition: ${negativePercentage.toFixed(2)}%\n`;
  resultText += `Mental State Analysis: ${mentalCondition}`;

  document.getElementById("result").innerText = resultText;
}