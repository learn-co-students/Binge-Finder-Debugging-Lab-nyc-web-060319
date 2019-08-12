class Adapter {
  static getShows (){
    return fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
  }

  static getShowEpisodes (showID){
    return fetch(`https://api.tvmaze.com/shows/${showID}/episodes`
      // {
      //   mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }
    )
    .then(res => res.json())
  }
}

export default Adapter;
