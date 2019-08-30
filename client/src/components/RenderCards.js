// import React from 'react'
// import { Card, CardWrapper } from 'react-swipeable-cards';
 
// export default props => {
//   const items = useSelector(appState => appState.dietReducer.allItems)
//   const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)

//   useEffect(() => {
//     if(selectedDiets.length === 0){
//       getMenuItems('none')
//     } else {
//     getMenuItems(selectedDiets)
//     }
//     }, [])
 
//   function onSwipe() {
//     console.log("I was swiped.");
//   }
 
//   function onSwipeLeft() {
//     console.log("I was swiped left.");
//   }
 
//   function onSwipeRight() {
//     console.log("I was swiped right.");
//   }
 
//   function onDoubleTap() {
//     console.log("I was double tapped.");
//   }
 
  
//   const data = ["first", "second", "third"];
  
  

//     return(
//       <CardWrapper>
//         { data.map((d) => (
//           <FoodItem>
//             <div id="cardImage"
//                 style={{background: `url(${item.image}) no-repeat center`, backgroundSize: 'cover',
//                 width:300, height:400
//                 }} >
//             </div>
//             <FoodItem.Content style={{width: '100%'}}>
//             <FoodItem.Header id="foodnameheader">{item.name}
//                 <FoodItem.Meta><span>${(item.price).toFixed(2)}</span></FoodItem.Meta>
//             </FoodItem.Header>
//             <FoodItem.Meta>
//                 <span className='date'>{item.restaurant}</span>
//             </FoodItem.Meta>
//             <FoodItem.Description>
//               {item.description} {item.allergy}
//             </FoodItem.Description>
//             </FoodItem.Content>
//             <FoodItem.Content extra style={{ width: '100%' }}>
//               <Icon name='star' />
//               {item.rating}
//             </FoodItem.Content>
//           </FoodItem>
//         )) }
//       </CardWrapper>
//     );
// }