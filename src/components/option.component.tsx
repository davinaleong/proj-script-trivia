import PrintHelper from '../helpers/print.helper'
import IOption from '../interfaces/option.interface'
import IOptionComponentProps from '../interfaces/props/option.component.props'

const OptionComponent = (props: IOptionComponentProps): JSX.Element => {
  const { optionIndex, option, indexToOptionsData }: IOptionComponentProps =
    props
  const { image }: IOption = option
  const letter = indexToOptionsData[optionIndex]

  const handleClick = (): void => {
    const { option }: IOptionComponentProps = props
    const { image }: IOption = option

    PrintHelper.logFunction(`handleClick`)
    props.handleOptionClick(image)
  }

  return (
    <button
      type="button"
      className="card | ta-left"
      onClick={() => handleClick()}
    >
      <h2 className="fw-black fz-xl m-v-b-200">{letter}</h2>

      <div className="card__image">
        <img src={image} alt="Option Screenshot" />
      </div>
    </button>
  )
}

export default OptionComponent
