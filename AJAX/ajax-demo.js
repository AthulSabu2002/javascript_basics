// Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define what happens when the response is ready
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("Response:", xhr.responseText); // Log the server's response
    } else {
        console.error("Error fetching data.");
    }
};

// Open a connection (GET request to a server API)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

// Send the request
xhr.send();
