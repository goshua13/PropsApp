import React, { Component } from 'react'

import Header from './Header';
import Posts from './Posts';
import Cards from './Cards';


class App extends Component {
  render() {
    return (
      <div className='container row'>
        <Header header ='Suh'/>
        <Cards>
          <Posts 
          author='Bob' 
          description='Hey im bobby and i like to code yoooooo! wassup im sick as balls'
          />
        </Cards>
        <Cards>
          <Posts 
          author='JEssia'
          description='hey im hess and i li yeah thou'
          />
        </Cards>
      </div>
    )
  }
}

export default App;
