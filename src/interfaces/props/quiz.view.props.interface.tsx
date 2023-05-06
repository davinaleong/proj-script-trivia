import IConfigData from '../data/config.data.interface'
import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IOptionLettersData from '../data/optionLetters.data.interface'
import IQuiz from '../quiz.interface'

interface IQuizViewProps {
  quizIndex: number
  quiz: IQuiz | null
  shuffledQuiz: IQuiz | null
  configData: IConfigData
  indexToOptionsData: IIndexToIndexToOptionsData
  optionLettersData: IOptionLettersData
  handleQuizHomeClick: any
  handleQuizContactClick: any
  handleQuizSubmitClick: any
}

export default IQuizViewProps
