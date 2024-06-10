import { FC } from 'react'
import styles from './Button.module.css'
import {ButtonProps} from './Button.props'
import cn from 'classnames'

function Button({ children, className, ...props}: ButtonProps) {
    console.log('Button')
    return (
        <button {...props} className={cn(styles['button'], styles['accent'], className)}>{children} </button>
    )
}

export default Button