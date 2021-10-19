import React from 'react'
import styles from '../../styles/Footer.module.css'
const Footer = () => {
    
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.videos}>
                        <img src="/footer_logo3.jpeg" alt="video-img"/>
                        <h4>Videoaulas</h4>
                        <p>Vídeoaulas explicativose fácil para iniciantes na plataforma</p>
                    </div>
                    <div className={styles.quiz}>
                    <img src="/footer_logo1.jpeg" alt="video-img"/>
                        <h4>Quizz</h4>
                        <p>Perguntas e respostas com pontuação</p>
                    </div>
                    <div className={styles.certifier}>
                    <img src="/footer_logo2.jpeg" alt="video-img"/>
                        <h4>Certificado</h4>
                        <p>Certificado de aprendizagem do Sistema da Femsa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
