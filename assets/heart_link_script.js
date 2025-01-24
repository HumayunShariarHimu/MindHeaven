document.getElementById('relationshipForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collecting input values
  const love = parseInt(document.getElementById('love').value);
  const trust = parseInt(document.getElementById('trust').value);
  const dependence = parseInt(document.getElementById('dependence').value);
  const interest = parseInt(document.getElementById('interest').value);
  const communication = parseInt(document.getElementById('communication').value);

  // Analysis logic
  const averageScore = (love + trust + dependence + interest + communication) / 5;

  let resultMessage;
  if (averageScore > 8) {
    resultMessage = "Your relationship is Strong and Healthy!";
  } else if (averageScore > 5) {
    resultMessage = "Your relationship is Good But Beeds some Improvement.";
  } else {
    resultMessage = "Your Relationship Needs Significant Improvement. Consider Focusing on Trust, Communication and Love.";
  }

  // Displaying the result
  const analysisDiv = document.getElementById('analysis');
  analysisDiv.innerHTML = `
    <p><strong>Average Score:</strong> ${averageScore.toFixed(2)}</p>
    <p>${resultMessage}</p>
  `;
  document.getElementById('result').style.display = 'block';
});