const createPostButton = document.getElementById("create-post-button");
const postTemplate = document.querySelector(".newpost-form");

const postCreator = async (event) => {
  event.preventDefault();
  if (createPostButton.innerHTML !== "Submit") {
    console.log("click");
    postTemplate.classList.remove("hide");
    createPostButton.innerHTML = "Submit";
  } else {
    const blogTitle = document.querySelector("#post-title").value.trim();
    const blogBody = document.querySelector("#post-body").value.trim();
    const response = await fetch("/api/blogposts", {
      method: "POST",
      body: JSON.stringify({ title: blogTitle, main: blogBody }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

createPostButton.addEventListener("click", postCreator);
