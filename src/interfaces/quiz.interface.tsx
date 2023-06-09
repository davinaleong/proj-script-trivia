import IOption from './option.interface'

interface IQuiz {
  name: string
  image: any
  options: Array<IOption>
  completed: boolean
}

export default IQuiz
