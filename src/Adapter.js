const TVMAZE_BASE_SHOWS_API_URL = 'http://api.tvmaze.com/shows';

class Adapter {
  static getShows (){
    return fetch(`${TVMAZE_BASE_SHOWS_API_URL}`)
    .then(res => res.json())
  }

  static getShowsSearch(query) {

  }

  static getShowEpisodes (showID){
    return fetch(`${TVMAZE_BASE_SHOWS_API_URL}/${showID}/episodes`
      // {
      //   mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }
    )
    .then(res => {
      // console.log(res.json())
      return res.json();
    })
  }
}

export default Adapter;
