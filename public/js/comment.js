const commentButton = document.getElementById("comment-button");
const textBody = document.getElementById("comment-body");
const blogId = textBody.dataset.id;
const commentHandler = async (event) => {
  event.preventDefault();
  const commentInput = textBody.value.trim();
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ text: commentInput, blogpost_id: blogId }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

commentButton.addEventListener("click", commentHandler);
