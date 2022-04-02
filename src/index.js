import React from 'react'
import './styles.css'

export const Button = (props) => {

  return <button className={props.type} {...props}>{props.children}</button>

}