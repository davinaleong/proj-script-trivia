import IOption from '../interfaces/option.interface'
import IQuiz from '../interfaces/quiz.interface'

const quiz = (
  name: string,
  image: HTMLImageElement,
  options: Array<IOption>
): IQuiz => {
  return { name, image, options }
}

const option = (
  name: string,
  key: string,
  image: HTMLImageElement
): IOption => {
  return { name, key, image }
}

const quizWithOptions = (
  quizzes: Array<IQuiz>,

  name: string,
  image: HTMLImageElement,

  optionAName: string,
  optionAKey: string,
  optionAImage: HTMLImageElement,

  optionBName: string,
  optionBKey: string,
  optionBImage: HTMLImageElement,

  optionCName: string,
  optionCKey: string,
  optionCImage: HTMLImageElement,

  optionDName: string,
  optionDKey: string,
  optionDImage: HTMLImageElement
): Array<IQuiz> => {
  const optionA: IOption = option(optionAName, optionAKey, optionAImage)
  const optionB: IOption = option(optionBName, optionBKey, optionBImage)
  const optionC: IOption = option(optionCName, optionCKey, optionCImage)
  const optionD: IOption = option(optionDName, optionDKey, optionDImage)

  const options: Array<IOption> = [optionA, optionB, optionC, optionD]

  const thisQuiz: IQuiz = quiz(name, image, options)

  quizzes.push(thisQuiz)

  return quizzes
}

const CreatorHelper = {
  quiz,
  option,
  quizWithOptions,
}

export default CreatorHelper
