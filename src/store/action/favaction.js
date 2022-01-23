export  function AddFavourite(status) {
    return {
      type: "ADD_FAVOURITE",
      payload: status
    };
  }

  export function RemoveFavourite(status){
    return{
      type:"REMOVE_FAVOURITE",
      payload: status
    };
     

  }
  