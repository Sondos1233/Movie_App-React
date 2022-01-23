const initial = {
  favList: [],
 
};

export default function favoritesReducer(state = initial, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favList: state.favList.filter(item => {
          return item.id !== action.payload.id;
        }),
      };
    
    default:
      return state;
  }
}
