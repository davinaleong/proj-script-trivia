import IQuiz from '../quiz.interface'

interface IQuizComponentProps {
  index: number
  quiz: IQuiz | null
  overlay: string | null
}

export default IQuizComponentProps
