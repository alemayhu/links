import styled from 'styled-components'
import logo from '../logo.png';
import React from 'react'

const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: blanchedalmond;
  pointer-events: none;
  object-fit: contain;
`

const Avatar = () => {
        return (
                <Image src={logo} className="App-logo" alt="logo" />
        )
}

export default Avatar;