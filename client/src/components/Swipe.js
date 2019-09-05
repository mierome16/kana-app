import React, { useState, useEffect} from "react";
import '../styles/SwipeStyles.css'
import { Card as FoodItem, Icon, Header } from "semantic-ui-react"
import { getMenuItems, orderItem } from '../actions/meal.actions'
import { stackedCards } from './SwipeCards'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


import NoResults from './NoResults'


export default props => {
  const foodItems = useSelector(appState => appState.mealReducer.allItems)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
  const [redir, setRedir] = useState(false)
  const [noFound, setNoFound] = useState(false)


  function mapOut(number) {
    let arr = []
    for(let i = 0; i<number; i++) {
      arr.push(<Icon key={'number' + i} name="star" />)
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
  
let counter = 0;
  
  useEffect(() => {
    const diets = selectedDiets.length === 0 ? 'none' : selectedDiets
    const meals = selectedMeals.length === 0 ? 'none' : selectedMeals
    
    getMenuItems(diets, meals)
    
    console.log(diets, meals, foodItems.length)
    
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
        // noFound ? <NoResults /> : ( 
          order ? <Redirect to="/options" /> : (
            <div className="foodmainpage">
              <Header className="foodmainheader"as='h2' id="cardheader">
                <button className="ui basic button">
                  <i className="icon user"></i>
                </button>
                {/* <Icon name='leaf' /> */}
                <Header.Content className="kananame">
                  Kana
                  {/* <Header.Subheader>Swipe for food</Header.Subheader> */}
                </Header.Content>
                <button className="ui basic button">
                  <Icon name="heart"/>
                </button>
              </Header>
              {/* <Divider /> */}
              <div id="cardsContainer">
              
                  {/* {noFound ? <NoResults /> : ( */}
                    
                <div id="stacked-cards-block" className="stackedcards stackedcards--animatable init">
                  <div className="stackedcards-container">
              
                    {foodItems.map(item => (         
                      <div key={item.name} className="card-item">
                        <div style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover', width: '100%', height: '350px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                        </div>
                        <div className="card-header">
                          <div className="card-header-info">
                            <h3>{item.name}</h3>
                            <p>{item.restaurant} {item.rating ? mapOut(item.rating) : '' }</p>
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
                            {/* <p>Rating: {item.rating ? mapOut(item.rating) : '' }</p> */}
                          </div>
                        </div>
                      </div> 
                      ))}
                  </div>
                  <div className="stackedcards--animatable stackedcards-overlay top">Favorite</div>
                  <div className="stackedcards--animatable stackedcards-overlay right">Yum</div>
                  <div className="stackedcards--animatable stackedcards-overlay left">Yuck</div>
                </div> 

                  {/* )} */}

                <div className="global-actions">
                  <div className="left-action">Yuck</div>
                    {/* <div className="top-action">Favorite</div> */}
                  <div className="right-action">Yum</div>
                </div>  
              </div>
            </div>
          ))
      // )
    
  }
