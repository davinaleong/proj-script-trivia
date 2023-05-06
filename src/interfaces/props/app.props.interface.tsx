import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IQuiz from '../quiz.interface'
import ISteps from '../data/steps.data.interface'
import IOptionLettersData from '../data/optionLetters.data.interface'

interface IAppProps {
  stepsData: ISteps
  indexToOptionsData: IIndexToIndexToOptionsData
  optionLettersData: IOptionLettersData
  quizzesData: Array<IQuiz>
  completedMessagesData: Array<string>
}

export default IAppProps
