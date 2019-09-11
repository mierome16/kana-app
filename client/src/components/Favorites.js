import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { Card as FoodItem, Button, Header, Label } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import MSidebar from './Sidebar';
import { getFavorites, orderItem, finishOrder } from '../actions/meal.actions'

export default props => {
  const favs = useSelector(appState => appState.mealReducer.favorites)

  useEffect(() => {
    finishOrder()
    getFavorites()
  }, [])

  function mapLabels(item) {
    let labels = []
    item.length === 1 ? labels.push(<Label>{item}</Label>) : labels = item.split(" ").map(i => <Label>{i}</Label>)
    return labels
  }

  function handleClick(item) {
    finishOrder()
    orderItem(item)
  }

  return (
    <MSidebar>
    <div style={{padding:25}}>
      <Header as="h1">Favorites</Header>
      <p style={{fontSize: 14}}>Click an item to place a new order, or swipe through list of favorites</p>
      <div style={{paddingBottom:25}}>
        <Link to="/dashboard"><Button>Back to Home</Button></Link>
        <Link to="/swipefav"><Button disabled={favs.length === 0 ? true : false } style={{background: '#8f0a03', color: '#fff'}}>Swipe Favorites</Button></Link>
      </div>
      {favs.length > 0 ? (favs.map((item, i) => (
        <div onClick={e => handleClick(item)} key={item + i}>
          <Link to={"/options"}>
          <FoodItem style={{marginBottom:20, width:'100vh', flexDirection:'row', alignItems: 'center', alignContent:'center'}}>
                <div
                    style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover',
                    width:100, height:100, marginLeft: 10
                    }} >
                </div>
                <FoodItem.Content>
                <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
                  {item.meal_name}
                  <FoodItem.Meta>${item.price.toFixed(2)}</FoodItem.Meta>
                <FoodItem.Meta>
                    {item.restaurant}
                </FoodItem.Meta>  
                  <FoodItem.Meta>{item.diet ? mapLabels(item.diet) : ''}</FoodItem.Meta>
                </FoodItem.Header>
                
                </FoodItem.Content>
            </FoodItem>
            </Link>
        </div>
      ))) : <Header as="h3">No favorites saved yet, start a new order and click the heart to save!</Header>} 

    </div>
    </MSidebar>
  )
}