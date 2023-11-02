import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from './components/Header'
import { Content } from './components/Content'
import { Total } from './components/Total'


const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicações Half Stack',
    parts: [
      {
        name: 'Fundamentos de React',
        exercises: 10
      },
      {
        name: 'Utilizando endereços para passar dados',
        exercises: 7
      },
      {
        name: 'Estado do Componente',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(x => x['exercises'])} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
