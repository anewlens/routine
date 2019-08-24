import React from 'react'

import '../styles/Workout.scss'

const Workout = ({name, exercises}) => {
    return (
        <div className="Workout">
            <header className="Workout-title">{name}</header>
            <hr className="Workout-separator"/>
            <div className="Workout-content">
                <ul className="Workout-exercises">
                    {
                        exercises.map(exercise => {
                            return (
                                <li className="Workout-exercise">
                                    <p className="Workout-exercise-name">{exercise.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Workout