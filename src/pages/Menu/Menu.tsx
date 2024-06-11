import Headlining from "../../components/Headlining/Headlining";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'

export function Menu() {
    return <>
        <div className={styles['head']}>
            <Headlining >Меню</Headlining>
            <Search placeholder="Введите блюдо или состав"/>
        </div>
        <div>
            <ProductCard
                id={1}
                title='Наслаждение'
                description="Салями, руккола, помидоры, оливки"
                rating={4.5}
                price={300}
                image="/images/pizza-1.jpg"
            />
        </div>
    </>
}