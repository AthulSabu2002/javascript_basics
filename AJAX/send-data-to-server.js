const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onload = function () {
    if (xhr.status === 201) { // 201 Created
        console.log("Data saved:", JSON.parse(xhr.responseText));
    }
};

const data = {
    title: "My New Post",
    body: "This is a post content.",
    userId: 1,
};

xhr.send(JSON.stringify(data));
