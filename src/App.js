import React, {useState} from 'react'

import './styles/index.scss'
import './styles/app.scss'

import Header from './Components/Header'
import Slider from './Components/Slider'
import History from './Components/History'
import data from './data'

function App() {

  const [workouts, setWorkouts] = useState(data.workouts)

  return (
    <div className="App">
      <Header />
      <Slider />
      <History />
    </div>
  )
}

export default App