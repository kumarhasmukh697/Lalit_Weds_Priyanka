// document.addEventListener("DOMContentLoaded", () => {
//     const brideName = "Lalit";
//     const groomName = "Priyanka";
//     const weddingDate = new Date("2025-02-07T00:00:00");

//     const nameForm = document.getElementById("name-form");
//     const authForm = document.getElementById("auth-form");
//     const mainContent = document.getElementById("main-content");
//     const countdownElement = document.getElementById("countdown");

//     authForm.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const enteredBrideName = document.getElementById("bride-name").value.trim();
//         const enteredGroomName = document.getElementById("groom-name").value.trim();

//         if (enteredBrideName === brideName && enteredGroomName === groomName) {
//             nameForm.style.display = "none";
//             mainContent.style.display = "block";
//             startCountdown();
//         } else {
//             alert("Incorrect names! Please try again.");
//         }
//     });

//     function startCountdown() {
//         const updateCountdown = () => {
//             const now = new Date();
//             const timeDifference = weddingDate - now;

//             if (timeDifference <= 0) {
//                 mainContent.innerHTML = "<h1>Wedding Completed</h1>";
//                 clearInterval(timer);
//                 return;
//             }

//             const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//             countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//         };

//         updateCountdown();
//         const timer = setInterval(updateCountdown, 1000);
//     }
// });



// document.addEventListener("DOMContentLoaded", () => {
//     const brideName = "Lalit";
//     const groomName = "Priyanka";
//     const weddingDate = new Date("2025-02-07T00:00:00");

//     const nameForm = document.getElementById("name-form");
//     const authForm = document.getElementById("auth-form");
//     const mainContent = document.getElementById("main-content");
//     const countdownElement = document.getElementById("countdown");

//     authForm.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const enteredBrideName = document.getElementById("bride-name").value.trim();
//         const enteredGroomName = document.getElementById("groom-name").value.trim();

//         const errorMessage = document.createElement("div");
//         errorMessage.id = "error-message";
//         errorMessage.style.color = "red";
//         errorMessage.style.fontSize = "1.2em";
//         errorMessage.style.marginTop = "20px";

//         const existingError = document.getElementById("error-message");
//         if (existingError) {
//             existingError.remove();
//         }

//         if (enteredBrideName !== brideName && enteredGroomName !== groomName) {
//             errorMessage.textContent = `Incorrect names! Correct bride name is "${brideName}" and correct groom name is "${groomName}".`;
//             nameForm.appendChild(errorMessage);
//         } else if (enteredBrideName !== brideName) {
//             errorMessage.textContent = `Incorrect bride name! Correct bride name is "${brideName}".`;
//             nameForm.appendChild(errorMessage);
//         } else if (enteredGroomName !== groomName) {
//             errorMessage.textContent = `Incorrect groom name! Correct groom name is "${groomName}".`;
//             nameForm.appendChild(errorMessage);
//         } else {
//             nameForm.style.display = "none";
//             mainContent.style.display = "block";
//             startCountdown();
//         }
//     });

//     function startCountdown() {
//         const updateCountdown = () => {
//             const now = new Date();
//             const timeDifference = weddingDate - now;

//             if (timeDifference <= 0) {
//                 mainContent.innerHTML = "<h1>Wedding Completed</h1>";
//                 clearInterval(timer);
//                 return;
//             }

//             const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//             countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//         };

//         updateCountdown();
//         const timer = setInterval(updateCountdown, 1000);
//     }
// });



document.addEventListener("DOMContentLoaded", () => {
    const brideName = "Lalit";
    const groomName = "Priyanka";
    const weddingDate = new Date("2025-02-07T00:00:00");
    const postWeddingDate = new Date("2025-02-08T00:00:00");

    const nameForm = document.getElementById("name-form");
    const authForm = document.getElementById("auth-form");
    const mainContent = document.getElementById("main-content");
    const countdownElement = document.getElementById("countdown");

    const now = new Date();

    // Check if the current date is after the wedding date
    if (now >= postWeddingDate) {
        document.body.innerHTML = "<h1 style='text-align: center; color: red; font-size: 2em;'>Wedding Completed</h1>";
        return; // Exit the script
    }

    authForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const enteredBrideName = document.getElementById("bride-name").value.trim();
        const enteredGroomName = document.getElementById("groom-name").value.trim();

        const errorMessage = document.createElement("div");
        errorMessage.id = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "1.2em";
        errorMessage.style.marginTop = "20px";

        const existingError = document.getElementById("error-message");
        if (existingError) {
            existingError.remove();
        }

        if (enteredBrideName !== brideName && enteredGroomName !== groomName) {
            errorMessage.textContent = `Incorrect names! Correct bride name is "${brideName}" and correct groom name is "${groomName}".`;
            nameForm.appendChild(errorMessage);
        } else if (enteredBrideName !== brideName) {
            errorMessage.textContent = `Incorrect bride name! Correct bride name is "${brideName}".`;
            nameForm.appendChild(errorMessage);
        } else if (enteredGroomName !== groomName) {
            errorMessage.textContent = `Incorrect groom name! Correct groom name is "${groomName}".`;
            nameForm.appendChild(errorMessage);
        } else {
            nameForm.style.display = "none";
            mainContent.style.display = "block";
            startCountdown();
        }
    });

    function startCountdown() {
        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = weddingDate - now;

            if (timeDifference <= 0) {
                mainContent.innerHTML = "<h1>Wedding Completed</h1>";
                clearInterval(timer);
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
    }
});
