const signup = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = document.querySelector("#signup-name").value.trim();
  const signupEmail = document.querySelector("#signup-email").value.trim();
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

const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", signup);
