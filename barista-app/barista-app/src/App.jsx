import { useState } from "react";
import "./App.css";
import drinksData from "./drinks.json";
import RecipeChoices from "./components/recipeChoices";

const drinks = drinksData.drinks;

const emptyInputs = {
  temperature: "",
  syrup: "",
  milk: "",
  blended: "",
};

export default function BaristaForm() {
  const [inputs, setInputs] = useState(emptyInputs);
  const [drink, setDrink] = useState(null);
  const [trueRecipe, setTrueRecipe] = useState(null);
  const [correctness, setCorrectness] = useState({
    temperature: "",
    syrup: "",
    milk: "",
    blended: "",
  });

  function getNextDrink() {
    const nextDrink = drinks[Math.floor(Math.random() * drinks.length)];
    setDrink(nextDrink.name);
    setTrueRecipe({
      temperature: nextDrink.ingredients.temp,
      syrup: nextDrink.ingredients.syrup,
      milk: nextDrink.ingredients.milk,
      blended: nextDrink.ingredients.blended,
    });
  }

  function onNewDrink() {
    setInputs(emptyInputs);
    setCorrectness({
      temperature: "",
      syrup: "",
      milk: "",
      blended: "",
    });
    getNextDrink();
  }

  function onChange(event) {
    const { name, value } = event.target;
    setInputs((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function onCheckAnswer(event) {
    event.preventDefault();

    if (!trueRecipe) return;

    setCorrectness({
      temperature:
        inputs.temperature === trueRecipe.temperature ? "correct" : "wrong",
      syrup: inputs.syrup === trueRecipe.syrup ? "correct" : "wrong",
      milk: inputs.milk === trueRecipe.milk ? "correct" : "wrong",
      blended: inputs.blended === trueRecipe.blended ? "correct" : "wrong",
    });
  }

  return (
    <main>
      <h1>Hi, I'd like to order a:</h1>

      <div className="drink-container">
        <h2>{drink || "Click New Drink to begin"}</h2>
        <button type="button" onClick={onNewDrink}>
          New Drink
        </button>
      </div>

      <form className="container" onSubmit={onCheckAnswer}>
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className={`answer-space ${correctness.temperature}`}>
            {inputs.temperature}
          </div>
          <RecipeChoices
            ingredient="temperature"
            choices={["hot", "cold"]}
            value={inputs.temperature}
            onChange={onChange}
          />
        </div>

        <div className="mini-container">
          <h3>Syrup</h3>
          <div className={`answer-space ${correctness.syrup}`}>
            {inputs.syrup}
          </div>
          <RecipeChoices
            ingredient="syrup"
            choices={["none", "vanilla", "caramel", "mocha", "toffee", "other"]}
            value={inputs.syrup}
            onChange={onChange}
          />
        </div>

        <div className="mini-container">
          <h3>Milk</h3>
          <div className={`answer-space ${correctness.milk}`}>
            {inputs.milk}
          </div>
          <RecipeChoices
            ingredient="milk"
            choices={["none", "cow", "oat", "almond"]}
            value={inputs.milk}
            onChange={onChange}
          />
        </div>

        <div className="mini-container">
          <h3>Blended</h3>
          <div className={`answer-space ${correctness.blended}`}>
            {inputs.blended}
          </div>
          <RecipeChoices
            ingredient="blended"
            choices={["yes", "no"]}
            value={inputs.blended}
            onChange={onChange}
          />
        </div>

        <button type="submit">Check Answer</button>
      </form>
    </main>
  );
}