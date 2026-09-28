function RecipeChoices({ ingredient, choices, value, onChange }) {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <label key={choice}>
          <input
            type="radio"
            name={ingredient}
            value={choice}
            checked={value === choice}
            onChange={onChange}
          />
          {choice}
        </label>
      ))}
    </div>
  )
}

export default RecipeChoices