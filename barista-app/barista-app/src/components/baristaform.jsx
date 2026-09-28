function BaristaForm() {
  const onNewDrink = () => {}
  const onCheckAnswer = () => {}

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form />

      <button type="button" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button type="button" onClick={onNewDrink}>
        New Drink
      </button>
    </div>
  )
}

export default BaristaForm