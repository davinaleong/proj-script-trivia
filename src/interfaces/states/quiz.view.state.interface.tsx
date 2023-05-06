interface IQuizViewState {
  showHelpModal: boolean
  showOptionsModal: boolean
  showImageModal: boolean
  imageModalImage: string
  selectedAnswer: string
  answerA: string
  answerB: string
  answerC: string
  answerD: string
  errors: Array<string>
}

export default IQuizViewState
