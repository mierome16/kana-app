const initialState = {
 selectedDiets: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_DIET':
      if (state.selectedDiets.find(diet => diet === action.payload)) {
        return {...state, selectedDiets: state.selectedDiets.filter(diet => diet !== action.payload)}
      } else {
      return {...state, selectedDiets: [...state.selectedDiets, action.payload]}
      }
    default: 
      return state
  }
}