import React, { Component } from 'react';



export default class Projects extends Component{

state = {
  clicked: false
}


  handleHover(){
    this.setState({
      clicked: true
    })
  }




  render(){
    if (this.state.clicked === true){
      return (
        <div>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/8H_S9hPYpXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/lRnOAxW6lCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/Ks10yM6HF54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/WJy3Uix1sJM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )
    } else {
    return(
      <div onClick = {this.handleHover()}>
      <h3>Projects</h3>
      </div>
    )
  }
}
}
