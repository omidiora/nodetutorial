export const createList = () => `
<h2>Guitar List</h2>
<ul>
  ${guitars.map(createListItem).join("\n")}
</ul>
`;

const createListItem = ({ id, name, model }) =>
  `<li><a href='?id=${id}'>${name} ${model}</a></li>`;

export const getGuitarContent = (id) => {

  if (guitar) {
    return `
    <h2>${guitar.name} ${guitar.model}</h2>
    <p style={{fonts:300}}><a href="delete/${guitar.id}">Delete</a></p>
    `;
  } else {
    return `<h2>Guitar not found</h2>`;
  }
};


export const View = (content) = ` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guitar Info</title>
  </head>
  <body style="font-size:2rem">
   
  ${content}
   
  </body>
  </html>`