import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <div className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" onClick = {updateCount} src="https://imgs.search.brave.com/rwNlNTr6Im29jjHpCw4KlE2xHmSV8-JnnvtdRek3zuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MDA2MDM4Ny9waG90/by92ZWdldGFyaWFu/LWFsb28tc2Ftb3Nh/LW9yLXNhbW9zYXMt/aW5kaWFuLXNwZWNp/YWwtdHJhZGl0aW9u/YWwtc3RyZWV0LWZv/b2QtZmFtb3VzLWlu/ZGlhbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9clc4eXdD/UXBwWC1pLTBKZ1BF/SFhGdnBrMHdITGlw/T0JpWVpqVjlnV2hy/ND0" alt="Samosa" />

      </div>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <div className="upgrade" style={{ padding: '2rem 1.5rem', width: '20rem', maxWidth: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ margin: '0 0 1rem' }}>Double Samosas</h3>
          <p style={{ margin: '0 0 1.5rem', lineHeight: 1.5 }}>2x per click.</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade" style={{ padding: '2rem 1.5rem', width: '20rem', maxWidth: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ margin: '0 0 1rem' }}>Triple Samosas</h3>
          <p style={{ margin: '0 0 1.5rem', lineHeight: 1.5 }}>3x per click.</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade" style={{ padding: '2rem 1.5rem', width: '20rem', maxWidth: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ margin: '0 0 1rem' }}>A Whole Lotta Samosas</h3>
          <p style={{ margin: '0 0 1.5rem', lineHeight: 1.5 }}>10x per click.</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App