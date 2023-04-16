import './styles/main.scss'

import { ReactElement, useState } from 'react'
// import { Helmet } from 'react-helmet'

import IApp from './interfaces/app.interface'
import CompletedMessagesData from './data/completed-messages.data'
import { HomeView } from './views/home.view'
import { QuizView } from './views/quiz.view'
import { CompletedView } from './views/completed.view'
import { ContactView } from './views/contact.view'
// import ImageLogo from './assets/images/logo-blue-svg.svg'

export const App = ({ stepsData }: IApp) => {
  const [step, setStep] = useState<number>(stepsData.completed)
  // const [step, setStep] = useState<number>(stepsData.home)
  // const [quiz, setQuiz] = useState(null)

  let view: ReactElement | null = null
  switch (step) {
    case stepsData.home:
      view = <HomeView />
      break

    case stepsData.quiz:
      view = <QuizView />
      break

    case stepsData.completed:
      view = (
        <CompletedView
          completed={false}
          completedMessagesData={CompletedMessagesData}
        />
      )
      break

    case stepsData.contact:
      view = <ContactView />
      break
  }

  return (
    <>
      <div className="container | d-flex ai-center jc-center gap-v-300 p-v-300">
        <p>Test:</p>
        <button onClick={() => setStep(stepsData.home)} className="btn">
          Home | 0
        </button>
        <button onClick={() => setStep(stepsData.quiz)} className="btn">
          Quiz | 1
        </button>
        <button onClick={() => setStep(stepsData.completed)} className="btn">
          Completed | 2
        </button>
        <button onClick={() => setStep(stepsData.contact)} className="btn">
          Contact | 2
        </button>
      </div>
      {view}
    </>
  )
}
