const TVMAZE_BASE_SHOWS_API_URL = 'http://api.tvmaze.com/shows';
const TVMAZE_BASE_SEARCH_API_URL = 'http://api.tvmaze.com/search/shows?q='
class Adapter {
  static getShows (){
    return fetch(`${TVMAZE_BASE_SHOWS_API_URL}`)
    .then(res => res.json())
  }

  static getShowsSearch(query) {
    return fetch(`${TVMAZE_BASE_SEARCH_API_URL}${encodeURIComponent(query)}`)
      .then(res => res.json()).then(res => {

        // console.log(res);
        return res.map(show => {
          return show.show;
        });
      })
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
