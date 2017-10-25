import React from 'react'
import Header from './Component/Header'
import Body from './Component/Body'
import Card from './Component/Card'
import './static/boostrap/bootstrap.min.css'
import image from './static/img/apc.png'

const App = () => (
<div>
  <div className="App">
    <Header/>
    <img src={image} width="250px"/>
    <div className="row">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class ="col col-md-5">  
            <div className = "App-text">  
              <br/>           
          <Body>
            <h1>Personal Information</h1>
            <h6>Name : Ravitsara ketkaew</h6>
            <h6>Nickname : Nätjawa (Jarv.)</h6>
            <h6>Birthday : July 28, 1999.</h6>
            <h6>Motto : Arbeit macht das leben süß</h6>
          </Body> 
          <br/>
          <div>
            <Body>
              <h1>Social</h1>
              <h6>Twitter : @_jhlgk</h6>
              <h6>Facebook : Jarv Staners</h6>
              <h6>Line : gknutcs</h6>              
            </Body>
          </div>
          <br/>
          <div>
            <Body>
              <h1>Skill</h1>
              <h6>Basic Skill : guitar, editing video, photoshop</h6>
              <h6>Computer Skill : </h6>
              <h6>Languages : Thai, English, Deutsch(German), Korean</h6>
            </Body>
          </div>
          </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</div>

)
export default App 
