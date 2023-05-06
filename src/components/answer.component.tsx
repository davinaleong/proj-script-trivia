import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import PrintHelper from '../helpers/print.helper'
import IOption from '../interfaces/option.interface'
import IAnswerComponentProps from '../interfaces/props/answer.component.props'

const AnswerComponent = (props: IAnswerComponentProps): JSX.Element => {
  const { answerIndex, answer, indexToOptionsData }: IAnswerComponentProps =
    props
  const { name }: IOption = answer

  const handleClick = (): void => {
    PrintHelper.logFunction(`handleClick`)
    props.handleAnswerClick(indexToOptionsData[answerIndex])
  }

  return (
    <div className="answer | ta-center">
      <h3 className="fw-black fz-lg">{name}</h3>

      <div className="d-flex al-center jc-center gap-v-400">
        <button type="button" className="btn btn-icon" onClick={handleClick}>
          <p className="btn-icon__label">Answers</p>
          <FontAwesomeIcon icon={faComputerMouse} />
        </button>
      </div>
    </div>
  )
}

export default AnswerComponent
