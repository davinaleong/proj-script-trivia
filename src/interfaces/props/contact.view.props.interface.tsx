import IConfigData from '../data/config.data.interface'
import ISubject from '../subject.interface'

interface IContactViewProps {
  configData: IConfigData
  setStepToHome: any
  subjectsData: Array<ISubject>
}

export default IContactViewProps
