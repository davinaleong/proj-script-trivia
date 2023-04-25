import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faCode,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons'
import ICompletedProps from '../interfaces/props/completed.view.props.interface'
import PrintHelper from '../helpers/print.helper'

function CompletedView(props: ICompletedProps) {
  const { completed, completedMessage }: ICompletedProps = props

  const handleHomeClick = (): void => {
    PrintHelper.logFunction(`handleHomeClick`)
    props.handleContactHomeClick()
  }

  const handleResetClick = (): void => {
    PrintHelper.logFunction(`handleResetClick`)
    props.handleContactResetClick()
  }

  let subView: ReactElement = (
    <p className="fw-bold m-v-b-400">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handleHomeClick()}
      >
        Try another quiz <FontAwesomeIcon icon={faCode} />
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
