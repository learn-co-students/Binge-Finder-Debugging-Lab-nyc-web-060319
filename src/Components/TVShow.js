import React from 'react';

const tvShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={(event) => { props.selectShow(event, props.show)}} alt=""/>
    </div>
  );
}

export default tvShow;
