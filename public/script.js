"use strict";
import React from "react";
var ReactDOM = require("react-dom");
import StoryBoard from "./StoryBoard";
var UserInput = require("./UserInput")

let data1 =[
   {"name": "Luke Skywalker", "homeworld": "Tatooine", "species": "null"},
];

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = { storyInput: [], storyTitle: "" };
  }
    createStory(newStory){
      $.post("/api/links", newStory)
        .success(data => {
          this.setState({
            storyInput: this.state.storyInput
          });
        });
    }
componentDidMount() {
    console.log("way to mount that story data");
    $.get("/api/links")
      .success(data => {
        this.setState({bookmarks: data.links});
      });
}
componentWillMount() {
    console.log("so I guess I should put a loading message here...") 
}
componentWillUpdate(nextProps, nextState) {
    console.log("when the data gets a chance it will update?")
}
 	render(){	
		return(
      <div className="app">
        <StoryBoard data={data1}/>
        <UserInput createStory={this.state.storyInput} />
      </div>
		 )
	}
}

      //   <UserInput />
      // </div>
      // <div>

ReactDOM.render(<AppController />, document.getElementById('react'));