import store from './store/index';
import { Provider } from 'react-redux';
import InsertPage from './pages/InsertPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage'
import NavbarComponents from './components/NavbarComponents';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarComponents />

        <Switch>
          <Route exact path="/Homepage">
            <Homepage />
          </Route>
          <Route path="/InsertPage">
            <InsertPage />
          </Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;