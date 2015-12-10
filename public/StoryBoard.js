"use strict";
import React from "react";
import UseInput from "./UserInput"

class StoryBoard extends React.Component {
	render(){

// let data1 =[
//    {"name": "Luke Skywalker", "homeworld": "Tatooine", "species": "null"},
// ];

var data = this.props.data;
var n = 0;
var y = 0; 

let stories =[
   { text: `A hellacious asteroid storm pummled the ${data[n].species}'s ship, forcing
   them to crash land on ${data[n].planet}. As the first ${data[n].species} 
   emerged from the battered vessel, he saw ${data[n].name} laughing coldly,
   approaching with a light sabre drawn`}
   // ,{ text: `A hellacious asteroid storm pummled the ${speciesX}'s ship, forcing
   // them to crash land on ${planetX}. As the first ${speciesX} emerged from the battered
   // space vessel, he saw ${characterX}. ${characterX} laughed coldly as he approached, light
   // sabre drawn`},
   // { text: `A hellacious asteroid storm pummled the ${speciesX}'s ship, forcing
   // them to crash land on ${planetX}. As the first ${speciesX} emerged from the battered
   // space vessel, he saw ${characterX}. ${characterX} laughed coldly as he approached, light
   // sabre drawn`}
];
	
var story = <span> {stories[y].text} </span> 

		return(
			<div>
				{story}
			</div>
		)
	}
}

module.exports = StoryBoard;