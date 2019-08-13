import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.episodes){
      let seasonsNotUnique = this.props.episodes.map((e)=> e.season)
      const seasons = uniqueArray(seasonsNotUnique);
      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    if (this.props.episodes !== undefined && this.props.episodes.length > 0) {
      return this.props.episodes.map((e)=>{
        if (e.season === this.state.selectedSeason){
          return (<Episode eachEpisode={e} key={e.id}/>)
        }
        return null;
      })
    }
    return null;
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;


// Array.prototype.unique = function() {
//   console.warn("Why are they doing this?")
//   debugger;
//   var arr = [];
//   for(var i = 0; i < this.length; i++) {
//     if(!arr.includes(this[i])) {
//         arr.push(this[i]);
//     }
//   }
//   return arr;
// }

function uniqueArray(array) {
  let arr = [];
  for(let i = 0; i < array.length; i++) {
    if(!arr.includes(array[i])) {
        arr.push(array[i]);
    }
  }
  return arr;
}
