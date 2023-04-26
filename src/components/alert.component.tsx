import IAlertComponentProps from '../interfaces/props/alert.component.props'

const AlertComponent = ({
  className,
  fixed,
  errors,
}: IAlertComponentProps): JSX.Element => {
  const fixedClassName = fixed ? 'alert-fixed' : ''
  return (
    <div className={`alert ${className} ${fixedClassName} m-v-b-400`}>
      <ul className="m-v-l-400">
        {errors.map(function (error: string, index: number): JSX.Element {
          return <li key={`a${index}`}>{error}</li>
        })}
      </ul>
    </div>
  )
}

export default AlertComponent
