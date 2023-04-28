import IOptionsData from '../data/options.data.interface'
import IQuiz from '../quiz.interface'

interface IQuizViewProps {
  quizIndex: number
  quiz: IQuiz | null
  shuffledQuiz: IQuiz | null
  optionsData: IOptionsData
  handleQuizHomeClick: any
  handleQuizContactClick: any
  handleQuizSubmit: any
}

export default IQuizViewProps
