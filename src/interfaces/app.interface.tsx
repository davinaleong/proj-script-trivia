import IQuiz from './quiz.interface'
import ISteps from './steps.interface'

export default interface IApp {
  stepsData: ISteps
  quizzesData: Array<IQuiz>
}
