import { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faQuestion,
  faCheck,
  faComputerMouse,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import IQuizViewProps from '../interfaces/props/quiz.view.props.interface'
import IQuizViewState from '../interfaces/states/quiz.view.state.interface'
import IOption from '../interfaces/option.interface'
// import ArrayHelper from '../helpers/array.helper'
import PrintHelper from '../helpers/print.helper'
import AlertComponent from '../components/alert.component'

class QuizView extends Component<IQuizViewProps> {
  state: IQuizViewState = {
    showHelpModal: false,
    showImageModal: false,
    showOptionsModal: false,
    imageModalImage: '',
    selectedOption: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    errors: ['Error 1', 'Error 2'],
  }

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

  handleHomeClick = (): void => {
    PrintHelper.logFunction(`handleHomeClick`)
    this.props.handleQuizHomeClick()
  }

  handleOptionClick = (optionLetter: string): void => {
    PrintHelper.logFunctionWithParams(
      `handleOptionClick`,
      `optionLetter: ${optionLetter}`
    )
  }

  handleContactClick = (): void => {
    PrintHelper.logFunction(`handleContactClick`)
    this.props.handleQuizContactClick()
  }

  renderAlert = (): JSX.Element => {
    const { errors }: IQuizViewState = this.state
    return <AlertComponent className="alert-danger" errors={errors} />
  }

  render() {
    const { quiz }: IQuizViewProps = this.props
    const { name, options }: any = quiz
    const shuffledOptions = _.shuffle(options)
    console.log(options, shuffledOptions)

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

              <div className="cards-grid | m-v-b-400">
                {shuffledOptions.map(({ image }: IOption, index: number) => {
                  let letter = ``
                  switch (index) {
                    case 0:
                      letter = `A`
                      break

                    case 1:
                      letter = `B`
                      break

                    case 2:
                      letter = `C`
                      break

                    case 3:
                      letter = `D`
                      break
                  }

                  return (
                    <button
                      key={`o${index}`}
                      type="button"
                      className="card | ta-left"
                      onClick={() => this.handleOptionClick(letter)}
                    >
                      <h2 className="fw-black fz-xl m-v-b-200">{letter}</h2>

                      <div className="card__image">
                        <img src={image} alt="Option Screenshot" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </main>
          <aside className="quiz__aside bg-gray-100 p-v-300">
            <div className="answers-grid">
              <div className="answer | ta-center">
                <h3 className="fw-black fz-lg">HTML</h3>

                <div className="d-flex al-center jc-center gap-v-400">
                  <button
                    type="button"
                    className="btn btn-icon"
                    data-element="btn-answer"
                  >
                    <p className="btn-icon__label">Answers</p>
                    <FontAwesomeIcon icon={faComputerMouse} />
                  </button>
                </div>
              </div>

              <div className="answer | ta-center">
                <h3 className="fw-black fz-lg">CSS</h3>

                <div className="d-flex al-center jc-center gap-v-400">
                  <button
                    type="button"
                    className="btn btn-icon"
                    data-element="btn-answer"
                  >
                    <p className="btn-icon__label">Answers</p>
                    <FontAwesomeIcon icon={faComputerMouse} />
                  </button>
                </div>
              </div>

              <div className="answer | ta-center">
                <h3 className="fw-black fz-lg">JS</h3>

                <div className="d-flex al-center jc-center gap-v-400">
                  <button
                    type="button"
                    className="btn btn-icon"
                    data-element="btn-answer"
                  >
                    <p className="btn-icon__label">Answers</p>
                    <FontAwesomeIcon icon={faComputerMouse} />
                  </button>
                </div>
              </div>

              <div className="answer | ta-center">
                <h3 className="fw-black fz-lg">PHP</h3>

                <div className="d-flex al-center jc-center gap-v-400">
                  <button
                    type="button"
                    className="btn btn-icon"
                    data-element="btn-answer"
                  >
                    <p className="btn-icon__label">Answers</p>
                    <FontAwesomeIcon icon={faComputerMouse} />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div
          className="modal"
          data-element="help-modal"
          data-active={this.getShowHelpModalString}
        >
          <button
            type="button"
            className="btn btn-danger btn-icon btn-fixed btn-top btn-right shadow-v-br-300"
            onClick={() => this.setShowHelpModal(false)}
          >
            <p className="btn-icon__label">Close Popup</p>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="container | br-v-300 bg-primary-200 p-v-400 shadow-v-br-300">
            <h2 className="ff-secondary fz-xl ta-center m-v-b-300">
              Quiz Guide
            </h2>

            <ol className="p-v-l-400 m-v-b-500">
              <li>
                Tap/click on the answer button next to the option. This will
                show an options popup.
              </li>
              <li>Tap/click on the option to choose it as the answer.</li>
            </ol>

            <h3 className="fw-bold fz-md m-v-b-300">Notes:</h3>

            <ul className="p-v-l-400">
              <li>Answers are unique&ndash;means no duplicate answers.</li>
              <li>
                Do <a href="./contact.html">contact us</a> if you face any
                technical issues.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="modal"
          data-element="options-modal"
          data-active={this.getShowOptionsModalString}
        >
          <button
            type="button"
            className="btn btn-danger btn-icon btn-fixed btn-top btn-right shadow-v-br-300"
            data-element="btn-close-modal"
          >
            <p className="btn-icon__label">Close Popup</p>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="container | br-v-300 bg-gray-50 p-v-400 shadow-v-br-300">
            <h2 className="fz-xl fw-black ta-center m-v-b-400">Pick Options</h2>

            <div className="d-flex al-center jc-center gap-v-400">
              <button type="button" className="btn fz-lg fw-black">
                A
              </button>

              <button type="button" className="btn fz-lg fw-black">
                B
              </button>

              <button type="button" className="btn fz-lg fw-black">
                C
              </button>

              <button type="button" className="btn fz-lg fw-black">
                D
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal"
          data-element="image-modal"
          data-active={this.getShowImageModalString}
        >
          <button
            type="button"
            className="btn btn-danger btn-icon btn-fixed btn-top btn-right shadow-v-br-300"
            data-element="btn-close-modal"
          >
            <p className="btn-icon__label">Close Popup</p>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="container">
            <img
              src=""
              alt=""
              className="modal__image | m-v-inline-auto shadow-v-br-300"
              data-element="image-modal-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QuizView
