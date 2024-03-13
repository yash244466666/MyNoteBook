import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
// Above we import necesssary components and third-party packages 
// in order to use the relevant feature (e.g. react-router-dom)
function App() {
  // we display a list of links that allow the user to redirect to different pages
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Switch> 
              <Route exact path="/"> {/* The home page */}
                <Home />
              </Route>
              <Route exact path="/about">{/* The about page */}
                <About />
              </Route>
              <Route exact path="/login"> {/* The login page */}
                <Login />
              </Route>
              <Route exact path="/signup">{/* The sign up page */}
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
