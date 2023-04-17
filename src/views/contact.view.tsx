import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPaperPlane,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons'

export const ContactView = () => {
  function onSubmit() {
    console.log(`Form submitted.`)
  }

  return (
    <div className="body-grid">
      <main className="main container p-v-y-400">
        <h1 className="ff-secondary fz-xl ta-center m-v-b-300">
          Contact Script Trivia
        </h1>
        <p className="ta-center m-v-b-400 fw-bold">
          Facing a technical issue?
          <br />
          Contact us and we will get back to you within 5 working days.
        </p>

        <form method="post" className="form form-flex" onSubmit={onSubmit}>
          <div className="form__group form__group-half form__group-required">
            <label htmlFor="input-first_name" className="form__label">
              Name
            </label>
            <input
              type="text"
              name="first_name"
              id="input-first_name"
              className="form__field"
              required
            />
          </div>

          <div className="form__group form__group-half d-none">
            <label htmlFor="input-last_name" className="form__label">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="input-last_name"
              className="form__field"
            />
          </div>

          <div className="form__group form__group-half form__group-required">
            <label htmlFor="input-email" className="form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="input-email"
              className="form__field"
              required
            />
          </div>

          <div className="form__group form__group-full form__group-required">
            <label htmlFor="input-subject" className="form__label">
              Subject
            </label>
            <select
              name="subject"
              id="input-subject"
              className="form__field"
              required
            >
              <option value="">-- Select --</option>
              <option value="Technical Issues">Technical Issues</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form__group form__group-full form__group-required">
            <label htmlFor="input-message" className="form__label">
              Message
            </label>
            <textarea
              name="message"
              id="input-message"
              className="form__field"
              required
            ></textarea>
          </div>

          <div className="form__group form__group-third form__group">
            <button type="button" className="btn btn-primary">
              Quizzes <FontAwesomeIcon icon={faCode} />
            </button>
          </div>

          <div className="form__group form__group-third form__group">
            <button type="submit" className="btn btn-primary">
              Submit <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>

          <div className="form__group form__group-third form__group">
            <button type="reset" className="btn btn-gray">
              Reset <FontAwesomeIcon icon={faRotateLeft} />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
