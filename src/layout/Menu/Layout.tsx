import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>alari@ya.ru</div>
            </div>
            <div className={styles['menu']}>
                <Link to="/" className={styles['link']}>Menu</Link>
                <Link to="/cart" className={styles['link']}>Cart</Link>

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