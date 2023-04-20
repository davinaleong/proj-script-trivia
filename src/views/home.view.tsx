import QuizComponent from '../components/quiz.component'
import IHomeViewProps from '../interfaces/props/home.view.interface'
import IQuiz from '../interfaces/quiz.interface'

function HomeView({ quizzesData, handleQuizClick }: IHomeViewProps) {
  return (
    <div>
      <main className="main container | p-v-y-400">
        <header className="ta-center m-v-b-500">
          <h1 className="fz-xl fw-black">Script Trivia</h1>
          <p className="fz-lg">Pick your quiz!</p>
        </header>
        <div className="cards-grid">
          {quizzesData.map(function (quiz: IQuiz, index: number) {
            return (
              <QuizComponent
                key={`q${index}`}
                index={index}
                quiz={quiz}
                overlay={quiz.completed ? 'DONE' : null}
                handleQuizClick={handleQuizClick}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default HomeView
