import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import StarPage from './components/StartPage';
import ContantPage from './components/ContantPage';

function App() {
  return (
   <div className="app">
      <BrowserRouter >
         <Route path="/" exact>
          <StarPage />
        </Route>
         <Route path="/content/:id" exact>
          <ContantPage />
        </Route>
    </BrowserRouter>
   </div>
  );
}

export default App;
