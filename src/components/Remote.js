import React from 'react';

class Remote extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=girls">Girls</button>
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=office">The Office</button>
      </div>

    )
  }
}


export default Remote;
