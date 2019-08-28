import React, { useState, useEffect} from "react";
import Swipeable from "react-swipy"
import { Card, Button, Icon, Image } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { getMenuItems, getFilteredItems } from '../actions/diet.actions'
import { useSelector } from 'react-redux'
  
const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "550px"};
const actionsStyles = {
  position: 'relative',
  bottom: 0,
  marginTop: 12,
  width: '100%'
};


const cardStyles = {
  borderRadius: 3,
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  height: '550px'
};  

  export default props => {
    // const items = useSelector(appState => appState.dietReducer.allItems)
    const [cards, setCards] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
    const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
    const filterFood = useSelector(appState => appState.dietReducer.filteredItems)
    // console.log(selectedDiet)
    // const allergy = items.filter(item => item.allergy !== null).filter(item => item.allergy.length > 0)

    // function contains(allergies, diets) {
    //   let filtered = []
    //   if (diets.length <= 1 ) {
    //     return allergies.filter(item => item.allergy.includes(selectedDiet))
    //   } else {
    //     allergies.forEach(item => diets.forEach(item2 => item.allergy.includes(item2) ? filtered.push(item) : filtered)) 
    //     return [...new Set(filtered)] 
    //   }
    // }
    // const filterFood = contains(allergy, selectedDiet)
    
    useEffect(() => {
      if(selectedDiets.length === 0){
        getMenuItems('none')
      }else{
      getMenuItems(selectedDiets)
      }
      // getFilteredItems(selectedDiets)
      }, [])
  
    function remove() {
      filterFood.splice(0, 1)
      console.log(filterFood[0])
    }
   
      return (
        <div>
          {/* <div style={wrapperStyles}>
            {filterFood.length > 0 ? (
              <div style={wrapperStyles}>
                <Swipeable
                  buttons={({left, right}) => (
                    <div style={actionsStyles}
                    >
                      <Button.Group fluid>
                        <Button onClick={left}>No</Button>
                        <Button.Or />
                        <Button onClick={right} positive><Link to="/options">Yes</Link></Button>    
                      </Button.Group>
                    </div>
                  )}
                  onAfterSwipe={remove}
                >
                <Card style={{ ...cardStyles, zIndex: '0' }} id="fooditem">
                  <div id="cardImage"
                    style={{background: `url(${filterFood[0].image}) no-repeat center`, backgroundSize: 'cover',
                    width:300, height:400
                    }} >
                  </div>
                  <Card.Content style={{width: '100%'}}>
                  <Card.Header id="foodnameheader">{filterFood[0].name}
                      <Card.Meta><span>${(filterFood[0].price).toFixed(2)}</span></Card.Meta>
                  </Card.Header>
                  <Card.Meta>
                      <span className='date'>{filterFood[0].restaurant}</span>
                  </Card.Meta>
                  <Card.Description>
                    {filterFood[0].description} {filterFood[0].allergy}
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={{ width: '100%' }}>
                    <Icon name='star' />
                    {filterFood[0].rating}
                  </Card.Content>
                </Card>))}
                </Swipeable>
                {filterFood.length > 1 && 
                  <Card style={{ ...cardStyles, zIndex: '-1' }} id="fooditem">
                  <div id="cardImage"
                    style={{background: `url(${filterFood[1].image})`,
                    width:300, height:400
                    
                    }} >
                  </div>
                  <Card.Content style={{width: '100%'}}>
                  <Card.Header id="foodnameheader">{filterFood[1].name}
                      <Card.Meta><span>${(filterFood[1].price).toFixed(2)}</span></Card.Meta>
                  </Card.Header>
                  <Card.Meta>
                      <span className='date'>{filterFood[1].restaurant}</span>
                  </Card.Meta>
                  <Card.Description>
                    {filterFood[1].description} {filterFood[1].allergy}
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={{ width: '100%' }}>
                    <Icon name='star' />
                    {filterFood[1].rating}
                  </Card.Content>
                </Card>}
              </div>
            ) : (
              <Card style={{ ...cardStyles, zIndex: '-2' }} id="fooditem">
                  <Image src='https://placehold.it/400x500' wrapped ui={false} />
                  <Card.Content style={{width: '100%'}}>
                  <Card.Header id="foodnameheader">(food item name)
                      <Card.Meta><span>(food price)</span></Card.Meta>
                  </Card.Header>
                  <Card.Meta>
                      <span className='date'>(restaurant name)</span>
                  </Card.Meta>
                  <Card.Description>
                      food allergy description {cards[0]}
                  </Card.Description>
                  </Card.Content>
                  <Card.Content extra style={{ width: '100%' }}>
                    <Icon name='star' />
                    rating??
                  </Card.Content>
                </Card>)}
          </div> */}
        </div>
      );
    }