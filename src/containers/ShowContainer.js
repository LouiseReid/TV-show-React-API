import React from 'react';
import ShowView from '../components/ShowView';
import Remote from '../components/Remote';

class ShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: null,
      url: null
    }
    this.changeChannel = this.changeChannel.bind(this)
  }

  componentDidUpdate(prevState, prevProps){
    if(prevState.url !== this.state.url){
    let url = this.state.url;
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
  }

  changeChannel(event){
    this.setState({url: event.target.value})
  }


  render(){
    return(
      <div className="container">
        <div className="tvBox">
          <ShowView show={this.state.show} />
        </div>
          <Remote onClick={this.changeChannel}/>
      </div>

    )
  }
}


export default ShowContainer;
