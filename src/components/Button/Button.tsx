import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from 'classnames'

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
    console.log('Button')
    return (
        <button {...props} className={cn(styles['button'], styles['accent'], className, {
            [styles['small']]: appearence === 'small',
            [styles['big']]: appearence === 'big'
        })}>{children} </button>
    )
}

export default Button