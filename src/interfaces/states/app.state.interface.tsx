import ISubject from '../subject.interface'

interface IAppState {
  step: number
  subjectsData: Array<ISubject>
}

export default IAppState
