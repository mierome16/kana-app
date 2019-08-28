import React, { useState, useEffect} from "react";
import Swipeable from "react-swipy"
import { Card, Button, Icon, Image } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { getMenuItems } from '../actions/diet.actions'
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
  const items = useSelector(appState => appState.dietReducer.allItems)
  const selectedDiet = useSelector(appState => appState.dietReducer.selectedDiets.join(" ").toLowerCase())
  console.log(selectedDiet)
  const [cards, setCards] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
  const allergy = items.filter(item => item.allergy !== null).filter(item =>  item.allergy.toLowerCase().includes(selectedDiet) )
  console.log(allergy)
  useEffect(() => {
    getMenuItems()
    // filterFood()
    }, [])

  // function filterFood() {
  //   // items.filter(item => {
  //   //   item.allergy.includes(selectedDiet.join(" ")) !== -1
  //   // })
  //   items.map(item => {
  //     item.allergy
  //   })
  // }

  function remove() {
    setCards(cards.slice(1, cards.length))
    items.splice(0, 1)
    console.log(items)
  }
 
    return (
      <div>
        <div style={wrapperStyles}>
          {selectedDiet.length > 0 ? (
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
                  style={{background: `url(${items[0].image}) no-repeat center`, backgroundSize: 'cover',
                  width:300, height:400
                
                  }} >
                </div>
                <Card.Content style={{width: '100%'}}>
                <Card.Header id="foodnameheader">{items[0].name}
                    <Card.Meta><span>${(items[0].price).toFixed(2)}</span></Card.Meta>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{items[0].restaurant}</span>
                </Card.Meta>
                <Card.Description>
                  {items[0].description} {items[0].allergy}
                </Card.Description>
                </Card.Content>
                <Card.Content extra style={{ width: '100%' }}>
                  <Icon name='star' />
                  {items[0].rating}
                </Card.Content>
              </Card>))}
              </Swipeable>
              {cards.length > 1 && 
                <Card style={{ ...cardStyles, zIndex: '-1' }} id="fooditem">
                <div id="cardImage"
                  style={{background: `url(${items[1].image})`,
                  width:300, height:400
                  
                  }} >
                </div>
                <Card.Content style={{width: '100%'}}>
                <Card.Header id="foodnameheader">{items[1].name}
                    <Card.Meta><span>${(items[1].price).toFixed(2)}</span></Card.Meta>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{items[1].restaurant}</span>
                </Card.Meta>
                <Card.Description>
                  {items[1].description} {items[1].allergy}
                </Card.Description>
                </Card.Content>
                <Card.Content extra style={{ width: '100%' }}>
                  <Icon name='star' />
                  {items[1].rating}
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

        </div>
      </div>
    );
  }
