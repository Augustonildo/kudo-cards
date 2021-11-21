import { useContext } from "react";
import { KudoContext } from "../../contexts/KudoContext";
import Card from "../card/Card";
import Composer from "../composer/Composer";
import styles from './Timeline.module.css'

export default function Timeline() {
    const {kudos} = useContext(KudoContext)
    
    return (
        <div className={styles.timeline}>
            <div className={styles.logo}>
                <h1>Kudo Cards!</h1>
            </div>
          <Composer />
          {kudos.map((kudo) => (
              <Card key={kudo.id} 
                sender={kudo.sender}
                recipient={kudo.recipient}
                message={kudo.message}/>
          ))}
        </div>
    )
}