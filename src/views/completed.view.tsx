import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import ICompletedProps from '../interfaces/props/completed.view.props.interface'

function CompletedView({
  completed,
  completedMessagesData,
  handleTryAnotherQuizClick,
  handleResetQuizClick,
}: ICompletedProps) {
  const handleHomeClick = () => {
    handleTryAnotherQuizClick
  }

  const handleResetClick = () => {
    handleResetQuizClick
  }

  let subView: ReactElement = (
    <p className="fw-bold m-v-b-400">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handleHomeClick()}
      >
        Try another quiz <FontAwesomeIcon icon={faRotateLeft} />
      </button>
    </p>
  )
  if (completed) {
    subView = (
      <>
        <p className="fw-bold m-v-b-400">You have completed all quizzes.</p>

        <p className="fw-bold m-v-b-400">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleResetClick()}
          >
            Reset quizzes <FontAwesomeIcon icon={faRotateLeft} />
          </button>
        </p>
      </>
    )
  }

  const completedMessage: string =
    completedMessagesData[
      Math.floor(Math.random() * completedMessagesData.length)
    ]

  return (
    <div className="body-grid viewport-height bg-success-100">
      <main className="container main | ta-center p-v-y-400">
        <div className="icon icon-success icon-finished m-v-inline-auto m-v-b-200">
          <FontAwesomeIcon icon={faCheck} />
        </div>

        <h1 className="fz-xl fw-bold m-v-b-300 text-success-800 ta-center">
          {completedMessage}
        </h1>

        {subView}
      </main>
    </div>
  )
}

export default CompletedView
