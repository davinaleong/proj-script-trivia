import ISubject from '../subject.interface'

interface IContactViewState {
  loading: boolean
  subjects: Array<ISubject>
}

export default IContactViewState
