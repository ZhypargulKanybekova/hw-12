import './App.css';
import { Header } from './components/header/Header';
import { MealsSummary } from './components/meals-summary/MealsSummary';
import { Meals } from './components/meals/Meals';

function App() {
  return (
    <div className="App">
      <Header/>
      <MealsSummary/>
      <Meals/>

    </div>
  );
}

export default App;
