import { createServer } from "http";
import guitars from "./data.js";
import { URL } from "url";
import { createList, getGuitarContent, View } from "./content.js";

const server = createServer((request, response) => {
  const parts = request.url.split("/");
  if (parts.includes("delete")) {
    handleDelte(parts[2]);
    redirect(response, "/");
  } else {
    const url = new URL(request.url, "http://localhost:8210");
    const id = url.searchParams.get("id");
    if(parts.includes('add')){
      content=getForm()
    }
    else if(id){
      let guitar = guitars.find((g) => g.id == id);
      content=getGuitarContent(guitar);

    }

    else{
      content=createList(guitars);


    }

    let content = ``;

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(View(content));
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
