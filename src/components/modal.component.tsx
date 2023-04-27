import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import IModalComponentProps from '../interfaces/props/modal.component.props'

const ModalComponent = (props: IModalComponentProps): JSX.Element => {
  const { active, children }: IModalComponentProps = props

  if (active) {
    return (
      <div className="modal" data-active="true">
        <button
          type="button"
          className="btn btn-danger btn-icon btn-fixed btn-top btn-right shadow-v-br-300"
          onClick={() => {}}
        >
          <p className="btn-icon__label">Close Popup</p>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {children}
      </div>
    )
  }

  return <></>
}

export default ModalComponent
