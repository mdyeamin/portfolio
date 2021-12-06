import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services'

function App() {
  return (
    <div className="App" >
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/project/:projectId">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
