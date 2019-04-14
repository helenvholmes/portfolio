import React from 'react'
import Layout from '../../components/Layout'

export default class About extends React.Component {
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
      <Layout>
        <div>hey</div>
      </Layout>
    )
  }
}