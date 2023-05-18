const editButton = document.getElementById("edit-button");

const editPostHandler = async (event) => {
  event.preventDefault();
  if (editButton.innerText === "Edit") {
    const post = document.getElementById("post");
    const input = document.createElement("textarea");
    input.value = post.innerText;
    input.class = "form-control";
    input.cols = "100";
    input.rows = "5";
    input.id = "edit-input";
    post.parentNode.replaceChild(input, post);
    editButton.innerText = "Submit";
  } else {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const editInput = document.getElementById("edit-input").value.trim();
    const response = await fetch(`/api/blogposts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ main: editInput }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed update");
    }
  }
};

editButton.addEventListener("click", editPostHandler);
