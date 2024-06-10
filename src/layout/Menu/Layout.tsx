import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import cn from 'classnames'

export function Layout() {
    const location = useLocation()

    useEffect(() => {
        console.log(location)
    }, [location])


    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>alari@ya.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to="/" className={({isActive}) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>Menu</NavLink>
                <NavLink to="/cart" className={({isActive}) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>Cart</NavLink>

            </div>

            <Button className={styles['exit']}>
                Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}