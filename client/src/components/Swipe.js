import React, {Component} from "react";
import Swipeable from "react-swipy"
import { Card, Button, Icon, Image } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import axios from 'axios'
  
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
  top: 0
};


const CardProp = ({ zIndex = 0, children }) => (
  <Card style={{ ...cardStyles, zIndex }} id="fooditem">
      <Image src='https://placehold.it/400x500' wrapped ui={false} />
      <Card.Content style={{width: '100%'}}>
      <Card.Header id="foodnameheader">(food item name)
          <Card.Meta><span>(food price)</span></Card.Meta>
      </Card.Header>
      <Card.Meta>
          <span className='date'>(restaurant name)</span>
      </Card.Meta>
      <Card.Description>
          food allergy description {children}
      </Card.Description>
      </Card.Content>
      <Card.Content extra style={{ width: '100%' }}>
      <a>
          <Icon name='star' />
          rating??
      </a>
      </Card.Content>
  </Card>
);

 
class Swipe extends Component {
  // items = useSelector(appState => appState.rootReducer.dietReducter.allItems)

  state = {
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };
 
  componentDidMount() {
    axios.get('/api/menu-items').then(resp => {
      const data = resp.data.map(item => {
        let items = {name: item.meal_name,
        restaurant: item.res_name,
        price: item.price,
        allergy: item.diet,
        rating: item.ratings,
        image: item.url}
        return items
      })
    console.log(data)
  })}

  remove = () =>
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
 
  render() {
    const {cards} = this.state;
 
    return (
      <div>
        <div style={wrapperStyles}>
          {cards.length > 0 ? (
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
                onAfterSwipe={this.remove}
              >
                <CardProp>{cards[0]}</CardProp>
              </Swipeable>
              {cards.length > 1 && <CardProp zIndex={-1}>{cards[1]}</CardProp>}
            </div>
          ) : (
            <CardProp zIndex={-2}>No more cards</CardProp>
          )}
        </div>
      </div>
    );
  }
}
 
export default Swipe;