const initialState = {
  diets:[],
  selectedDiets: [],
  meals: [],
  allItems: [],
  selectedMeals: [],
  orderedItem: '',
  pastOrders: [],
  filteredItems: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_DIETS':
        return {...state, diets: action.payload}

    case 'SELECT_DIET':
      if (state.selectedDiets.find(diet => diet === action.payload)) {
        return {...state, selectedDiets: state.selectedDiets.filter(diet => diet !== action.payload)}
      } else {
        return {...state, selectedDiets: [...state.selectedDiets, action.payload]}
      }

    case 'GET_MEALS':
        return {...state, meals: action.payload}

    case 'SELECT_MEAL':
      if (state.selectedMeals.find(meal => meal === action.payload)) {
        return {...state, selectedMeals: state.selectedMeals.filter(meal => meal !== action.payload)}
      } else {
        return {...state, selectedMeals: [...state.selectedMeals, action.payload]}
      }

    case 'GET_ALL_ITEMS':
      return {...state, allItems: action.payload}

    case 'ORDER_ITEM':
        return {...state, orderedItem: action.payload}

    case 'END_ORDER':
      return {...state, orderedItem: ''}
      
    case 'GET_PAST_ORDERS':
      return {...state, pastOrders: action.payload}
    default: 
      return state
  }
}