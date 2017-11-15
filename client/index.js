import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const ButtonCont = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
  font-size: 2rem;
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isShowing: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ isShowing: !this.state.isShowing })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Check me out!</button>
        {this.state.isShowing && <div>Look at my modal!</div>}
      </div>
    )
  }
}

render(
  <ButtonCont>
    <Modal />
  </ButtonCont>,
  document.querySelector('#app')
)
