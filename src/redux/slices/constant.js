export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.503215',
      bl_lng: '25.324261',
      tr_lat: '42.869652',
      tr_lng: '44.552871',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '215399c06bmsh534effbb46952acp142478jsn4c319ef804da',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };


  export const options2 = {
    headers: {
      'X-RapidAPI-Key': '215399c06bmsh534effbb46952acp142478jsn4c319ef804da',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  }