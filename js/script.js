const poro = document.getElementById("list");

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const databek = await data.json();

  const dew = databek.map(({ userId, body, ...udalit }) => {
    
    return udalit;

  });

  const dask = dew.map((el) => {
    return {
      ...el,
      element: "div",
      className: "post",
    };
  });
const def = dask.map((el) => {
 return `<${el.element} class ="${el.className}"> ${el.title} </${el.element}>`

})
poro.innerHTML = def.join("")

  console.log(def);
};

getData();
