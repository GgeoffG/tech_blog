const deleteButtons = document.querySelectorAll(".delete-button");
console.log(deleteButtons);
const deleteHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("click");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogposts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", deleteHandler);
});
