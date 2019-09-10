import React, { useEffect } from "react";
import '../styles/SwipeStyles.css'
import { Icon, Label } from "semantic-ui-react"
import { getFavorites, shuffle, finishOrder } from '../actions/meal.actions'
import { stackedCards } from './SwipeCards'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NoResults from './NoResults'
import LastCard from "./LastCard";
import MSidebar from './Sidebar' 


export default props => {
  const foodItems = useSelector(appState => appState.mealReducer.favorites)
  const favs = shuffle(foodItems)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  console.log(order)
  
   function mapRating(number) {
      let arr = []
      for(let i = 0; i<number; i++) {
        arr.push(<Icon name="star" />)
      }
      return arr
    }
    
    
    useEffect(() => {
      finishOrder()
      getFavorites()
      
    }, [])

  
  useEffect(() => {
    if (!order) {
      stackedCards(foodItems)
    }
  })

      return (
          order ? <Redirect to="/options" /> : (
            <div className="foodmainpage">
            <MSidebar>
              <div id="cardsContainer">
                <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                <div className="stackedcards-container">
                  {favs.length === 0 ? <NoResults /> : ( 
                    favs.map(item => (        
                      <div key={item.meal_name} className="card-item">
                        <div style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover', width: '100%', height: '325px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                        </div>
                        <div className="card-content">
                          <div className="card-header">
                            <div className="card-header-info">
                              <div>
                                <h3>{item.meal_name}</h3>
                              </div>
                              <div>
                                <h3>${item.price.toFixed(2)}</h3> 
                              </div>
                            </div>
                            <div>
                              <p>{item.restaurant} <span className="rating"> {item.rating ? mapRating(item.rating) : '' }</span></p>
                            </div>
                          </div>
                          <div className="card-body">
                            <div>
                              <p className="card-desc">{item.description ? item.description.charAt(0).toUpperCase() + item.description.substr(1) : ''}</p>
                              <p>Tags: {item.allergy ? <Label>{item.allergy}</Label> : item.meal_type ? <Label>{item.meal_type}</Label> : 'None'} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  </div>
                  <div id="lastCard" >
                    <LastCard />
                  </div>
                  <div className="stackedcards--animatable stackedcards-overlay top">Favorite</div>
                  <div className="stackedcards--animatable stackedcards-overlay right">Yum</div>
                  <div className="stackedcards--animatable stackedcards-overlay left">Yuck</div>
                </div> 
                <div className="global-actions">
                  <div className="left-action">Yuck</div>
                  <div className="top-action hide"><Icon  name="heart" size="large"/></div>
                  <div className="right-action">Yum</div>
                </div> 
              </div>
            </MSidebar>
        </div>
    ))
  }
