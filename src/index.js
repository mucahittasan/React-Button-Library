import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {

if(props.type === 'primary'){
  return <button className={styles.primary} {...props}>{props.children}</button>
}else if(props.type === ''){
  return <button className={styles.default} {...props}>{props.children}</button>
}else if(props.type === 'dashed'){
  return <button className={styles.dashed} {...props}>{props.children}</button>
}else if(props.type === 'text'){
  return <button className={styles.text} {...props}>{props.children}</button>
}else if(props.type === 'link'){
  return <button className={styles.link} {...props}>{props.children}</button>
}

}