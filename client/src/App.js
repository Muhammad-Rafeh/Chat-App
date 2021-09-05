// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp'
//import RoomList from './components/RoomList';
import Nav from './components/Nav'
import BodyParent from './components/BodyParent';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'>
                <Login /> 
            </Route>
            <Route exact path='/signup'>
                <SignUp /> 
            </Route>
            <Route exact path='/app'>
                <BodyParent /> 
            </Route>
          </Switch>
        </div>
      </Router>
       
    </Provider>
   
  );
}

export default App;
