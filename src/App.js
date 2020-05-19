import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Listings from './components/Listings';
import { Link , Switch, Route, Router } from 'react-router-dom'
import Flexbox from './components/Flexbox'

function App() {
  return (

    <div className="App">
      <Header />
      <section id="content-area">
        <Filters />
        <Listings />
      </section>
      <Footer />
     
     <Switch> 
      <Route
              exact
              path='/flexbox'
              render={() => <Flexbox />}
            />
     </Switch>     
        
    
    </div>

  );
}

export default App;
