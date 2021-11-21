import Card from "../card/Card";
import Composer from "../composer/Composer";
import styles from './Timeline.module.css'

export default function Timeline() {
    return (
        <div className={styles.timeline}>
            <div className={styles.logo}>
                <h1>Kudo Cards!</h1>
            </div>
          <Composer />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}