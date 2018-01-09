import React from 'react';
import ShowView from '../components/ShowView';

class ShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: []
    }
  }

  componentDidMount(){
    const url = "http://api.tvmaze.com/singlesearch/shows?q=girls";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () =>{
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({show: data});
      }
    })
    request.send()
  }

  render(){
    console.log(this.state.show);
    return(
      <ShowView show={this.state.show} />
    )
  }
}


export default ShowContainer;
