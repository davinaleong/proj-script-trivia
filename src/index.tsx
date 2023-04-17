import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import StepsData from './data/steps.data'
import QuizzesData from './data/quizzes.data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App stepsData={StepsData} quizzesData={QuizzesData} />
  </React.StrictMode>
)
