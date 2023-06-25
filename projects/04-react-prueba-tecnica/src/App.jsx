import './App.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imagineUrl } = useCatImage({ fact });

  const hadleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={hadleClick}>Get new fact</button>
      {/* <section> */}
      {fact && <p>{fact}</p>} {/*Esto es importante renderizado condicional */}
      {imagineUrl && (
        <img
          src={imagineUrl}
          alt={`Image extracted using the first rhee words for ${fact}`}
        />
      )}
      {/* </section> */}
    </main>
  );
}
