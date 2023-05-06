import './styles/main.scss'

import React, { Component, ReactElement } from 'react'
// import { Helmet } from 'react-helmet'
import _ from 'lodash'
import axios from 'axios'

import IAppProps from './interfaces/props/app.props.interface'
import IAppState from './interfaces/states/app.state.interface'
import IQuiz from './interfaces/quiz.interface'

import ApiHelper from './helpers/api.helper'
import PrintHelper from './helpers/print.helper'

import HomeView from './views/home.view'
import QuizView from './views/quiz.view'
import CompletedView from './views/completed.view'
import ContactView from './views/contact.view'
import IQuizInfo from './interfaces/quiz.info.interface'
import CreatorHelper from './helpers/creator.helper'

class App extends Component<IAppProps> {
  state: IAppState = {
    step: this.props.stepsData.quiz,
    subjectsData: [],
    quizzesData: this.props.quizzesData,
    quizIndex: 0,
    quiz: this.props.quizzesData[0],
    shuffledQuiz: this.props.quizzesData[0],
  }

  constructor(props: IAppProps) {
    super(props)
  }

  componentDidMount = async () => {
    PrintHelper.logFunction(`componentDidMount`)

    // const response = await axios.get(ApiHelper.subjectsUrl)
    // this.setState({
    //   subjectsData: response.data?.messageTypes?.data,
    // })
  }

  // #region Getters
  getCorrectedQuizIndex = (quizIndex: number): number => {
    PrintHelper.logFunction(`correctQuizIndex`)

    const { quizzesData }: IAppState = this.state

    let thisQuizIndex: number = quizIndex
    if (thisQuizIndex < 0) {
      thisQuizIndex = 0
    }

    if (thisQuizIndex > quizzesData.length - 1) {
      thisQuizIndex = quizzesData.length - 1
    }

    return thisQuizIndex
  }

  getQuizFromQuizzesData = (quizIndex: number): IQuiz => {
    PrintHelper.logFunction(`getQuizInfoFromQuizzesData`)

    const thisQuizIndex: number = this.getCorrectedQuizIndex(quizIndex)
    const { quizzesData }: IAppState = this.state

    return quizzesData[thisQuizIndex]
  }

  getQuizInfoFromQuizzesData = (quizIndex: number): IQuizInfo => {
    PrintHelper.logFunction(`getQuizInfoFromQuizzesData`)

    const thisQuizIndex: number = this.getCorrectedQuizIndex(quizIndex)
    const { quizzesData }: IAppState = this.state

    return CreatorHelper.quizInfo(thisQuizIndex, quizzesData[thisQuizIndex])
  }

  getCompletedMessage = (): string => {
    PrintHelper.logFunction(`getCompletedMessage`)

    const { completedMessagesData }: IAppProps = this.props
    return completedMessagesData[
      Math.floor(Math.random() * completedMessagesData.length)
    ]
  }

  getCompleted = (): boolean => {
    PrintHelper.logFunction(`getCompleted`)

    const { quizzesData }: IAppState = this.state
    let completedCount = 0
    quizzesData.forEach(function (quiz: IQuiz) {
      if (quiz.completed) {
        completedCount++
      }
    })
    return quizzesData.length === completedCount
  }
  // #endregion

  // #region Setters
  setStep = (step: number): void => {
    PrintHelper.logFunction(`setStep`)

    this.setState({ step })
  }

  setStepToHome = (): void => {
    PrintHelper.logFunction(`setStepToHome`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.home)
  }

  setStepToQuiz = (): void => {
    PrintHelper.logFunction(`setStepToQuiz`)

    const { stepsData }: IAppProps = this.props
    this.setState({ step: stepsData.quiz })
  }

  setStepToCompleted = (): void => {
    PrintHelper.logFunction(`setStepToCompleted`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.completed)
  }

  setStepToContact = (): void => {
    PrintHelper.logFunction(`setStepToContact`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.contact)
  }

  setQuizzesData = (quizzesData: Array<IQuiz>): void => {
    PrintHelper.logFunction(`setQuizzesData`)

    this.setState({ quizzesData })
  }

  setQuizIndex = (quizIndex: number): void => {
    PrintHelper.logFunction(`setQuizIndex`)

    this.setState({ quizIndex })
  }

  setQuiz = (quiz: IQuiz | null): void => {
    PrintHelper.logFunction(`setQuiz`)

    this.setState({ quiz })
  }
  // #endregion

  // #region Handlers
  handleQuizClick = (quizIndex: number): void => {
    PrintHelper.logFunction(`handleQuizClick`)

    const { stepsData }: IAppProps = this.props
    const theQuizIndex: number = this.getCorrectedQuizIndex(quizIndex)
    const quiz: IQuiz = this.getQuizFromQuizzesData(theQuizIndex)
    const shuffledQuiz: IQuiz = { ...quiz }
    shuffledQuiz.options = _.shuffle(quiz.options)

    console.log(quiz, shuffledQuiz)
    this.setState({
      step: stepsData.quiz,
      quizIndex: theQuizIndex,
      quiz,
      shuffledQuiz,
    })
  }

  handleQuizHomeClick = (): void => {
    PrintHelper.logFunction(`handleQuizHomeClick`)
    this.setStepToHome()
  }

  handleQuizContactClick = (): void => {
    PrintHelper.logFunction(`handleQuizContactClick`)
    this.setStepToContact()
  }

  handleQuizSubmit = (): void => {
    PrintHelper.logFunction(`handleQuizSubmit`)
    this.setStepToCompleted
  }

  handleContactHomeClick = (): void => {
    PrintHelper.logFunction(`handleContactHomeClick`)
    this.setStepToHome()
  }

  handleContactResetClick = (): void => {
    PrintHelper.logFunction(`handleContactResetClick`)

    const { stepsData }: IAppProps = this.props
    const { quizzesData }: IAppState = this.state
    quizzesData.forEach(function (quiz: IQuiz, index: number) {
      quizzesData[index].completed = false
    })
    this.setState({
      step: stepsData.home,
      quizzesData,
    })
  }
  // #endregion

  // #region Renderers
  renderView = (): ReactElement => {
    PrintHelper.logFunction(`renderView`)

    const { stepsData, optionsData }: IAppProps = this.props
    const {
      step,
      subjectsData,
      quizzesData,
      quizIndex,
      quiz,
      shuffledQuiz,
    }: IAppState = this.state

    switch (step) {
      case stepsData.home:
        return (
          <HomeView
            quizzesData={quizzesData}
            handleQuizClick={this.handleQuizClick}
          />
        )

      case stepsData.quiz:
        return (
          <QuizView
            quizIndex={quizIndex}
            quiz={quiz}
            shuffledQuiz={shuffledQuiz}
            optionsData={optionsData}
            handleQuizHomeClick={this.handleQuizHomeClick}
            handleQuizContactClick={this.handleQuizContactClick}
            handleQuizSubmit={this.handleQuizSubmit}
          />
        )

      case stepsData.completed:
        const completed: boolean = this.getCompleted()
        const completedMessage: string = this.getCompletedMessage()

        return (
          <CompletedView
            completed={completed}
            completedMessage={completedMessage}
            handleContactHomeClick={this.handleContactHomeClick}
            handleContactResetClick={this.handleContactResetClick}
          />
        )

      case stepsData.contact:
        return (
          <ContactView
            setStepToHome={this.setStepToHome}
            subjectsData={subjectsData}
          />
        )

      default:
        return <h1 className="fw-black fz-xl ta-center">View not found.</h1>
    }
  }

  render() {
    return (
      <>
        <div className="container | d-flex ai-center jc-center gap-v-300 p-v-300">
          <p>Test:</p>
          <button onClick={() => this.setStepToHome()} className="btn">
            Home | 0
          </button>
          <button onClick={() => this.setStepToQuiz()} className="btn">
            Quiz | 1
          </button>
          <button onClick={() => this.setStepToCompleted()} className="btn">
            Completed | 2
          </button>
          <button onClick={() => this.setStepToContact()} className="btn">
            Contact | 2
          </button>
        </div>

        {this.renderView()}
      </>
    )
  }
  // #endregion
}

export default App
