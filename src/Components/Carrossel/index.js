import React from 'react';
import './style.css'; 

const MarqueeEffect = () => {
  return (
    <div className="marquee-wrapper">
      <section className="marquee-item">Seção 1</section>
      <section className="marquee-item">Seção 2</section>
      <section className="marquee-item">Seção 3</section>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MarqueeEffect />
    </div>
  );
}

export default App;
