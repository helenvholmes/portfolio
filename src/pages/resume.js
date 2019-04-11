import React from 'react'
import PDF from '../../static/helenvholmes_resume.pdf'
export default class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
    }
  }

  render() {
    return (
      <embed width="100%" style={{minHeight: 800 + 'px', height: window.outerHeight + 'px'}} name="plugin" type="application/pdf" src={PDF}></embed>
    )
  }
}