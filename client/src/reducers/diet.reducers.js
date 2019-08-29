const initialState = {
 selectedDiets: [],
 allItems: [],
 orderedItems: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_DIET':
      if (state.selectedDiets.find(diet => diet === action.payload)) {
        return {...state, selectedDiets: state.selectedDiets.filter(diet => diet !== action.payload)}
      } else {
      return {...state, selectedDiets: [...state.selectedDiets, action.payload]}
      }
    case 'GET_ALL_ITEMS':
      return {...state, allItems: action.payload}
    case 'ORDER_ITEM':
      return {...state, orderedItems: [action.payload, ...state.orderedItems]}
    default: 
      return state
  }
}