export const createList = () => `
<h2>Guitar List</h2>
<ul>
  ${guitars.map(createListItem).join("\n")}
</ul>
`;

const createListItem = ({ id, name, model }) =>
  `<li><a href='?id=${id}'>${name} ${model}</a></li>`;

export const getGuitarContent = (id) => {
  const guitar = guitars.find((g) => g.id == id);
  if (guitar) {
    return `
    <h2>${guitar.name} ${guitar.model}</h2>
    <p style={{fonts:300}}><a href="delete/${guitar.id}">Delete</a></p>
    `;
  } else {
    return `<h2>Guitar not found</h2>`;
  }
};
