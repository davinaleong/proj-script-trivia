import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IQuiz from '../quiz.interface'
import IStepsData from '../data/steps.data.interface'
import IOptionLettersData from '../data/optionLetters.data.interface'
import IConfigData from '../data/config.data.interface'

interface IAppProps {
  configData: IConfigData
  stepsData: IStepsData
  indexToOptionsData: IIndexToIndexToOptionsData
  optionLettersData: IOptionLettersData
  quizzesData: Array<IQuiz>
  completedMessagesData: Array<string>
}

export default IAppProps
