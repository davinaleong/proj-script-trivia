import IOptionsData from '../data/options.data.interface'
import IQuiz from '../quiz.interface'
import ISteps from '../data/steps.data.interface'

interface IAppProps {
  stepsData: ISteps
  optionsData: IOptionsData
  quizzesData: Array<IQuiz>
  completedMessagesData: Array<string>
}

export default IAppProps
