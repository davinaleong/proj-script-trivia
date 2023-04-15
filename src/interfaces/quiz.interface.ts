import IOption from './options.interface'

export default interface IQuiz {
  name: string
  image: HTMLImageElement
  options: Array<IOption>
}
