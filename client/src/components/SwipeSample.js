import React, { useState, useEffect} from "react";
import '../sample/styles.css'
import { stackedCards } from '../sample/index'

import { Link } from 'react-router-dom'
import { getMenuItems, orderItem } from '../actions/diet.actions'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
  
// const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "500px"};
// const actionsStyles = {position: 'relative', bottom: 0, width: '100%'};
// const cardStyles = {borderRadius: 3, cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, height: '550px'}

  export default props => {
    const foodItems = useSelector(appState => appState.dietReducer.allItems.splice(0, 50))
    const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
    const [rightSwipe, setRightSwipe] = useState(false)
    // const [swipe, setSwipe] = useState(false)
    // let counter = 0
    //console.log(swipe)
    console.log(foodItems)
    const example = [
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      },
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      },
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      },
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      },
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      },
      {
        title: 'adventure',
        subtitle: 'and Outdoor',
        caption: '10 Destinations',
        footerTitle: 'Popular',
        footerSub: 'Destinations'
      }
    ]
    
    useEffect(() => {

      if(selectedDiets.length === 0){
        getMenuItems('none')
        

      } else {
      getMenuItems(selectedDiets)
      }
     stackedCards()
      }, [])


      return (
        // rightSwipe ? <Redirect to="/options" /> : (
        <div id="cardsContainer">
    <div className="stage">
    <div className="title">What Kind of Traveler Are You?</div>
      <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
        <div className="stackedcards-container">
          {example.map(item => (
            <div className="card">
              <div className="card-content">
                <div className="card-image"><img src="https://image.ibb.co/gQsq07/Adventure_and_Outdoor.png" width="100%" height="100%"/></div>
                <div className="card-titles">
                  <h1>{item.price}<br/> {item.subtitle}</h1>
                  <h3>{item.caption}</h3>
                </div>  
              </div>
              <div className="card-footer">
                <div className="popular-destinations-text">{item.footerTitle} <br/> {item.footerSub}</div>
                <div className="popular-destinations-images">
                  <div className="circle"><img src="https://image.ibb.co/jmEYL7/adventure_1.jpg" width="100%" height="100%"/></div>
                  <div className="circle"><img src="https://image.ibb.co/nsCynn/adventure_2.jpg" width="100%" height="100%"/></div>
                  <div className="circle"><img src="https://image.ibb.co/hmsL07/adventure_3.jpg" width="100%" height="100%"/></div>
                </div>
              </div>
            </div>  
          ))}
        
        </div>
        <div className="stackedcards--animatable stackedcards-overlay top"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png"  width="auto" height="auto"/></div>
        <div className="stackedcards--animatable stackedcards-overlay right"><img src="https://image.ibb.co/dCuESn/Path_3x.png" width="auto" height="auto"/></div>
        <div className="stackedcards--animatable stackedcards-overlay left"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width="auto" height="auto"/></div>
      </div>
      <div className="global-actions">
        <div className="left-action"><img src="https://image.ibb.co/heTxf7/20_status_close_3x.png" width="26" height="26"/></div>
        <div className="top-action"><img src="https://image.ibb.co/m1ykYS/rank_army_star_2_3x.png" width="18" height="16"/></div>
        <div className="right-action"><img src="https://image.ibb.co/dCuESn/Path_3x.png" width="30" height="28"/></div>
    </div>
  </div>

  </div>
        // )
      )}