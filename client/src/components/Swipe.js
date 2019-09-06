import React, { useState, useEffect} from "react";
import '../styles/SwipeStyles.css'
import { Icon } from "semantic-ui-react"
import { getMenuItems } from '../actions/meal.actions'
import { stackedCards } from './SwipeCards'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NoResults from './NoResults'
import EndOfDeck from "./EndOfDeck";
import MSidebar from './Sidebar' 

const endCard = {
  name: 'Last Card'
}

export default props => {
  const foodItems = useSelector(appState => appState.mealReducer.allItems)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
  const [redir, setRedir] = useState(false)
  const [noFound, setNoFound] = useState(false)
  
  
   function mapRating(number) {
      let arr = []
      for(let i = 0; i<number; i++) {
        arr.push(<Icon name="star" />)
      }
      return arr
    }
    function mapAllergy(allergies) {
      let icons = []
        if (allergies.includes('Vegetarian')) {
          icons.push(<Icon name="leaf"/>)
        } 
        // else if (allergies.includes('Gluten-free')) {
        //   icons.push(<Icon name="bread-slice" />)
        // }
        //console.log(allergies)
      return icons
    }
    
    console.log(foodItems)
    
    useEffect(() => {
      const diets = selectedDiets.length === 0 ? 'none' : selectedDiets
      const meals = selectedMeals.length === 0 ? 'none' : selectedMeals
      getMenuItems(diets, meals)
    }, [selectedDiets, selectedMeals ]) 

  console.log(foodItems.length)


  // useEffect(() => {
  //   if (foodItems.length === 0 ) {
  //     setNoFound(!noFound)
  //   } 
  //   else if (order) {
  //     setRedir(!redir)
  //   } 
  //   else { 
  //     stackedCards(foodItems)
  //   }
  // }, [])

  
  useEffect(() => {
    order ? setRedir(!redir) : stackedCards(foodItems)
  })

      return (
        
          order ? <Redirect to="/options" /> : (
            <MSidebar>
              <div id="cardsContainer">
                <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                  {/* <div id="endofdeck">
                    <EndOfDeck />
                  </div> */}
                  <div className="stackedcards-container">
                    {foodItems.length === 0 ? <NoResults /> : ( 
                      foodItems.map(item => (         
                        <div key={item.name} className="card-item">
                          <div style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover', width: '100%', height: '350px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                          </div>
                          <div className="card-header">
                            <div className="card-header-info">
                              <h3>{item.name}</h3>
                              <p>{item.restaurant} {item.rating ? mapRating(item.rating) : '' }</p>
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
                    {/* <div className="top-action">Favorite</div> */}
                  <div className="right-action">Yum</div>
                </div> 
               
              </div>
              </MSidebar>
          ))
      // )
      
  }
