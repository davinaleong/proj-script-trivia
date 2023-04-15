import IOption from '../interfaces/options.interface'
import IQuiz from '../interfaces/quiz.interface'

export default {
  quiz: (
    name: string,
    image: HTMLImageElement,
    options: Array<IOption>
  ): IQuiz => {
    return { name, image, options }
  },

  option: (name: string, key: string, image: HTMLImageElement): IOption => {
    return { name, key, image }
  },
}
