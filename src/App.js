import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
// import Opportunities from './pages/Opportunities'
// import Solutions from './pages/Solutions'
// import Contact from './pages/Contact'

import './App.scss'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />

                {/* <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/opportunities">
                  <Opportunities />
                </Route>
                <Route exact path="/solutions">
                  <Solutions />
                </Route>
                <Route exact path="/contact-us">
                  <Contact />
                </Route> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Opportunities(){
  return <p>Discover our numerous opportunities</p>
}

function Solutions(){
  return <p>Solutions that help you.</p>
}

const Contact = () => {
  return <p>Feel free to reach us.</p>
}


export default App
