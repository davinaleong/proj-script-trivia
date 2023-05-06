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
import ApiHelper from '../helpers/api.helper'
import axios from 'axios'
import StatusesData from '../data/statuses.data'
import ErrorsData from '../data/errors.data'
import PrintHelper from '../helpers/print.helper'

class ContactView extends Component<IContactViewProps> {
  state: IContactViewState = {
    loading: false,
    success: false,
    errors: ErrorsData,
  }

  // #region Handlers
  handleSubmit = async (event) => {
    PrintHelper.logFunction(`handleSubmit`)

    event.preventDefault()

    this.setState({
      loading: true,
      success: false,
      errors: [],
    })

    const form = event.target
    const formData = new FormData(form)
    const formDataJson: any = {}
    formData.forEach(function (value, key) {
      formDataJson[key] = value

      if (key === 'subject') {
        formDataJson[key] = Number(value)
      }
    })
    formDataJson['last_name'] = ``

    axios
      .post(ApiHelper.messagesUrl, formDataJson)
      .then((response) => {
        if (response.data && response.data.status === StatusesData.success) {
          this.setState({
            loading: false,
            success: true,
            errors: ErrorsData,
          })
        }
      })
      .catch((errors) => {
        this.setState({
          loading: false,
          success: false,
          errors: errors.response.data.errors,
        })
      })
  }
  // #endregion

  // #region Renderers
  renderSuccessAlert(): JSX.Element {
    const { success }: IContactViewState = this.state

    if (success) {
      return (
        <div className="alert alert-success shadow-v-br-300 m-v-b-400">
          <p>Thank you for your message.</p>
          <p>We will get back to you within 5 business days.</p>
        </div>
      )
    }

    return <></>
  }

  renderDangerAlert(): JSX.Element {
    const { errors }: IContactViewState = this.state

    const errorKeys = Object.keys(errors)
    const errorsJsx: Array<JSX.Element> = []

    errorKeys.forEach(function (errorKey, keyIndex: number) {
      errors[errorKey].forEach(function (error: string, index: number) {
        if (errorKey === 'first_name') {
          errorsJsx.push(
            <li key={`e${keyIndex}${index}`}>
              {error.replace('first name', 'name')}
            </li>
          )
        } else {
          errorsJsx.push(<li key={`e${keyIndex}${index}`}>{error}</li>)
        }
      })
    })

    if (errorsJsx.length > 0) {
      return (
        <div className="alert alert-danger shadow-v-br-300 m-v-b-400">
          <ul className="m-v-l-400">{errorsJsx}</ul>
        </div>
      )
    }

    return <></>
  }

  renderFormFields(): JSX.Element {
    const { loading, errors }: IContactViewState = this.state

    if (loading) {
      return (
        <div className="form__group form__group-full">
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fz-xl" />
        </div>
      )
    }

    const hasSubjectError: string =
      errors.subject && errors.subject.length > 0 ? 'true' : 'false'
    const hasFirstNameError: string =
      errors.first_name && errors.first_name.length > 0 ? 'true' : 'false'
    const hasEmailError: string =
      errors.email && errors.email.length > 0 ? 'true' : 'false'
    const hasMessageError: string =
      errors.message && errors.message.length > 0 ? 'true' : 'false'

    return (
      <>
        <div
          className="form__group form__group-half form__group-required"
          data-error={hasFirstNameError}
        >
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

        <div
          className="form__group form__group-half form__group-required"
          data-error={hasEmailError}
        >
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

        <div
          className="form__group form__group-full form__group-required"
          data-error={hasSubjectError}
        >
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

        <div
          className="form__group form__group-full form__group-required"
          data-error={hasMessageError}
        >
          <label htmlFor="input-message" className="form__label">
            Message
          </label>
          <textarea
            name="message"
            id="input-message"
            className="form__field"
            rows={4}
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
        <option key={`s${index}`} value={subject.id}>
          {subject.title}
        </option>
      )
    })

    return subjectsJsx
  }

  render() {
    return (
      <div className="body-grid viewport-height">
        <main className="main container p-v-y-400">
          <h1 className="ff-secondary fz-xl ta-center m-v-b-300">
            Contact Script Trivia
          </h1>
          <p className="ta-center m-v-b-400 fw-bold">
            Facing a technical issue?
            <br />
            Contact us and we will get back to you within 5 working days.
          </p>

          {this.renderDangerAlert()}
          {this.renderSuccessAlert()}

          <form className="form form-flex" onSubmit={this.handleSubmit}>
            {this.renderFormFields()}
          </form>
        </main>
      </div>
    )
  }
  // #endregion
}

export default ContactView
