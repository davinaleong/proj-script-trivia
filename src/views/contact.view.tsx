import React, { Component } from 'react'
// import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faPaperPlane,
  faRotateLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons'

import IContactViewProps from '../interfaces/props/contact.view.props.interface'
import IContactViewState from '../interfaces/states/contact.view.state.interface'

// const messageUrl = `${process.env.API_URL}misc/messages/${process.env.APP_SLUG}`

class ContactView extends Component<IContactViewProps> {
  state: IContactViewState = {
    loading: false,
  }

  handleSubmit(): void {
    console.log(`Submitting contact form.`)
  }

  renderFormFields(): JSX.Element {
    const { loading }: IContactViewState = this.state

    if (loading) {
      return (
        <div className="form__group form__group-full">
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fz-xl" />
        </div>
      )
    }

    return (
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
            {this.renderSubjectOptions()}
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
          <button
            type="button"
            className="btn"
            onClick={this.props.setStepToHome}
          >
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

  renderSubjectOptions(): Array<JSX.Element> {
    const { subjectsData }: IContactViewProps = this.props
    const subjectsJsx: Array<JSX.Element> = []

    subjectsData.map(function (subject, index) {
      subjectsJsx.push(
        <option key={`s${index}`} value={subject.value}>
          {subject.title}
        </option>
      )
    })

    return subjectsJsx
  }

  render() {
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

          <form
            method="post"
            className="form form-flex"
            onSubmit={this.handleSubmit}
          >
            {this.renderFormFields()}
          </form>
        </main>
      </div>
    )
  }
}

export default ContactView
