import React, {useState} from 'react'
import '../styles/Slider.scss'

import Workout from './Workout'

import data from '../data'

const Slider = () => {

    const [workouts, setWorkouts] = useState(data.workouts)

    return (
        <section className="Slider">
            {
                workouts.map(workout => {
                return <Workout
                        name={workout.name}
                        exercises={workout.exercises}/>
                })
            }
        </section>
    )
}

export default Slider