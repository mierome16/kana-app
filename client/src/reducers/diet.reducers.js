const initialState = {
 selectedDiets: [],
 allItems: [],
 selectedMeals: []
 filteredItems: []

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
    case 'GET_FILTERED_ITEMS':
      return {...state, filteredItems: action.payload}

    case 'GET_ALLERGYFREE':
        return {...state, allItems: state.allItems.filter(item => item.allergy.includes(action.payload))}
    
    case 'SELECT_MEAL':
      if (state.selectedMeals.find(meal => meal === action.payload)) {
        return {...state, selectedMeals: state.selectedMeals.filter(meal => meal !== action.payload)}
      } else {
        return {...state, selectedMeals: [...state.selectedMeals, action.payload]}
      }

    default: 
      return state
  }
}