const signupForm = document.getElementById(".signup-form");
const loginForm = document.querySelector(".login-form");

const login = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("button pushed");
  const loginEmail = document.querySelector("#login-email").value.trim();
  const loginPassword = document.querySelector("#login-password").value.trim();

  if (loginEmail && loginPassword) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signup = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = document.querySelector("#signup-name").value.trim();
  const signupEmail = document.querySelector("signup-email").value.trim();
  const signupPassword = document
    .querySelector("#signup-password")
    .value.trim();
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      name,
      email: signupEmail,
      password: signupPassword,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

loginForm.addEventListener("submit", login);
signupForm.addEventListener("submit", signup);
