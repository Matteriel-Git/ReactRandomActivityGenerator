import React from 'react'
import activities from '../ActivityDB'

export default function ActivityAndDescription(props) {

    const { activity, generateRandomActivity } = props;
    return (
        <div className="background-image">
        <div className="card" >

            <div className="card-body">
                <p className="card-text">{activity.activity}</p>
                <h5 className="card-title">- {activity.description}</h5>
                <button
                onClick={() => {generateRandomActivity(activities) }}
                type="submit">
                <i className="fas fa-mouse"></i> Generate Activity</button>
                <button
                className="m1-3"
                onClick={() => {
                    generateRandomActivity(activity);
                    window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(activity.activity + '--' + activity.description))
                }}
                type="submit"><i className="fab fa-twitter"></i> Share Your New Activity</button>
            </div>
        </div>
        <a className="random-photos">{activity.picture}</a>
        </div>
    )
}