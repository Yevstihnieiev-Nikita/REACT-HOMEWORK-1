import image from "../src/img/image.png";

function App() {
  const name = "Nikita";
  const favWebsite = {
    title: "Children of Khan",
    url: "childrenofkhan.com",
  };

  const number1 = 10;
  const number2 = 4;
  let count = number1 + number2;

  const colors = ["Red", "Green", "Blue"];

  const liElements = colors.map((color) => `<li>${color}</li>`);

  const ulList = `<ul>${liElements.join("")}</ul>`;

  // document.body.innerHTML = ulList;

  return (
    <div>
      <h1>My name is {name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={image} alt="Nature"></img>
      <a href={favWebsite.url}>Visit my favorite website!</a>
      <p>{count}</p>
      <ul>{ulList}</ul>
    </div>
  );
}

export default App;
