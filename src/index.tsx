import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import StepsData from './data/steps.data'
import IndexToOptionsData from './data/index-to-options.data'
import QuizzesData from './data/quizzes.data'
import CompletedMessagesData from './data/completed-messages.data'
import OptionLettersData from './data/options-letters.data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App
      stepsData={StepsData}
      indexToOptionsData={IndexToOptionsData}
      optionLettersData={OptionLettersData}
      quizzesData={QuizzesData}
      completedMessagesData={CompletedMessagesData}
    />
  </React.StrictMode>
)
