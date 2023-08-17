import styles from './NumHolder.module.css'

export default function NumHolder({ children }){
    return(
        <li className={styles.circle}>
            {children}
        </li>
    )

}