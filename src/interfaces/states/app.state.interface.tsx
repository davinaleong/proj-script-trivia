import IQuiz from '../quiz.interface'
import ISubject from '../subject.interface'

interface IAppState {
  step: number
  subjectsData: Array<ISubject>
  quizzesData: Array<IQuiz>
  quizIndex: number
  quiz: IQuiz | null
  shuffledQuiz: IQuiz | null
}

export default IAppState
