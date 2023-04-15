import IOption from '../interfaces/option.interface'
import IQuiz from '../interfaces/quiz.interface'
import IState from '../interfaces/state.interface'

const CreatorHelper = {
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

  state: (name: string): IState => {
    return { name }
  },
}

export default CreatorHelper
