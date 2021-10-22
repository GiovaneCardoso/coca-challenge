import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/TrainingContent.module.css'

const ConteudoTreinamento = (props) => {
    console.log(props.mainContent)
    const router = useRouter()
    return (
        <div className={styles.content_container}>
            <nav className={styles.navbar}>
                <div className={styles.nav_wrapper}>
                    <img src="/header_content.png" />
                    <h5>Resumo do curso</h5>
                    <h6>
                        Módulo 1:
                    </h6>
                    {props.lateralMenuContent.map((item, index) => (
                        <Link href={`/treinamento/conteudo/${index + 1}`} key={index}>
                            <a className={router.query.id == index + 1 ? styles.active : null}>
                                <div>
                                    <img src="/play_icon.png" />
                                </div>
                                <div className={styles.content_info}>

                                    {item.title}
                                    <span>{item.duration}</span>
                                </div>
                            </a>
                        </Link>
                    ))}

                </div>
            </nav>
            <main className={styles.main_content}>
                <div className={styles.content_wrapper}>
                    <div className={styles.content_header}>
                        <div className={styles.content_header_info}>
                            <h1>SAP ARIBA</h1>
                            <Link href={`/treinamento/conteudo/${props.page + 1}`}>
                                <a>Próxima atividade</a>
                            </Link>
                        </div>
                        <div className={styles.content_header_progress}>
                            {props.mainContent.filter((_, index) => index == router.query.id - 1).map((item, index) => (
                                <div key={index} className={styles.content_main_infos}>
                                    <h2>{item.title}</h2>
                                    <iframe src={item.video} frameBorder="0" width="640" height="360" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    <p>{item.description}</p>
                                    <div className={styles.content_main_infos_footer}>
                                        <Link href={`/treinamento/conteudo/${props.page + 1}`}>
                                            <a>Próxima atividade</a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    return {
        props: {
            page: Number(context.params.id),
            content: context.params.id == 1 ? 'Conceitos' : 'Como funciona',
            lateralMenuContent: [
                {
                    title: "1. Conceitos",
                    duration: "1h"
                },
                {
                    title: "2. Como funciona",
                    duration: "5h"
                },
                {

                   title: "3. Finalização",
                   duration: "3h"
                }
            ],
            mainContent: [
                {
                    title: "Conceitos",
                    video: "/example_01.mp4",
                    description: "Conceitos iniciais sobre o SAP Ariba e seus principais usos! Conceitos iniciais sobre o SAP Ariba e seus principais usos! Conceitos iniciais sobre o SAP Ariba e seus principais usos! Conceitos iniciais sobre o SAP Ariba e seus principais usos! Conceitos iniciais sobre o SAP Ariba e seus principais usos! Conceitos iniciais sobre o SAP Ariba e seus principais usos!"
                },
                {
                    title: "Como funciona",
                    video: "/example_02.mp4",
                    description: "Como funciona a plataforma internamente, suas funcionalidades e como criar diversas ações! Como funciona a plataforma internamente, suas funcionalidades e como criar diversas ações! Como funciona a plataforma internamente, suas funcionalidades e como criar diversas ações! Como funciona a plataforma internamente, suas funcionalidades e como criar diversas ações! Como funciona a plataforma internamente, suas funcionalidades e como criar diversas ações!"
                },
                {
                    title: "Finalização",
                    video: "/example_03.mp4",
                    description: "Conclusão do curso, pontos de atenção, pontuações finais e ultimos cuidados! Conclusão do curso, pontos de atenção, pontuações finais e ultimos cuidados! Conclusão do curso, pontos de atenção, pontuações finais e ultimos cuidados! Conclusão do curso, pontos de atenção, pontuações finais e ultimos cuidados!"
                }
            ]
        },
    }
}
export default ConteudoTreinamento
