import React from 'react'
export default class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
    }
  }

  componentDidMount() {
    // eslint-disable-next-line
    const windowHeight = Math.max(
      document.documentElement["clientHeight"],
      document.body["scrollHeight"],
      document.documentElement["scrollHeight"],
      document.body["offsetHeight"],
      document.documentElement["offsetHeight"]
    );
  }

  render() {
    return (
      <embed width="100%" height={this.windowHeight} style={{minHeight: 800 + 'px'}} name="plugin" type="application/pdf" src="/static/helenvholmes_resume-7ee87fdb7cd91f46e94e2a6206a9ccee.pdf"></embed>
    )
  }
}