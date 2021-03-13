import Home from './components/Home'
import Info from './components/Info'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import New from './components/New'
import Price from './components/Price'



function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
        <Switch>
          <Route path="/new">
            <New />
          </Route>
        </Switch>
        <Switch>
          <Route path="/price">
            <Price />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
