import './styles/main.scss'

import React, { Component, ReactElement } from 'react'
// import { Helmet } from 'react-helmet'
import axios from 'axios'

import IAppProps from './interfaces/props/app.props.interface'
import IAppState from './interfaces/states/app.state.interface'
import ApiHelper from './helpers/api.helper'
import HomeView from './views/home.view'
import QuizView from './views/quiz.view'
import CompletedView from './views/completed.view'
import ContactView from './views/contact.view'

class App extends Component<IAppProps> {
  state: IAppState = {
    step: this.props.stepsData.contact,
    subjectsData: [],
  }

  constructor(props: IAppProps) {
    super(props)
  }

  componentDidMount = async () => {
    const response = await axios.get(ApiHelper.subjectsUrl)
    this.setState({
      subjectsData: response.data?.messageTypes?.data,
    })
  }

  setStep = (step: number): void => {
    this.setState({ step })
  }

  setStepToHome = (): void => {
    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.home)
  }

  setStepToQuiz = (): void => {
    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.quiz)
  }

  setStepToCompleted = (): void => {
    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.completed)
  }

  setStepToContact = (): void => {
    const { stepsData }: IAppProps = this.props
    this.setStep(stepsData.contact)
  }

  renderView = (): ReactElement => {
    const { stepsData, completedMessagesData }: IAppProps = this.props
    const { step, subjectsData }: IAppState = this.state

    switch (step) {
      case stepsData.home:
        return <HomeView />

      case stepsData.quiz:
        return <QuizView />

      case stepsData.completed:
        return (
          <CompletedView
            completed={false}
            completedMessagesData={completedMessagesData}
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
    const { step }: IAppState = this.state

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
