import IOption from './option.interface'

export default interface IQuiz {
  name: string
  image: HTMLImageElement
  options: Array<IOption>
  completed: boolean
}
