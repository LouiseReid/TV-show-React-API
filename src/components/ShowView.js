import React from 'react';

class ShowView extends React.Component {


  render(){
    if (!this.props.show) return null;


    return(
      <article>
        <h1>{this.props.show.name}</h1>
        <img src={this.props.show.image.medium} alt="" height="100"/>

      </article>
    )
  }
}



export default ShowView;
