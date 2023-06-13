export  const initialState ={
        user: null,
        playlists: [],
        spotify: null,
        discover_weekly: null,
        top_artists: null,
        playing: false,
        item: null,
       // token:'BQBCiM-x41Orzs3-mszX5CCJPGP8tHPWMv0yz6pytrl9tdeWvX_Ued-8ZIDA5jKYQWwyRxz7Pg1tOP0ZVuMcNs2HpQ3yIKkTQGJvYGt8f4M8IaxxozO9Epl4RDFNowSJTyRqjBBOlf-iWohA6Ggbp4byHAlrAn2vjlrBLqEbNesp_qhmsUb-eFS_GzsvGGb81ISBPQD86oZynGiFxptgHhGj ',
};
 // Action -> type,[payload]

export  const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){
        case'SET_USER':
        return {
            ...state,
            user:action.user
        };

        case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly:action.discover_weekly,
        }
        default:
            return state;
    }
}
 