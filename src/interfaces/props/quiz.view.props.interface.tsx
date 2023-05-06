import IIndexToIndexToOptionsData from '../data/indexToOptions.data.interface'
import IQuiz from '../quiz.interface'

interface IQuizViewProps {
  quizIndex: number
  quiz: IQuiz | null
  shuffledQuiz: IQuiz | null
  indexToOptionsData: IIndexToIndexToOptionsData
  handleQuizHomeClick: any
  handleQuizContactClick: any
  handleQuizSubmit: any
}

export default IQuizViewProps
