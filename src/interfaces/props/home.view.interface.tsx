import IConfigData from '../data/config.data.interface'
import IQuiz from '../quiz.interface'

interface IHomeViewProps {
  configData: IConfigData
  quizzesData: Array<IQuiz>
  handleQuizClick: any
}

export default IHomeViewProps
