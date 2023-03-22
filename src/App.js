
import React, { Component } from 'react'
import ActivityAndDescription from './components/ActivityAndDescription';
import activities from './ActivityDB';

export default class App extends Component {

  // state
  state = {
    activity: activities[0].activity,
    description: activities[0].description
  }

  // generate different activity function
  generateRandomActivity = (arr) => {
    // get random numbers
    let num = Math.floor(Math.random() * activities.length)

    let newActivity = activities[num];

    // update state
    this.setState({
      activity: newActivity.activity,
      description: newActivity.description
    })

    this.shuffleActivities(activities)

  }

  // shuffle activities function
  shuffleActivities = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Random Activity Generator</h1>
        <ActivityAndDescription
        generateRandomActivity={this.generateRandomActivity}
        activity={this.state}
        />
      </div>
    )
  }
}