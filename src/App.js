import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header } from './compoents';
import { Footer } from './compoents'
 
function App() {
  return (
    <div className="App">
      <Header/>
     <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
