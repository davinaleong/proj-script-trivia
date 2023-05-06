import IQuiz from '../quiz.interface'
import IStatusesData from './statuses.data.interface'
import IConfigData from './config.data.interface'
import IIndexToOptionsData from './indexToOptions.data.interface'
import IOptionLettersData from './optionLetters.data.interface'
import IStepsData from './steps.data.interface'

interface IData {
  CompletedMessagesData: Array<string>
  ConfigData: IConfigData
  ErrorsData: any
  IndexToOptionsData: IIndexToOptionsData
  OptionLettersData: IOptionLettersData
  QuizzesData: Array<IQuiz>
  StatusesData: IStatusesData
  StepsData: IStepsData
}

export default IData
