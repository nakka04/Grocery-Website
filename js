document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Example login logic (replace with backend later)
  if (email === "user@example.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "home.html"; // redirect placeholder
  } else {
    alert("Invalid email or password.");
  }
});
