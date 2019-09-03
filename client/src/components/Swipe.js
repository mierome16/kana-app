import React, { useState, useEffect} from "react";
import '../styles/SwipeStyles.css'
import { stackedCards } from './SwipeCards'
import { Card, Icon } from 'semantic-ui-react'
import { getMenuItems } from '../actions/diet.actions'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

  export default props => {
    const foodItems = useSelector(appState => appState.dietReducer.allItems)
    const order = useSelector(appState => appState.dietReducer.orderedItem)
    const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
    const [redir, setRedir] = useState(false)
    //console.log(foodItems)
    console.log(order)
    let counter = 0;
    
    useEffect(() => {
      // selectedDiets.length === 0 ? getMenuItems('none') ? getMenuItems(selectedDiets) ? foodItems.length > 0 ? stackedCards()
      selectedDiets.length === 0 ? getMenuItems('none') : getMenuItems(selectedDiets)
      }, [])

    useEffect(() => {
      order ? setRedir(!redir) : stackedCards(foodItems)
    })

      return (
        order ? <Redirect to="/options" /> : (
        <div id="cardsContainer">
          <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
            <div className="stackedcards-container">
          {foodItems.map(item => (         
              <div key={item.name} className="card-item">
                <div style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover', width: '100%', height: '350px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                </div>
                <div className="card-header">
                  <div className="card-header-info">
                    <h3>{item.name}</h3>
                    <p>{item.restaurant}</p>
                  </div>
                  <div>
                    <h3>${item.price.toFixed(2)}</h3> 
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <p>{item.description}</p>
                    <p>Tags: {item.allergy ? item.allergy : 'None'}</p>
                  </div>
                  <div>
                    <p>{item.rating}</p>
                  </div>
                </div>
              </div> 
          ))}
           </div>
          <div className="stackedcards--animatable stackedcards-overlay top">Favorite</div>
          <div className="stackedcards--animatable stackedcards-overlay right">Yum</div>
          <div className="stackedcards--animatable stackedcards-overlay left">Yuck</div>
        </div>
        <div className="global-actions">
          <div className="left-action">Yuck</div>
          {/* <div className="top-action">Favorite</div> */}
          <div className="right-action">Yum</div>
        </div>  
  </div>
        )
      )}