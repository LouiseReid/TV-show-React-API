import React from 'react';

class Remote extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="remote">
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=girls">Girls</button>
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=office">The Office</button>
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=peaky-blinders">Peaky Blinders</button>
        <button onClick={this.props.onClick} value="http://api.tvmaze.com/singlesearch/shows?q=parks-and-recreation">Parks and Rec</button>
      </div>
      </React.Fragment>

    )
  }
}


export default Remote;
