import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IQuiz from '../quiz.interface'
import ISteps from '../data/steps.data.interface'

interface IAppProps {
  stepsData: ISteps
  indexToOptionsData: IIndexToIndexToOptionsData
  quizzesData: Array<IQuiz>
  completedMessagesData: Array<string>
}

export default IAppProps
