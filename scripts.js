// Set your access key here
const validAccessKey = "!AcCESS@!";

// Verify the access key
function verifyKey() {
    const accessKeyInput = document.getElementById("accessKey").value;
    const errorMessage = document.getElementById("error-message");

    if (accessKeyInput === validAccessKey) {
        window.location.href = "./home.html"; // Redirect to the home page
    } else {
        errorMessage.innerText = "Invalid access key. Please try again.";
        alert("Invalid access key");
    }
}

// Navigate to the payment page
function goToPayment() {
    window.location.href = "payment.html"; // Redirect to the payment page
}
// Generate a random reference code
function generateReferenceCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referenceCode = '';
    for (let i = 0; i < 10; i++) {
        referenceCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return referenceCode;
}

// Display the reference code on the payment page
let code = document.getElementById('referenceCode');
function displayReferenceCode() {
    const referenceCode = generateReferenceCode();
    code.innerText = referenceCode;
}

// Call displayReferenceCode when the payment page is loaded
displayReferenceCode();


// Countdown in seconds
let countdownTime = 20;

function startCountdown() {
    const countdownDisplay = document.getElementById("countdown");
    const actionButton = document.getElementById("actionButton");

    // Set the initial countdown time
    countdownDisplay.innerText = countdownTime;

    // Start the countdown
    const countdownInterval = setInterval(() => {
        countdownTime--;

        // Update the countdown display
        countdownDisplay.innerText = countdownTime;

        // When the countdown reaches 0, enable the button
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            actionButton.disabled = false;
            actionButton.innerText = "I have paid";
        }
    }, 1000); // Update every second (1000 ms)
}

// Start the countdown when the page loads
window.onload = startCountdown;

function showform() {
    document.getElementById("actionButton").style.display = "None";
    document.getElementById("form").style.display = "block";
    
}

