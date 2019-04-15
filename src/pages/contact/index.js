import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import ContactStyles from './contact.module.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className={ContactStyles.section + ' ' + ContactStyles.white}>
          <h1 className={ContactStyles.hugeCallout}>
            Let's <br />
            Work <br />
            Together
          </h1>

          <div className={ContactStyles.emailMe}>
            <p>I’m currently looking for full-time employment. If you have a role you think I would be good for, please feel free to reach out to me below or at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>. I’m looking for positions in New York City.</p>

            <p>If you would like to quote me in a publication, discuss a potential opportunity, or tell me how something you saw seen here impacted you, you may also email me at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>, or by using the form below. I look forward to hearing from you.
            </p>
          </div>
        </section>

        <section>
          <form
            name="contact"
            className={ContactStyles.form}
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={'name'}></label>
              <div className="control">
                <input
                  className={ContactStyles.input}
                  type={'text'}
                  name={'name'}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                  placeholder={'Name'}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'email'}></label>
              <div className="control">
                <input
                  className={ContactStyles.input}
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                  placeholder={'Email'}
                />
              </div>
            </div>
            <div className={ContactStyles.textarea}>
              <label className="label" htmlFor={'message'}></label>
              <div className="control">
                <textarea
                  name={'message'}
                  onChange={this.handleChange}
                  id={'message'}
                  required={true}
                  placeholder={'Message'}
                />
              </div>
            </div>
            <div className={ContactStyles.button}>
              <button type="submit">
                Send
              </button>
            </div>
          </form>
        </section>
      </Layout>
    )
  }
}
