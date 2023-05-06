import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IOptionLettersData from '../data/optionLetters.data.interface'
import IQuiz from '../quiz.interface'

interface IQuizViewProps {
  quizIndex: number
  quiz: IQuiz | null
  shuffledQuiz: IQuiz | null
  indexToOptionsData: IIndexToIndexToOptionsData
  optionLettersData: IOptionLettersData
  handleQuizHomeClick: any
  handleQuizContactClick: any
  handleQuizSubmit: any
}

export default IQuizViewProps
