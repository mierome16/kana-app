import React, { useState, useEffect} from "react";
import { Card as FoodItem, Icon } from "semantic-ui-react"
import { getMenuItems, orderItem } from '../actions/meal.actions'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card as FoodCard, CardWrapper as FoodCardWrapper } from 'react-swipeable-cards';

  
const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "600px"};
const actionsStyles = {position: 'relative', bottom: 0, width: '100%'};
const cardStyles = {borderRadius: 3, cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, height: '600px',}

  export default props => {
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

      return (
        rightSwipe ? <Redirect to="/options" /> : (
          <div>
         <FoodCardWrapper style={wrapperStyles}>
          { items.map((item) => (
            <FoodCard
            key={item.name}
            style={cardStyles}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            id="fooditem"
            >
            <FoodItem style={{marginTop:20, maginBottom:20}}>
              <div id="cardImage"
                  style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover',
                  width:300, height:300, 
                  }} >
              </div>
              <FoodItem.Content>
              <FoodItem.Header id="foodnameheader">{item.name}
                  <FoodItem.Meta><span>${(item.price).toFixed(2)}</span></FoodItem.Meta>
              </FoodItem.Header>
              <FoodItem.Meta>
                  <span className='date'>{item.restaurant}</span>
              </FoodItem.Meta>
              <FoodItem.Description>
                {item.description} {item.allergy}
              </FoodItem.Description>
              </FoodItem.Content>
              <FoodItem.Content extra >
                <Icon name='star' />
                {item.rating}
              </FoodItem.Content>
          </FoodItem>
          </FoodCard>
          )) }
        </FoodCardWrapper>
          <div styles={actionsStyles}>
            {/* <Button.Group fluid >
                  <Button onClick={ e => setSwipe(!swipe)}>No</Button>
                  <Button.Or />
                  <Button onClick={e => onSwipeRight()} positive><Link to="/options">Yes</Link></Button>    
              </Button.Group>  */}
          </div>
        </div>
        )
      )}