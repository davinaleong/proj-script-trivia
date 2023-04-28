interface IQuizViewState {
  showHelpModal: boolean
  showOptionsModal: boolean
  showImageModal: boolean
  imageModalImage: string
  selectedOption: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  errors: Array<string>
}

export default IQuizViewState
