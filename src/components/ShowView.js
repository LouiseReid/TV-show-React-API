import React from 'react';

class ShowView extends React.Component {


  render(){
    console.log(this.props.show);

    return(
      <article>
        <h1>{this.props.show.name}</h1>
      </article>
    );
  }
}



export default ShowView;
