import './App.css';
import Addnewtranstion from './Components/Addnewtranstion';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpensive from './Components/IncomeExpensive';
import Transtion from './Components/TranstionList';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
    <div className="container">
      <Balance />
      <IncomeExpensive />
      <Transtion />
      <Addnewtranstion />
    </div>
    </GlobalProvider>
  );
}

export default App;
