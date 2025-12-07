// Function to check the user's answer
function checkAnswer() {
    // Declare variable for correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (!selectedRadio) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        document.getElementById("feedback").className = "incorrect-feedback";
        return;
    }
    
    // Get the value of the selected radio button
    const userAnswer = selectedRadio.value;
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
    
    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.className = "correct-feedback";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.className = "incorrect-feedback";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);