import React from 'react' 
import { useSelector } from 'react-redux'
import { Card as FoodItem, Button, Header, Label } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { finishOrder, orderItem } from '../actions/meal.actions'
import MSidebar from './Sidebar';


export default props => {
  const singleItem = useSelector(appState => appState.mealReducer.pastOrders.find(item => item.confirm === props.match.params.singleOrder))

  function mapLabels(item) {
    let labels = []
    item.length === 1 ? labels.push(<Label>{item}</Label>) : labels = item.split(" ").map(i => <Label>{i}</Label>)
    return labels
  }
  
  function reorder(e) {
    if (orderItem) {
      finishOrder()
      orderItem(singleItem)
     } else  { orderItem(singleItem) }
  }
  return (
    <MSidebar>
    <div style={{padding:25, paddingTop:0}}>
      <Header as="h1">{singleItem.meal_name}</Header>
        <div>
          <FoodItem style={{marginBottom:20, width:'100vh'}}>
            <div
                style={{background: `url(${singleItem.image}) no-repeat center`, backgroundSize: 'cover',
                width:'100%', height:300, margin: 'auto'
                }} >
            </div>
            <FoodItem.Content>
            <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
              {singleItem.meal_name}
              <FoodItem.Meta>Confirmation: {singleItem.confirm}</FoodItem.Meta>
              <FoodItem.Meta>Placed at: {singleItem.time_placed}</FoodItem.Meta>
              <FoodItem.Meta>{singleItem.type === 'reservation' ? ('Reservation ' + singleItem.reserve_date) : ('Order Total: $' + (singleItem.price * singleItem.quantity).toFixed(2))}</FoodItem.Meta>
            </FoodItem.Header>
            <FoodItem.Meta>
                {singleItem.restaurant}
            </FoodItem.Meta>
            <FoodItem.Description id="card-desc">
              {singleItem.description ? singleItem.description.charAt(0).toUpperCase() + singleItem.description.substr(1) : ''}
            </FoodItem.Description>
            <FoodItem.Description>
             {mapLabels(singleItem.diet)}
            </FoodItem.Description>
            </FoodItem.Content>
            </FoodItem>
        </div>
      <div>
        <Link to="/dashboard"><Button>Back to Home</Button></Link>
        <Link to="/options"><Button style={{background: '#8f0a03', color: '#fff'}} onClick={reorder}>Order Again</Button></Link>
      </div>
    </div>
    </MSidebar>
  )
}