import React, { useEffect} from "react";
import '../styles/SwipeStyles.css'
import { Icon, Label } from "semantic-ui-react"
import { getMenuItems, finishOrder } from '../actions/meal.actions'
import { stackedCards } from './SwipeCards'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NoResults from './NoResults'
import LastCard from "./LastCard.js";
import MSidebar from './Sidebar' 


export default props => {
  const foodItems = useSelector(appState => appState.mealReducer.allItems)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
  
   function mapRating(number) {
      let arr = []
      for(let i = 0; i<number; i++) {
        arr.push(<Icon name="star" key={i} />)
      }
      return arr
    }

    function mapLabels(item) {
      let labels = []
      item.indexOf(" ") === -1 ? labels.push(<Label>{item}</Label>) : labels = item.split(" ").map(i => <Label>{i}</Label>)
      return labels
    }
    
    useEffect(() => {
      finishOrder()
      const diets = selectedDiets.length === 0 ? 'none' : selectedDiets
      const meals = selectedMeals.length === 0 ? 'none' : selectedMeals
      getMenuItems(diets, meals)
    }, [selectedDiets, selectedMeals ]) 


  
  useEffect(() => {
    if (!order) {
      stackedCards(foodItems, 'default')
    }
  })

      return (
        
          order ? <Redirect to="/options" /> : (
            <MSidebar>
              <div id="cardsContainer">
                <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                  
                  <div className="stackedcards-container">
                    {foodItems.length === 0 ? <NoResults /> : ( 
                      foodItems.map(item => (  
                               
                        <div key={item.name} className="card-item">
                          <div style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover', width: '100%', height: '325px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                          </div>
                          <div className="card-content">
                            <div className="card-header">
                              <div className="card-header-info">
                                <div>
                                  <h3>{item.name}</h3>
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
                                <p>Tags: {item.allergy ? mapLabels(item.allergy) : ''} {item.meal_type ? mapLabels(item.meal_type) : ''} </p>
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
                  <div className="top-action"><Icon  name="favorite" size="large"/></div>
                  <div className="right-action">Yum</div>
                </div> 
               
              </div>
              </MSidebar>
          ))
      
  }
