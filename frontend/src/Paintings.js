import React from 'react'
import baby from './images/baby.jpg'
import greatPain from './images/greatPain.jpg'
import floatingCross from './images/floatingCross.jpg'
import whenYouDie from './images/whenYouDie.jpg'
import woe from './images/woe.jpg'

function Paintings() {
const giveHerPadding = {
  padding: '25px 15px 0px 0px'
}

  return (
    <div className="container mb-4" style={giveHerPadding}>
      <div className="row">
          <img src={greatPain} className="container-fluid" style={giveHerPadding}/>
          <p>suffering</p>
          <img src={floatingCross} className="container-fluid" style={giveHerPadding}/>
          <p>cross</p>
          <img src={whenYouDie} className="container-fluid" style={giveHerPadding}/>
          <p>when you die</p>
          <img src={woe} className="container-fluid" style={giveHerPadding}/>
          <p>woe</p>
          <img src={baby} className="container-fluid" alt="baby" style={giveHerPadding}/>
          <p>baby</p>
          </div>
      </div>
  );
}

export default Paintings;
