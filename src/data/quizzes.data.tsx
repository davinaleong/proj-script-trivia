import CreatorHelper from '../helpers/creator.helper'
import IOption from '../interfaces/option.interface'
import IQuiz from '../interfaces/quiz.interface'

const QuizzesData: Array<IQuiz> = []

// 0001
import img0001 from './../assets/images/quizzes/0001/0001.png'
import img0001OptionA from './../assets/images/quizzes/0001/css.png'
import img0001OptionB from './../assets/images/quizzes/0001/html.png'
import img0001OptionC from './../assets/images/quizzes/0001/js.png'
import img0001OptionD from './../assets/images/quizzes/0001/php.png'

const quiz0001OptionA: IOption = CreatorHelper.option(
  `CSS`,
  `css`,
  img0001OptionA
)

const quiz0001OptionB: IOption = CreatorHelper.option(
  `HTML`,
  `html`,
  img0001OptionB
)

const quiz0001OptionC: IOption = CreatorHelper.option(
  `JS`,
  `js`,
  img0001OptionC
)

const quiz0001OptionD: IOption = CreatorHelper.option(
  `PHP`,
  `php`,
  img0001OptionD
)

const quiz0001: IQuiz = CreatorHelper.quiz(
  `Match the Coding Language`,
  img0001,
  [quiz0001OptionA, quiz0001OptionB, quiz0001OptionC, quiz0001OptionD]
)

QuizzesData.push(quiz0001)

// 0002
import img0002 from './../assets/images/quizzes/0002/0002.png'
import img0002OptionA from './../assets/images/quizzes/0002/css.png'
import img0002OptionB from './../assets/images/quizzes/0002/json.png'
import img0002OptionC from './../assets/images/quizzes/0002/md.png'
import img0002OptionD from './../assets/images/quizzes/0002/sql.png'

const quiz0002OptionA: IOption = CreatorHelper.option(
  `CSS`,
  `css`,
  img0002OptionA
)

const quiz0002OptionB: IOption = CreatorHelper.option(
  `JSON`,
  `json`,
  img0002OptionB
)

const quiz0002OptionC: IOption = CreatorHelper.option(
  `MD`,
  `md`,
  img0002OptionC
)

const quiz0002OptionD: IOption = CreatorHelper.option(
  `SQL`,
  `sql`,
  img0002OptionD
)

const quiz0002: IQuiz = CreatorHelper.quiz(
  `Match the Coding Language`,
  img0002,
  [quiz0002OptionA, quiz0002OptionB, quiz0002OptionC, quiz0002OptionD]
)

QuizzesData.push(quiz0002)

// 0003
import img0003 from './../assets/images/quizzes/0003/0003.png'
import img0003OptionA from './../assets/images/quizzes/0003/comment.png'
import img0003OptionB from './../assets/images/quizzes/0003/property.png'
import img0003OptionC from './../assets/images/quizzes/0003/selector.png'
import img0003OptionD from './../assets/images/quizzes/0003/value.png'

const quiz0003OptionA: IOption = CreatorHelper.option(
  `Comment`,
  `comment`,
  img0003OptionA
)

const quiz0003OptionB: IOption = CreatorHelper.option(
  `Property`,
  `property`,
  img0003OptionB
)

const quiz0003OptionC: IOption = CreatorHelper.option(
  `Selector`,
  `selector`,
  img0003OptionC
)

const quiz0003OptionD: IOption = CreatorHelper.option(
  `Value`,
  `value`,
  img0003OptionD
)

const quiz0003: IQuiz = CreatorHelper.quiz(`Match the CSS Property`, img0003, [
  quiz0003OptionA,
  quiz0003OptionB,
  quiz0003OptionC,
  quiz0003OptionD,
])

QuizzesData.push(quiz0003)

export default QuizzesData
