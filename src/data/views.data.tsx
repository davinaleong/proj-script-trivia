import { ReactElement } from 'react'
import { HomeView } from '../views/home.view'
import { QuizView } from '../views/quiz.view'
import { CompletedView } from '../views/completed.view'

const ViewsData: Array<ReactElement> = [
  <HomeView key="hv" />,
  <QuizView key="qv" />,
  <CompletedView key="fv" />,
]

export default ViewsData
