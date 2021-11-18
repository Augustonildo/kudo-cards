import { useState } from 'react';
import styles from './Composer.module.css';


export default function Composer() {
    const [kudoContent, setKudoContent] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(kudoContent)
    }

    function handleChange(event) {
        setKudoContent(event.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar} />
            <form className={styles.composer} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" placeholder="Kudo para..." />
                <textarea 
                    className={styles.textarea}
                    cols={25} 
                    rows={5} 
                    placeholder="Escreva seu kudo..." 
                    onChange={handleChange} />
                <button className={styles.composerButton} type="submit">Publicar!</button>
            </form>
        </div>
    ); 
}
