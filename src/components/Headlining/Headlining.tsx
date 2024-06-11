import { HeadliningProps } from "./Headlining.props";
import cn from 'classnames'
import styles from './Headlining.module.css'

function Headlining({children, className, ...props }: HeadliningProps) {
    return (
        <h1 className={cn(className, styles['h1'])} {...props }>{children}</h1>
    )
}

export default Headlining