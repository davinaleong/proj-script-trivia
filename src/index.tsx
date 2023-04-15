import ReactDOM from 'react-dom'
import { App } from './App'

import StepsData from './data/steps.data'
import ViewsData from './data/views.data'
import QuizzesData from './data/quizzes.data'

ReactDOM.render(
  <App stepsData={StepsData} viewsData={ViewsData} quizzesData={QuizzesData} />,
  document.getElementById('root')
)
