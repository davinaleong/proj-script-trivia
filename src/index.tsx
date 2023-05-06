import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import StepsData from './data/steps.data'
import IndexToOptionsData from './data/indexToOptions.data'
import QuizzesData from './data/quizzes.data'
import CompletedMessagesData from './data/completed-messages.data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App
      stepsData={StepsData}
      indexToOptionsData={IndexToOptionsData}
      quizzesData={QuizzesData}
      completedMessagesData={CompletedMessagesData}
    />
  </React.StrictMode>
)
