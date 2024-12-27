fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "My New Post",
        body: "This is a post content.",
        userId: 1,
    }),
})
    .then((response) => response.json())
    .then((data) => console.log("Data saved:", data))
    .catch((error) => console.error("Error:", error));
