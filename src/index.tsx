import ReactDOM from 'react-dom'
import { App } from './App'

import StepsData from './data/steps.data'
import QuizzesData from './data/quizzes.data'

ReactDOM.render(
  <App stepsData={StepsData} quizzesData={QuizzesData} />,
  document.getElementById('root')
)
