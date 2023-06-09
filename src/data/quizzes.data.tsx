import CreatorHelper from '../helpers/creator.helper'
import IQuiz from '../interfaces/quiz.interface'

const QuizzesData: Array<IQuiz> = []

// 0001
import Image0001 from './../assets/images/quizzes/0001/0001.png'
import Image0001OptionA from './../assets/images/quizzes/0001/css.png'
import Image0001OptionB from './../assets/images/quizzes/0001/html.png'
import Image0001OptionC from './../assets/images/quizzes/0001/js.png'
import Image0001OptionD from './../assets/images/quizzes/0001/php.png'

CreatorHelper.quizWithOptions(
  QuizzesData,

  `Match the Coding Language 001`,
  Image0001,

  `CSS`,
  `css`,
  Image0001OptionA,

  `HTML`,
  `html`,
  Image0001OptionB,

  `JS`,
  `js`,
  Image0001OptionC,

  `PHP`,
  `php`,
  Image0001OptionD
)

// 0002
import Image0002 from './../assets/images/quizzes/0002/0002.png'
import Image0002OptionA from './../assets/images/quizzes/0002/css.png'
import Image0002OptionB from './../assets/images/quizzes/0002/json.png'
import Image0002OptionC from './../assets/images/quizzes/0002/md.png'
import Image0002OptionD from './../assets/images/quizzes/0002/sql.png'

CreatorHelper.quizWithOptions(
  QuizzesData,

  `Match the Coding Language 002`,
  Image0002,

  `CSS`,
  `css`,
  Image0002OptionA,

  `JSON`,
  `json`,
  Image0002OptionB,

  `MD`,
  `md`,
  Image0002OptionC,

  `SQL`,
  `sql`,
  Image0002OptionD
)

// 0003
import Image0003 from './../assets/images/quizzes/0003/0003.png'
import Image0003OptionA from './../assets/images/quizzes/0003/comment.png'
import Image0003OptionB from './../assets/images/quizzes/0003/property.png'
import Image0003OptionC from './../assets/images/quizzes/0003/selector.png'
import Image0003OptionD from './../assets/images/quizzes/0003/value.png'

CreatorHelper.quizWithOptions(
  QuizzesData,

  `Match the CSS Property`,
  Image0003,

  `Comment`,
  `comment`,
  Image0003OptionA,

  `Property`,
  `property`,
  Image0003OptionB,

  `Selector`,
  `selector`,
  Image0003OptionC,

  `Value`,
  `value`,
  Image0003OptionD
)

export default QuizzesData
