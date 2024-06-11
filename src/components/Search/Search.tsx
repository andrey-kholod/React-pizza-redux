import cn from "classnames";
import { forwardRef } from "react";
import styles from './Search.module.css'
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({ isValid = true, className,  ...props }, ref) {
    return (
        <input {...props} ref={ref} className={cn(styles['input'], className, {
            [styles['invalid']]: !isValid
        })}/>
    )
})

export default Search