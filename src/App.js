import './App.css';
import Main from './component/Main';
import TermsAndConditions from './component/TermsAndConditions';
import myData from './Data/myData';

const MainBlock = myData.map(({name, city, position, id})=> {
  return <Main key={id} name={name} city={city} position={position} />;
})

// Functional component

function App() {
  return (
    <>
    <div className="App">
    This is all about learning react.
    </div>
    <p>
      Hello World
    </p>
    <Main />
    <Main>
      <p> This is prop </p>
    </Main>
    <Main name = "amila" city = "galle" position = "app developer" />
    <Main name = "Chanuka" city = "galle" />
    <TermsAndConditions />
    </>
  );
}

export default App;
