import React from 'react'
import HeaderStyles from "./Header.module.css"

const Header = class extends React.Component {

  render() {
    return (
      <header className={HeaderStyles.header}>
        <h1>
          Helen V. <br />
          Holmes is a <br />
          designer
        </h1>
      </header>
    )
  }
}

export default Header
