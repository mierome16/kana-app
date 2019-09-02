// import React, { useState, useEffect} from "react";
// import Swipeable from "react-swipy"
// import { Card, Button, Icon, Image } from "semantic-ui-react"
// import { Link } from 'react-router-dom'
// import { getMenuItems } from '../actions/diet.actions'
// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
  
// const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "550px"};
// const actionsStyles = {
//   position: 'relative',
//   bottom: 0,
//   marginTop: 12,
//   width: '100%'
// };


// const cardStyles = {
//   borderRadius: 3,
//   cursor: "pointer",
//   userSelect: "none",
//   position: "absolute",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   top: 0,
//   height: '550px'
// };  

//   export default props => {
//     const items = useSelector(appState => appState.dietReducer.allItems)
//     const [item, setItem] = useState(items[0])
//     const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
//     const [rightSwipe, setRightSwipe] = useState(false)
//     console.log(items)
    
//     useEffect(() => {
//       if(selectedDiets.length === 0){
//         getMenuItems('none')
//       } else {
//       getMenuItems(selectedDiets)
//       }
//       }, [])

  
//     function remove() {
//       items.splice(0,1)
//       setItem(items[0])
//     }

//     function redirect() {
//       // setRightSwipe(!rightSwipe)
//       console.log('right swipe')
//     }



//     // onSwipe = direction => {
//     //   const {limit, onSwipe} = this.props;
  
//     //   if (onSwipe) {
//     //     onSwipe(direction);
//     //   }
  
//     //   this.setState({
//     //     swiped: true,
//     //     moving: false,
//     //     offset: getLimitOffset(limit, direction),
//     //   });
//     // };
  
//     // onAfterSwipe = () => {
//     //   const {onAfterSwipe} = this.props;
  
//     //   this.setState(INITIAL_STATE);
  
//     //   if (onAfterSwipe) {
//     //     onAfterSwipe();
//     //   }
//     // };
  
   
//       return (
//         <div>
//         {/* { rightSwipe ? <Redirect to="/options"  /> : ( */}
//           <div style={wrapperStyles}>
//             {items.length > 0 ? (
//               <div style={wrapperStyles}>
//                 <Swipeable
//                   buttons={({left, right}) => (
//                     <div style={actionsStyles}
//                     >
//                       <Button.Group fluid>
//                         <Button onClick={left}>No</Button>
//                         <Button.Or />
//                         <Button onClick={right} positive><Link to="/options">Yes</Link></Button>    
//                       </Button.Group>
//                     </div>
//                   )}
//                   onAfterSwipe={remove}
//                   onSwipe={redirect}
//                 >
//                  <Card style={{ ...cardStyles, zIndex: '0' }} id="fooditem">
//                    <div id="cardImage"
//                      style={{background: `url(${items[0].image}) no-repeat center`, backgroundSize: 'cover',
//                      width:300, height:400
//                      }} >
//                    </div>
//                    <Card.Content style={{width: '100%'}}>
//                    <Card.Header id="foodnameheader">{items[0].name}
//                        <Card.Meta><span>${(items[0].price).toFixed(2)}</span></Card.Meta>
//                    </Card.Header>
//                    <Card.Meta>
//                        <span className='date'>{items[0].restaurant}</span>
//                    </Card.Meta>
//                    <Card.Description>
//                      {items[0].description} {items[0].allergy}
//                    </Card.Description>
//                    </Card.Content>
//                    <Card.Content extra style={{ width: '100%' }}>
//                      <Icon name='star' />
//                      {items[0].rating}
//                    </Card.Content>
//                  </Card>))}
//                  </Swipeable>
//                  {items.length > 1 && 
//                    <Card style={{ ...cardStyles, zIndex: '-1' }} id="fooditem">
//                    <div id="cardImage"
//                      style={{background: `url(${items[1].image})`,
//                      width:300, height:400
                    
//                      }} >
//                    </div>
//                    <Card.Content style={{width: '100%'}}>
//                    <Card.Header id="foodnameheader">{items[1].name}
//                        <Card.Meta><span>${(items[1].price).toFixed(2)}</span></Card.Meta>
//                    </Card.Header>
//                    <Card.Meta>
//                        <span className='date'>{items[1].restaurant}</span>
//                    </Card.Meta>
//                    <Card.Description>
//                      {items[1].description} {items[1].allergy}
//                    </Card.Description>
//                    </Card.Content>
//                    <Card.Content extra style={{ width: '100%' }}>
//                      <Icon name='star' />
//                      {items[1].rating}
//                    </Card.Content>
//                  </Card>}
//                </div>
//              ) : (
//                <Card style={{ ...cardStyles, zIndex: '-2' }} id="fooditem">
//                    <Image src='https:placehold.it/400x500' wrapped ui={false} />
//                    <Card.Content style={{width: '100%'}}>
//                    <Card.Header id="foodnameheader">(food item name)
//                        <Card.Meta><span>(food price)</span></Card.Meta>
//                    </Card.Header>
//                    <Card.Meta>
//                        <span className='date'>(restaurant name)</span>
//                    </Card.Meta>
//                    <Card.Description>
//                        food allergy description
//                    </Card.Description>
//                    </Card.Content>
//                    <Card.Content extra style={{ width: '100%' }}>
//                      <Icon name='star' />
//                      rating??
//                    </Card.Content>
//                  </Card>)}
//            </div>
//             {/* )
//          } */}
//          </div>
       
//        );
//      }


// import React, { useState, useEffect} from "react";
// import { Card as FoodItem, Button, Icon, Image } from "semantic-ui-react"
// import { Link } from 'react-router-dom'
// import { getMenuItems, orderItem } from '../actions/diet.actions'
// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { Card as FoodCard, CardWrapper as FoodCardWrapper } from 'react-swipeable-cards';

  
// const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "500px"};
// const actionsStyles = {position: 'relative', bottom: 0, width: '100%'};
// const cardStyles = {borderRadius: 3, cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, height: '550px'}

//   export default props => {
//     const items = useSelector(appState => appState.dietReducer.allItems)
//     const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
//     const [rightSwipe, setRightSwipe] = useState(false)
//     const [swipe, setSwipe] = useState(false)
//     let counter = 0
//     console.log(swipe)
//     console.log(items)
    
//     useEffect(() => {
//       if(selectedDiets.length === 0){
//         getMenuItems('none')
//       } else {
//       getMenuItems(selectedDiets)
//       }
//       }, [])

//       function onSwipeLeft() {
//           counter++
//       }
     
//       function onSwipeRight() {
//         setRightSwipe(!rightSwipe)
//         counter++
//         orderItem(items[counter-1])
//       }
 
    //   return (
    //   rightSwipe ? <Redirect to="/options" /> : (
    //     <div>
    //    <FoodCardWrapper style={wrapperStyles}>
    //     { items.map((item) => (
    //       <FoodCard
    //       key={item.name}
    //       style={cardStyles}
    //       onSwipeLeft={onSwipeLeft}
    //       onSwipeRight={onSwipeRight}
    //       id="fooditem"
    //       >
    //       <FoodItem>
    //         <div id="cardImage"
    //             style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover',
    //             width:300, height:400
    //             }} >
    //         </div>
    //         <FoodItem.Content>
    //         <FoodItem.Header id="foodnameheader">{item.name}
    //             <FoodItem.Meta><span>${(item.price).toFixed(2)}</span></FoodItem.Meta>
    //         </FoodItem.Header>
    //         <FoodItem.Meta>
    //             <span className='date'>{item.restaurant}</span>
    //         </FoodItem.Meta>
    //         <FoodItem.Description>
    //           {item.description} {item.allergy}
    //         </FoodItem.Description>
    //         </FoodItem.Content>
    //         <FoodItem.Content extra >
    //           <Icon name='star' />
    //           {item.rating}
    //         </FoodItem.Content>
    //     </FoodItem>
    //     </FoodCard>
    //     )) }
    //   </FoodCardWrapper>
    //     <div styles={actionsStyles}>
    //       <Button.Group fluid >
    //             <Button onClick={ e => setSwipe(!swipe)}>No</Button>
    //             <Button.Or />
    //             <Button onClick={e => onSwipeRight()} positive><Link to="/options">Yes</Link></Button>    
    //         </Button.Group> 
    //     </div>
    //   </div>
    //   )
    // )}


//     import React, { useState, useEffect} from "react";
// import { Card as FoodItem, Button, Icon, Image } from "semantic-ui-react"
// import { Link } from 'react-router-dom'
// import { getMenuItems, orderItem } from '../actions/diet.actions'
// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { Card as FoodCard, CardWrapper as FoodCardWrapper } from 'react-swipeable-cards';

  
// const wrapperStyles = {position: "relative", maxWidth: "100vh", height: "500px"};
// const actionsStyles = {position: 'relative', bottom: 0, width: '100%'};
// const cardStyles = {borderRadius: 3, cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, height: '550px'}

//   export default props => {
//     const items = useSelector(appState => appState.dietReducer.allItems)
//     const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
//     const [rightSwipe, setRightSwipe] = useState(false)
//     const [swipe, setSwipe] = useState(false)
//     let counter = 0
//     console.log(swipe)
    
//     useEffect(() => {
//       if(selectedDiets.length === 0){
//         getMenuItems('none')
//       } else {
//       getMenuItems(selectedDiets)
//       }
//       }, [])

//       function onSwipeLeft() {
//           counter++
//       }
     
//       function onSwipeRight() {
//         setRightSwipe(!rightSwipe)
//         counter++
//         orderItem(items[counter-1])
//       }

//       return (
//         rightSwipe ? <Redirect to="/options" /> : (
//           <div>
//          <FoodCardWrapper style={wrapperStyles}>
//           { items.map((item) => (
//             <FoodCard
//             key={item.name}
//             style={{borderRadius: 3, cursor: "pointer", userSelect: "none", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", top: 0, height: '550px', }}
//             onSwipeLeft={onSwipeLeft}
//             onSwipeRight={onSwipeRight}
//             id="fooditem"
//             >
//             <FoodItem style={{marginTop:20, maxHeight:'500px'}}>
//               <div id="cardImage"
//                   style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover',
//                   width:300, height:300, 
//                   }} >
//               </div>
//               <FoodItem.Content>
//               <FoodItem.Header id="foodnameheader">{item.name}
//                   <FoodItem.Meta><span>${(item.price).toFixed(2)}</span></FoodItem.Meta>
//               </FoodItem.Header>
//               <FoodItem.Meta>
//                   <span className='date'>{item.restaurant}</span>
//               </FoodItem.Meta>
//               <FoodItem.Description style={{overflow:'ellipsis'}}>
//                 {item.description} {item.allergy}
//               </FoodItem.Description>
//               </FoodItem.Content>
//               <FoodItem.Content extra >
//                 <Icon name='star' />
//                 {item.rating}
//               </FoodItem.Content>
//           </FoodItem>
//           </FoodCard>
//           )) }
//         </FoodCardWrapper>
//           <div styles={actionsStyles}>
//             <Button.Group fluid >
//                   <Button onClick={ e => setSwipe(!swipe)}>No</Button>
//                   <Button.Or />
//                   <Button onClick={e => onSwipeRight()} positive><Link to="/options">Yes</Link></Button>    
//               </Button.Group> 
//           </div>
//         </div>
//         )
//       )}