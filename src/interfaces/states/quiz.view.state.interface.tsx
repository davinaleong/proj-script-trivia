interface IQuizViewState {
  showHelpModal: boolean
  showOptionsModal: boolean
  showImageModal: boolean
  imageModalImage: string
  answerIndex: number
  answers: Array<string>
  errors: Array<string>
}

export default IQuizViewState
