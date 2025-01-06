import { createServer } from "http";
import guitars from "./data.js";
import { URL } from "url";

const server = createServer((request, response) => {
  const parts = request.url.split("/");
  if (parts.includes("delete")) {
    handleDelte(parts[2]);
    redirect(response, "/");
  } else {
    const url = new URL(request.url, "http://localhost:8210");
    const id = url.searchParams.get("id");

    let content = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guitar Info</title>
  </head>
  <body style="font-size:2rem">
   
  ${id ? getGuitarContent(id) : createList()}
   
  </body>
  </html>`;

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(content);
  }
});

const createList = () => `
<h2>Guitar List</h2>
<ul>
  ${guitars.map(createListItem).join("\n")}
</ul>
`;

const createListItem = ({ id, name, model }) =>
  `<li><a href='?id=${id}'>${name} ${model}</a></li>`;

const getGuitarContent = (id) => {
  const guitar = guitars.find((g) => g.id == id);
  if (guitar) {
    return `
    <h2>${guitar.name} ${guitar.model}</h2>
    <p style={{fonts:300}}><a href="delete/${id}">Delete</a></p>
    `;
  } else {
    return `<h2>Guitar not found</h2>`;
  }
};

function handleDelte() {
  let index = guitars.findIndex((g) => g.id == id);
  guitars.splice(index, 1);
}

function redirect(response, to) {
  response.writeHead(302, { location: t0, "Content-Type": "text/plain" });
  response.end(`Redirect to ${to}`);
}

server.listen(8210, () => {
  console.log(
    `Server is listening at http://localhost:${server.address().port}`
  );
});
