import { ReactElement } from 'react'
import IQuiz from './quiz.interface'
import ISteps from './steps.interface'

export default interface IApp {
  stepsData: ISteps
  viewsData: Array<ReactElement>
  quizzesData: Array<IQuiz>
}
