import React from 'react'

// class Swipe extends React.Component {
//   render()
//     return (

//     )
// }

export default props => {
  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div id="cardsContainer">
    <div class="stage">
    <div class="title">What Kind of Traveler Are You?</div>
      <div id="stacked-cards-block" class="stackedcards stackedcards--animatable init">
        <div class="stackedcards-container">
          {example.map(item => (
            <div class="card">
              <div class="card-content">
                <div class="card-image"><img src="https://image.ibb.co/gQsq07/Adventure_and_Outdoor.png" width="100%" height="100%"/></div>
                <div class="card-titles">
                  <h1>Adventure <br/> and Outdoor</h1>
                  <h3>Destination {item}</h3>
                </div>  
              </div>
              <div class="card-footer">
                <div class="popular-destinations-text">Popular <br/> Destinations</div>
                <div class="popular-destinations-images">
                  <div class="circle"><img src="https://image.ibb.co/jmEYL7/adventure_1.jpg" width="100%" height="100%"/></div>
                  <div class="circle"><img src="https://image.ibb.co/nsCynn/adventure_2.jpg" width="100%" height="100%"/></div>
                  <div class="circle"><img src="https://image.ibb.co/hmsL07/adventure_3.jpg" width="100%" height="100%"/></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="stackedcards--animatable stackedcards-overlay top"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png"  width="auto" height="auto"/></div>
        <div class="stackedcards--animatable stackedcards-overlay right"><img src="https://image.ibb.co/dCuESn/Path_3x.png" width="auto" height="auto"/></div>
        <div class="stackedcards--animatable stackedcards-overlay left"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width="auto" height="auto"/></div>
      </div>
      <div class="global-actions">
        <div class="left-action"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width="26" height="26"/></div>
        <div class="top-action"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png" width="18" height="16"/></div>
        <div class="right-action"><img src="https://image.ibb.co/dCuESn/Path_3x.png" width="30" height="28"/></div>
    </div>
  </div>
  
  <div class="final-state hidden"><h2>Got it! We received your preferences! <br/> To submit again, press F5.</h2></div>
    </div>
  )
}