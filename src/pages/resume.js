import React from 'react'
import PDF from '../../static/helenvholmes_resume.pdf'
export default class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
    }
  }

  componentWillMount() {
    console.log("hello");

    // eslint-disable-next-line
    const windowHeight = Math.max(
      document.documentElement["clientHeight"],
      document.body["scrollHeight"],
      document.documentElement["scrollHeight"],
      document.body["offsetHeight"],
      document.documentElement["offsetHeight"]
    );

    console.log(windowHeight);
  }

  render() {
    return (
      <embed width="100%" style={{minHeight: 800 + 'px', height: window.outerHeight + 'px'}} name="plugin" type="application/pdf" src={PDF}></embed>
    )
  }
}