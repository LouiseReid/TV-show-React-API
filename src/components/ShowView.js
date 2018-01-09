import React from 'react';

class ShowView extends React.Component {


  render(){
    if (!this.props.show) return null;


    return(
      <React.Fragment>
        <article>
          <img src={this.props.show.image.medium} alt="" height="100"/>
        </article>
        <section>
          <h1>{this.props.show.name}</h1>
          <h3>{this.props.show.network.name}</h3>
          <h3>{this.props.show.genres[0]}</h3>
        </section>

      </React.Fragment>


    )
  }
}



export default ShowView;
