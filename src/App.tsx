import './styles/main.scss'

import React, { Component, ReactElement } from 'react'
// import { Helmet } from 'react-helmet'
import axios from 'axios'

import IAppProps from './interfaces/props/app.props.interface'
import IAppState from './interfaces/states/app.state.interface'
import IQuiz from './interfaces/quiz.interface'

import ApiHelper from './helpers/api.helper'

import HomeView from './views/home.view'
import QuizView from './views/quiz.view'
import CompletedView from './views/completed.view'
import ContactView from './views/contact.view'
import IQuizInfo from './interfaces/quiz.info.interface'
import CreatorHelper from './helpers/creator.helper'

class App extends Component<IAppProps> {
  state: IAppState = {
    step: this.props.stepsData.completed,
    subjectsData: [],
    quizzesData: this.props.quizzesData,
    quizIndex: 0,
    quiz: this.props.quizzesData[0],
  }

  constructor(props: IAppProps) {
    super(props)
  }

  componentDidMount = async () => {
    console.log(`fn: componentDidMount`)

    const response = await axios.get(ApiHelper.subjectsUrl)
    this.setState({
      subjectsData: response.data?.messageTypes?.data,
    })
  }

  getQuizInfoFromQuizzesData = (quizIndex: number): IQuizInfo => {
    console.log(`fn: getQuizInfoFromQuizzesData`)

    const thisQuizIndex: number = this.correntQuizIndex(quizIndex)
    const { quizzesData }: IAppState = this.state
    return CreatorHelper.quizInfo(thisQuizIndex, quizzesData[thisQuizIndex])
  }

  getCompletedMessage = (): string => {
    console.log(`fn: getCompletedMessage`)

    const { completedMessagesData }: IAppProps = this.props
    return completedMessagesData[
      Math.floor(Math.random() * completedMessagesData.length)
    ]
  }

  getCompleted = (): boolean => {
    console.log(`fn: getCompleted`)

    const { quizzesData }: IAppState = this.state
    let completedCount = 0
    quizzesData.forEach(function (quiz: IQuiz) {
      if (quiz.completed) {
        completedCount++
      }
    })
    return quizzesData.length === completedCount
  }

  correntQuizIndex = (quizIndex: number): number => {
    console.log(`fn: correntQuizIndex`)

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

  setStep = (step: number): void => {
    console.log(`fn: setStep`)

    this.setState({ step })
  }

  setStepToHome = (): void => {
    console.log(`fn: setStepToHome`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.home)
  }

  setStepToQuiz = (): void => {
    console.log(`fn: setStepToQuiz`)

    const { stepsData }: IAppProps = this.props
    this.setState({ step: stepsData.quiz })
  }

  setStepToCompleted = (): void => {
    console.log(`fn: setStepToCompleted`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.completed)
  }

  setStepToContact = (): void => {
    console.log(`fn: setStepToContact`)

    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.contact)
  }

  setQuizzesData = (quizzesData: Array<IQuiz>): void => {
    console.log(`fn: setQuizzesData`)

    this.setState({ quizzesData })
  }

  setQuizIndex = (quizIndex: number): void => {
    console.log(`fn: setQuizIndex`)

    this.setState({ quizIndex })
  }

  setQuiz = (quiz: IQuiz | null): void => {
    console.log(`fn: setQuiz`)

    this.setState({ quiz })
  }

  handleQuizClick = (quizIndex: number): void => {
    console.log(`fn: handleQuizClick`)

    const { stepsData }: IAppProps = this.props
    const quizInfo: IQuizInfo = this.getQuizInfoFromQuizzesData(quizIndex)
    this.setState({
      step: stepsData.quiz,
      quizIndex: quizInfo.index,
      quiz: quizInfo.quiz,
    })
  }

  handleContactHomeClick = (): void => {
    console.log(`fn: handleContactHomeClick`)
    this.setStepToHome()
  }

  handleContactResetClick = (): void => {
    console.log(`fn: handleContactResetClick`)

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

  renderView = (): ReactElement => {
    const { stepsData }: IAppProps = this.props
    const { step, subjectsData, quizzesData }: IAppState = this.state

    switch (step) {
      case stepsData.home:
        return (
          <HomeView
            quizzesData={quizzesData}
            handleQuizClick={this.handleQuizClick}
          />
        )

      case stepsData.quiz:
        return <QuizView />

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
}

export default App
