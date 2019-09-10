import React, { useState, useEffect} from "react";
import '../styles/SwipeStyles.css'
import { Icon, Label, Header } from "semantic-ui-react"
import { getFavorites, shuffle } from '../actions/meal.actions'
import { stackedCards } from './SwipeCards'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NoResults from './NoResults'
import EndOfDeck from "./EndOfDeck";
import MSidebar from './Sidebar' 


export default props => {
  const foodItems = useSelector(appState => appState.mealReducer.favorites)
  const favs = shuffle(foodItems)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const [redir, setRedir] = useState(false)
  
  
   function mapRating(number) {
      let arr = []
      for(let i = 0; i<number; i++) {
        arr.push(<Icon name="star" />)
      }
      return arr
    }
    
    console.log(foodItems)
    
    useEffect(() => {
      getFavorites()
      
    }, [])
  console.log(foodItems.length)

  
  useEffect(() => {
    order ? setRedir(!redir) : stackedCards(foodItems)
  })

  function mapRating(number) {
    let arr = []
    for(let i = 0; i<number; i++) {
      arr.push(<Icon name="star" />)
    }
    return arr
  }

      return (
        
          order ? <Redirect to="/options" /> : (
            <div className="foodmainpage">
            <MSidebar>
              <div id="cardsContainer">
                <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                  {/* <div id="endofdeck">
                    <EndOfDeck />
                  </div> */}
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
                    <EndOfDeck />
                  </div>
                  <div className="stackedcards--animatable stackedcards-overlay top">Favorite</div>
                  <div className="stackedcards--animatable stackedcards-overlay right">Yum</div>
                  <div className="stackedcards--animatable stackedcards-overlay left">Yuck</div>
                </div> 

                <div className="global-actions">
                  <div className="left-action">Yuck</div>
                  <div className="top-action hide"><Icon  name="heart" size="large"/></div>
                  {/* <Icon id="top-replace" name="heart" size="large"/> */}
                  <div className="right-action">Yum</div>
                </div> 
               
              </div>
              
              </MSidebar>
              </div>
          ))
      // )
      
  }
