import IOption from './option.interface'

interface IQuiz {
  name: string
  image: HTMLImageElement
  options: Array<IOption>
  completed: boolean
}

export default IQuiz
