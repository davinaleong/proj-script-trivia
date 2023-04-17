import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPaperPlane,
  faRotateLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const ContactView = () => {
  const [messageTypes, setMessageTypes] = useState<Array<any>>([])

  let formFields: any = (
    <div className="form__group form__group-full">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fz-xl" />
    </div>
  )

  /*
  const Component = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return <>...</>
}

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
  */

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `${process.env.API_URL}misc/messageTypes/${process.env.APP_SLUG}`
      )
      const data = await response.json()

      console.log(data)
      setMessageTypes(data.messageTypes?.data)
    }

    fetchData()
  }, [])

  if (messageTypes.length < 0) {
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
      </>
    )
  }

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
          {formFields}
        </form>
      </main>
    </div>
  )
}
