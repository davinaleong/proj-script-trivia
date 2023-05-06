import IConfigData from '../data/config.data.interface'

interface ICompletedProps {
  configData: IConfigData
  completed: boolean
  completedMessage: string
  handleContactHomeClick: any
  handleContactResetClick: any
}

export default ICompletedProps
