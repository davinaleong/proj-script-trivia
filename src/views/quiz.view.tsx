import { Component, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faQuestion,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

import IQuizViewProps from '../interfaces/props/quiz.view.props.interface'
import IQuizViewState from '../interfaces/states/quiz.view.state.interface'
import IOption from '../interfaces/option.interface'
import PrintHelper from '../helpers/print.helper'
import AlertComponent from '../components/alert.component'
import OptionComponent from '../components/option.component'
import ModalComponent from '../components/modal.component'
import AnswerComponent from '../components/answer.component'

class QuizView extends Component<IQuizViewProps> {
  state: IQuizViewState = {
    showHelpModal: false,
    showOptionsModal: false,
    showImageModal: false,
    imageModalImage: '',
    selectedAnswer: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
    errors: [],
  }

  // #region Getters
  getBooleanString = (boolean: boolean): string => {
    PrintHelper.logFunctionWithParams(`getBooleanString`, `boolean: ${boolean}`)
    return boolean ? 'true' : 'false'
  }

  getShowHelpModalString = (): string => {
    PrintHelper.logFunction(`getShowHelpModalString`)
    const { showHelpModal }: IQuizViewState = this.state
    return this.getBooleanString(showHelpModal)
  }

  getShowOptionsModalString = (): string => {
    PrintHelper.logFunction(`getShowOptionsModalString`)
    const { showOptionsModal }: IQuizViewState = this.state
    return this.getBooleanString(showOptionsModal)
  }

  getShowImageModalString = (): string => {
    PrintHelper.logFunction(`getShowImageModalString`)
    const { showImageModal }: IQuizViewState = this.state
    return this.getBooleanString(showImageModal)
  }
  // #endregion

  // #region State Setters
  showHelpModal = () => {
    PrintHelper.logFunction(`showHelpModal`)
    this.setState({
      showHelpModal: true,
    })
  }

  showOptionsModal = () => {
    PrintHelper.logFunction(`showOptionsModal`)
    this.setState({
      showOptionsModal: true,
    })
  }

  hideHelpModal = () => {
    PrintHelper.logFunction(`hideHelpModal`)
    this.setState({
      showHelpModal: false,
    })
  }

  hideOptionsModal = () => {
    PrintHelper.logFunction(`hideOptionsModal`)
    this.setState({
      showOptionsModal: false,
    })
  }

  setShowHelpModal = (showHelpModal: boolean) => {
    PrintHelper.logFunctionWithParams(
      `setShowHelpModal`,
      `showHelpModal: ${showHelpModal}`
    )
    this.setState({
      showHelpModal,
    })
  }

  setShowImageModal = (imageModalImage: any, showImageModal: boolean) => {
    PrintHelper.logFunctionWithParams(
      `setShowHelpModal`,
      `showImageModal: ${showImageModal}`
    )
    this.setState({
      imageModalImage,
      showImageModal,
    })
  }
  // #endregion

  // #region Handlers
  handleHomeClick = (): void => {
    PrintHelper.logFunction(`handleHomeClick`)
    this.props.handleQuizHomeClick()
  }

  handleOptionClick = (imageModalImage: any): void => {
    PrintHelper.logFunction(`handleOptionClick`)
    this.setState({
      imageModalImage: imageModalImage,
    })
  }

  handleAnswerClick = (optionLetter: string): void => {
    PrintHelper.logFunctionWithParams(
      `handleOptionClick`,
      `optionLetter: ${optionLetter}`
    )
    this.setState({
      selectedAnswer: optionLetter,
      showOptionsModal: true,
    })
  }

  handleContactClick = (): void => {
    PrintHelper.logFunction(`handleContactClick`)
    this.props.handleQuizContactClick()
  }

  handleHelpModalCloseClick = (): void => {
    PrintHelper.logFunction(`handleHelpModalCloseClick`)
    this.setState({
      showHelpModal: false,
    })
  }

  handleHelpModalContactClick = (): void => {
    PrintHelper.logFunction(`handleHelpModalContactClick`)
    this.props.handleQuizContactClick()
  }

  handleOptionsModalCloseClick = (): void => {
    PrintHelper.logFunction(`handleOptionsModalCloseClick`)
    this.setState({
      showOptionsModal: false,
    })
  }

  handleOptionsModalOptionClick = ({ key }: IOption): void => {
    PrintHelper.logFunctionWithParams(
      `handleOptionsModalOptionClick`,
      `key: ${key}`
    )
    const { optionLettersData }: IQuizViewProps = this.props
    const { selectedAnswer }: IQuizViewState = this.state

    switch (selectedAnswer) {
      case optionLettersData.a:
        this.setState({
          answerA: key,
          showOptionsModal: false,
        })
        break

      case optionLettersData.b:
        this.setState({
          answerB: key,
          showOptionsModal: false,
        })
        break

      case optionLettersData.c:
        this.setState({
          answerC: key,
          showOptionsModal: false,
        })
        break

      case optionLettersData.d:
        this.setState({
          answerD: key,
          showOptionsModal: false,
        })
        break
    }
  }

  handleImageModalCloseClick = (): void => {
    PrintHelper.logFunction(`handleImageModalCloseClick`)
    this.setState({
      imageModalImage: null,
    })
  }
  // #endregion

  // #region Renderers
  renderAlert = (): JSX.Element => {
    PrintHelper.logFunction(`renderAlert`)
    const { errors }: IQuizViewState = this.state

    if (errors.length <= 0) {
      return <></>
    }

    return <AlertComponent className="alert-danger" errors={errors} />
  }

  renderAnswersGrid = (): JSX.Element => {
    PrintHelper.logFunction(`renderAnswersGrid`)
    const { indexToOptionsData, quiz }: IQuizViewProps = this.props

    return (
      <div className="answers-grid">
        {quiz?.options.map((answer: IOption, index: number) => (
          <AnswerComponent
            key={`a${index}`}
            answerIndex={index}
            answer={answer}
            indexToOptionsData={indexToOptionsData}
            handleAnswerClick={this.handleAnswerClick}
          />
        ))}
      </div>
    )
  }

  renderOptionsGrid = (): JSX.Element => {
    PrintHelper.logFunction(`renderOptionsGrid`)

    const { shuffledQuiz, indexToOptionsData }: IQuizViewProps = this.props
    const { options }: any = shuffledQuiz
    const optionsJsx: Array<ReactNode> = []

    options.map((option: IOption, index: number): void => {
      optionsJsx.push(
        <OptionComponent
          key={`o${index}`}
          optionIndex={index}
          option={option}
          indexToOptionsData={indexToOptionsData}
          handleOptionClick={this.handleOptionClick}
        />
      )
    })

    return <div className="cards-grid | m-v-b-400">{optionsJsx}</div>
  }

  renderHelpModal = (): JSX.Element => {
    PrintHelper.logFunction(`renderHelpModal`)
    const { showHelpModal }: IQuizViewState = this.state

    if (showHelpModal) {
      return (
        <ModalComponent
          active={showHelpModal}
          handleModalCloseClick={this.handleHelpModalCloseClick}
        >
          <div className="container | br-v-300 bg-primary-200 p-v-400 shadow-v-br-300">
            <h2 className="ff-secondary fz-xl ta-center m-v-b-300">
              Quiz Guide
            </h2>

            <ol className="p-v-l-400 m-v-b-500">
              <li>
                Tap/click on the answer button next to the option on the left
                pane.
                <br />
                This will show an options popup.
              </li>
              <li>Tap/click on the option to choose it as the answer.</li>
            </ol>

            <h3 className="fw-bold fz-md m-v-b-300">Notes:</h3>

            <ul className="p-v-l-400">
              <li>Answers are unique&ndash;means no duplicated answers.</li>
              <li>
                Do{' '}
                <button
                  type="button"
                  className="btn btn-link btn-link-primary"
                  onClick={this.handleHelpModalContactClick}
                >
                  contact us
                </button>{' '}
                if you face any technical issues.
              </li>
            </ul>
          </div>
        </ModalComponent>
      )
    }

    return <></>
  }

  renderOptionsModal = (): JSX.Element => {
    PrintHelper.logFunction(`renderOptionsModal`)
    const { shuffledQuiz, indexToOptionsData }: IQuizViewProps = this.props
    const { showOptionsModal }: IQuizViewState = this.state

    if (showOptionsModal) {
      return (
        <ModalComponent
          active={showOptionsModal}
          handleModalCloseClick={this.hideOptionsModal}
        >
          <div className="container | br-v-300 bg-gray-50 p-v-400 shadow-v-br-300">
            <h2 className="fz-xl fw-black ta-center m-v-b-400">Pick Options</h2>

            <div className="d-flex al-center jc-center gap-v-400">
              {shuffledQuiz?.options.map((option: IOption, index: number) => {
                const letter = indexToOptionsData[index]
                return (
                  <button
                    key={`mo${index}`}
                    type="button"
                    className="btn fz-lg fw-black"
                    onClick={() => this.handleOptionsModalOptionClick(option)}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </ModalComponent>
      )
    }

    return <></>
  }

  renderImageModal = (): JSX.Element => {
    PrintHelper.logFunction(`renderImageModal`)

    const { imageModalImage }: IQuizViewState = this.state

    if (imageModalImage) {
      return (
        <ModalComponent
          active={imageModalImage !== null}
          handleModalCloseClick={this.handleImageModalCloseClick}
        >
          <div className="container">
            <img
              src={imageModalImage}
              alt=""
              className="modal__image | m-v-inline-auto shadow-v-br-300"
              data-element="image-modal-img"
            />
          </div>
        </ModalComponent>
      )
    }

    return <></>
  }

  render() {
    const { quiz }: IQuizViewProps = this.props
    const { name }: any = quiz

    return (
      <div className="body body-quiz">
        <button
          type="button"
          className="btn btn-icon btn-fixed btn-top btn-left shadow-v-br-300"
          onClick={() => this.handleHomeClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <p className="btn-icon__label">Back</p>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-icon btn-fixed btn-top btn-right shadow-v-br-300"
          data-element="btn-help"
          onClick={() => this.setShowHelpModal(true)}
        >
          <p className="btn-icon__label">Help</p>
          <FontAwesomeIcon icon={faQuestion} />
        </button>
        <div className="quiz">
          <main className="quiz__main main p-v-300">
            <button
              type="button"
              className="btn btn-primary btn-icon btn-absolute btn-bottom btn-right shadow-v-br-300"
            >
              <p className="btn-icon__label">Submit</p>
              <FontAwesomeIcon icon={faCheck} />
            </button>

            <div className="container">
              <h1 className="ff-secondary fz-xl ta-center m-v-b-400">{name}</h1>

              {this.renderAlert()}

              {this.renderOptionsGrid()}
            </div>
          </main>
          <aside className="quiz__aside bg-gray-100 p-v-300">
            {this.renderAnswersGrid()}
          </aside>
        </div>

        {this.renderHelpModal()}
        {this.renderOptionsModal()}
        {this.renderImageModal()}
      </div>
    )
  }
  // #endregion
}

export default QuizView
