import { createServer } from "http";
import guitars from "./data.js";
import { URL } from "url";
import { createList, getGuitarContent } from "./content.js";

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
