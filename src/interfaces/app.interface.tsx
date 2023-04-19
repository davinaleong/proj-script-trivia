import IQuiz from './quiz.interface'
import ISteps from './steps.interface'

interface IApp {
  stepsData: ISteps
  quizzesData: Array<IQuiz>
}

export default IApp
