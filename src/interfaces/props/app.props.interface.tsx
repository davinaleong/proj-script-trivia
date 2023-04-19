import IQuiz from '../quiz.interface'
import ISteps from '../steps.interface'

interface IAppProps {
  stepsData: ISteps
  quizzesData: Array<IQuiz>
  completedMessagesData: Array<string>
}

export default IAppProps
