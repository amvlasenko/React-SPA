import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contacts'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
