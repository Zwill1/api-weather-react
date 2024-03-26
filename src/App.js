import './WeatherStyles.css';

function App() {
  return (
    <div id='card'>
      <div className='weatherTopSection'>
        <p className='weatherDay'>Mon</p>
        <p className='weatherDate'>25 Mar</p>
      </div>
      <div className='weatherBottomSection'>
        <div>
          Weather Icon
        </div>
        <div>
          <p>Weather Temp</p>
          <p>Weather Humid</p>
          <p>Weather desc</p>
        </div>
      </div>
    </div>
  );
}

export default App;
