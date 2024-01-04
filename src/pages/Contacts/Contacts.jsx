import React, { useEffect, useState } from 'react'
import Spinner from '../../Components/Spinner/Spinner'
import amazonLogo from '../../Assets/amazon-logo.png'
import amazonLogo2 from '../../Assets/amazon-logo2.png'
import './Style.css'
const Contacts = () => {
    const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        })
    return (
        <>
        {loading ? <Spinner /> :
        <div className='contacts'>
            <div className="contacts__container">
                <div className="contacts__block">
                    <h1 style={{textAlign: 'center', marginTop: 20}}>Контакты с amazon.</h1>
                <div className="contacts__block1">
                <div className="contacts__block2">
                <p style={{fontSize: 22, fontWeight: 600}}>Вопрос. Как конечные пользователи взаимодействуют с сервисом Amazon Connect?</p>
                <p style={{maxWidth: 800, fontSize: 20, fontWeight: 500}}>Клиенты могут звонить в контактный центр Amazon Connect по любому телефону и говорить с оператором. Другие виды взаимодействия с клиентами можно настроить в потоках обработки вызовов. Например, можно использовать голосовой ввод данных, ввод DTMF и преобразование текста в речь с помощью сервиса Amazon Polly, в том числе совместно с сервисом Amazon Lex для реализации взаимодействия с клиентами с использованием естественной речи.</p>
                </div>
                <img src={amazonLogo} alt="" width={700} height={500} style={{borderRadius: 20}}/>
                </div>
                <div className="contacts__block1">
                <img src={amazonLogo2} alt="" width={700} height={500} style={{borderRadius: 20}}/>
                <div className="contacts__block2">
                <p style={{fontSize: 25, fontWeight: 600}}>Вопрос. Amazon Connect поддерживает гибридные контактные центры?</p>
                <p style={{maxWidth: 800, fontSize: 20, fontWeight: 500}}>Да, с помощью Amazon Connect можно подключить специалистов по определенным направлениям деятельности или операторов для обработки звонков при необходимости. Например, если локальная служба поддержки использует локальную систему, а международным агентам нужно работать удаленно, вы можете перенести международную команду в Amazon Connect.</p>
                </div>
                </div>
                </div>
                <p style={{textAlign: 'right', fontSize: 30, fontWeight: 600, margin: 20}}>С любовью ваш amazon</p>
            </div>
        </div>
        }
      </>
      )
    }

export default Contacts