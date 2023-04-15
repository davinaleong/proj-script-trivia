import { ReactElement } from 'react'
import { HomeView } from '../views/home.view'
import { QuizView } from '../views/quiz.view'
import { FinishedView } from '../views/finished.view'

const ViewsData: Array<ReactElement> = [
  <HomeView key="hv" />,
  <QuizView key="qv" />,
  <FinishedView key="fv" />,
]

export default ViewsData
