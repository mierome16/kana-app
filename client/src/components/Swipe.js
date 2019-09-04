import React, { useState, useEffect} from "react";
<<<<<<< HEAD
import { Card as FoodItem, Icon } from "semantic-ui-react"
import { getMenuItems, orderItem } from '../actions/meal.actions'
=======
import '../styles/SwipeStyles.css'
import { stackedCards } from './SwipeCards'
import { Icon } from 'semantic-ui-react'
import { getMenuItems } from '../actions/diet.actions'
>>>>>>> master
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

  export default props => {
<<<<<<< HEAD
    const items = useSelector(appState => appState.mealReducer.allItems)
    const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
    const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
    const [rightSwipe, setRightSwipe] = useState(false)
    const [swipe, setSwipe] = useState(false)
    let counter = 0
    
    console.log(selectedDiets)
    console.log(swipe)
    
    useEffect(() => {
      // if(selectedDiets.length === 0){
      //   getMenuItems('none')
      // } else {
      // getMenuItems(selectedDiets)
      // }
      // }, [])
      const diets = selectedDiets.length === 0 ? 'none' : selectedDiets
      const meals = selectedMeals.length === 0 ? 'none' : selectedMeals
      // selectedDiets.length === 0 ? getMenuItems('none') : getMenuItems(selectedDiets) 
      getMenuItems(diets, meals)
    }, [selectedDiets, selectedMeals ]) 


    function onSwipeLeft() {
        counter++
    }
    
    function onSwipeRight() {
      setRightSwipe(!rightSwipe)
      counter++
      orderItem(items[counter-1])
    }
=======
    const foodItems = useSelector(appState => appState.dietReducer.allItems)
    const order = useSelector(appState => appState.dietReducer.orderedItem)
    const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
    const [redir, setRedir] = useState(false)

    function mapOut(number) {
      let arr = []
      for(let i = 0; i<number; i++) {
        arr.push(<Icon name="star" />)
      }
      return arr
    }

    // function mapAllergy(allergies) {
    //   let arr = allergies.split(' ')
    //   let icons = []
    //     for(let i = 0; i < arr.length; i++) {
    //     if (allergies[i].includes('Vegetarian')) {icons.push(<Icon name="leaf" />)}
    //     else if (allergies[i].includes('Gluten')) {icons.push(<Icon name="bread-slice" />)}
    //     else if (allergies[i].includes('Spicy'))  {icons.push(<Icon name="burn" />)} else {return icons}
    //     }
    //     console.log(icons)
    //   return icons
    // }
    
    console.log(order)
    let counter = 0;
    
    useEffect(() => {
      // selectedDiets.length === 0 ? getMenuItems('none') ? getMenuItems(selectedDiets) ? foodItems.length > 0 ? stackedCards()
      selectedDiets.length === 0 ? getMenuItems('none') : getMenuItems(selectedDiets)
      }, [])

    useEffect(() => {
      order ? setRedir(!redir) : stackedCards(foodItems)
    })
>>>>>>> master

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
                    <p>Rating: {item.rating ? mapOut(item.rating) : '' }</p>
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