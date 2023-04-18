import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPaperPlane,
  faRotateLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IMessageType from '../interfaces/message-type.interface'

const messageTypesUrl = `${process.env.API_URL}misc/messageTypes/${process.env.APP_SLUG}`
const messageUrl = `${process.env.API_URL}misc/messages/${process.env.APP_SLUG}`

export const ContactView = () => {
  const [messageTypes, setMessageTypes] = useState<Array<IMessageType>>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(function () {
    async function fetchData() {
      const response = await axios.get(messageTypesUrl)
      setMessageTypes(response.data?.messageTypes?.data)
      setLoading(false)
    }

    fetchData()
  }, [])

  let formFields: any = (
    <div className="form__group form__group-full">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fz-xl" />
    </div>
  )

  if (loading) {
    formFields = (
      <>
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
            {messageTypes.map(function (messageType, index) {
              return (
                <option key={`mt${index}`} value={messageType.value}>
                  {messageType.title}
                </option>
              )
            })}
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
          <button type="button" className="btn">
            Quizzes <FontAwesomeIcon icon={faCode} />
          </button>
        </div>

        <div className="form__group form__group-third form__group">
          <button type="submit" className="btn btn-primary">
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

        <div className="form__group form__group-third form__group">
          <button type="reset" className="btn">
            Reset <FontAwesomeIcon icon={faRotateLeft} />
          </button>
        </div>
      </>
    )
  }

  async function handleSubmit(event) {
    // TODO: Submit message to CMS.
    console.log(`Form submitted.`)

    setLoading(true)

    const form = event.target
    const formData = new FormData(form)

    const response = await fetch(messageUrl, {
      method: form.method,
      body: formData,
    })
    const data = await response.json()
    console.log(data)

    /*
    export default function MyForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

    */
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

        <form method="post" className="form form-flex" onSubmit={handleSubmit}>
          {formFields}
        </form>
      </main>
    </div>
  )
}
