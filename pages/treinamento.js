import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import styles from '../styles/Training.module.css'
const Treinamento = () => {
    return (
        <div className={styles.training_container}>
            <Header />
            <div className={styles.training_container_inner}>
                <div className={styles.training_banner}>
                    <h1>Treinamento do <br /> Sistema SAP</h1>
                </div>
                <div className={styles.training_content}>
                    <h2>SAP Ariba</h2>
                    <div className={styles.training_content_inner}>
                        <div className={styles.training_content_inner_modules}>
                            <img src="/sap_logo.png"  className={styles.logo_icon}/>
                            <h3>Módulo 1 SAP Ariba</h3>
                            <p>Conceitos</p>
                            <p>Como funciona</p>

                            <span>6h</span>
                        </div>
                        <div className={styles.training_content_inner_modules}>
                            <img src="/sap_logo.png"  className={styles.logo_icon}/>
                            <h3>Módulo 2 SAP Ariba</h3>
                            <p>Transações de fornecedores </p>
                            <p>Transações de compradores</p>

                            <span>16h</span>
                        </div>
                        <div className={styles.training_content_inner_modules}>
                            <img src="/sap_logo.png"  className={styles.logo_icon}/>
                            <h3>Módulo 3 SAP Ariba</h3>
                            <p>Gráficos</p>
                            <p>Relatórios</p>

                            <span>4h</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Treinamento
