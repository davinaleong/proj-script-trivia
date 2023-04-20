import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import IQuizComponentProps from '../interfaces/props/quiz.component.interface'

function QuizComponent({
  index,
  quiz,
  overlay,
  handleQuizClick,
}: IQuizComponentProps) {
  const handleClick = (): void => {
    handleQuizClick(index)
  }

  const { name, image, completed }: any = quiz
  let quizOverlay: JSX.Element | null = null
  let quizClassName = `card | ta-center`
  let quizIcon: JSX.Element | null = null

  if (overlay && overlay !== '') {
    quizOverlay = (
      <div className="card__overlay">
        <p className="card__overlay__content | fz-lg fw-black">{overlay}</p>
      </div>
    )
  }

  if (completed) {
    quizClassName = `card card-success | ta-center`
    quizIcon = (
      <div className="icon icon-success icon-card">
        <FontAwesomeIcon icon={faCheck} className="fa-lg" />
      </div>
    )
  }

  return (
    <button
      type="button"
      className={quizClassName}
      onClick={() => handleClick()}
    >
      <div className="card__image | m-v-b-200">
        {quizOverlay}
        <img src={image} alt="Quiz Screenshot" className="m-v-inline-auto" />
      </div>

      <h2 className="fz-lg ta-center">{name}</h2>

      {quizIcon}
    </button>
  )
}

export default QuizComponent
