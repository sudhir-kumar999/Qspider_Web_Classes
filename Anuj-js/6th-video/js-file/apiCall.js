fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let para = document.getElementById("para");
    let ul = document.getElementById("ul");

    ul.append(li);
    
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
      li.textContent = data[i].title;
      ul.appendChild(li);
    }
  })
  .catch((error) => {
    console.log(error);
  });
