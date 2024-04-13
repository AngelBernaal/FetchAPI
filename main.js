const content = document.getElementById("content")
const url = "https://jsonplaceholder.typicode.com/users"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const lista = document.createElement("li");
            lista.innerHTML = "<strong>ID:</strong> " + user.id + "<br>" + "<span>Name:</span> " + user.name;
            content.append(lista);
        });
    })