import React, { Component } from 'react'

class ContactView extends Component {
  handleSubmit() {
    console.log(`Submitting contact form.`)
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
            onSubmit={handleSubmit}
          >
            {/* {formFields} */}
          </form>
        </main>
      </div>
    )
  }
}

export default ContactView
