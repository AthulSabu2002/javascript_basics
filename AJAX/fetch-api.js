fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON from response
    })
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("There was a problem:", error);
    });
