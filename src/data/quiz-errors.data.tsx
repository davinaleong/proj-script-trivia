import IQuizErrorsData from '../interfaces/data/quiz-errors.data.interface'

const QuizErrorsData: IQuizErrorsData = {
  notFilledErrors: ['Not all answers have been filled.'],
  incorrectAnswerErrors: [
    'Oops! Try again.',
    'Answers are incorrect.',
    'Nope. Remember, anwsers are unique.',
    'Some answers are very similiar. Look for the differences.',
  ],
}

export default QuizErrorsData
