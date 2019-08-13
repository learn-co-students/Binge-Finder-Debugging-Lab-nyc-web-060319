import React from 'react';

const TVShow = (props) => {
  // if (props.show.image === null) {
  //   debugger;
  // }
  return (
    <div>
      <br/>
      <img src={(props.show.image !== null) ? props.show.image.medium : ""} onClick={(event) => { props.selectShow(event, props.show)}} alt=""/>
    </div>
  );
}

export default TVShow;
