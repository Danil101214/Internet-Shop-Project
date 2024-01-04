import React, {useState, useEffect} from 'react'
import './Style.css'
import Spinner from '../../Components/Spinner/Spinner'
import picture1 from '../../Assets/01.png'
import picture2 from '../../Assets/02.png'
import picture3 from '../../Assets/03.png'
const Cooperation = () => {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })
  return (
    <>
    {loading ? <Spinner /> :
    <div className='cooperation'>
        <div className='cooperation__container'>
            <h1 style={{textAlign: 'center', marginTop: 20}}>Сотрудничество с amazon.</h1>
            <div className="cooperation__block">
                <p style={{maxWidth: 800, fontSize: 18, fontWeight: 600}}>Партнерская сеть AWS (APN) – это глобальное сообщество партнеров, использующее программы, опыт и ресурсы для создания, вывода на рынок и продажи клиентских предложений.

                Эта разнообразная сеть насчитывает 100 000 партнеров в более чем 150 странах. Как у партнера AWS, у вас есть уникальная возможность помочь клиентам эффективно использовать все предложения AWS и ускорить их переход в облако.

                Партнеры и AWS могут вместе обеспечивать инновационными решениями, решать технические задачи, заключать сделки и повышать ценность для наших общих клиентов.</p>
                <iframe width="380" height="214" src="https://www.youtube.com/embed/VjtcENUtn-A" title="AWS Partner Network (APN) Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1 style={{fontSize: 30, marginTop: 40}}>Развивайте свой бизнес с помощью AWS</h1>
             <div className="cooperation__block__block">
             <div className="cooperation__block__block1">
                <img src={picture1} alt="" />
                <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Присоединяйтесь к партнерской сети AWS</p>
                <p style={{fontWeight: 500}}>Присоединяйтесь к APN абсолютно бесплатно и используйте ресурсы для обучения и реализации, инструменты Well-Architected Tool и пр. вне зависимости от того, приступаете ли вы к разработке или стремитесь расширить свой бизнес.</p>
                <button className='button1'>Стать партнером AWS</button>
                </div>
                <div className="cooperation__block__block1">
                <img src={picture2} alt="" />
                <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Выберите программы обучения</p>
                <p style={{fontWeight: 500}}>Участвуйте в программах обучения для партнеров AWS, которые разработаны специально для поддержки и расширения спектра клиентских предложений в сферах программного и аппаратного обеспечения, сервисов, обучения или распространения.</p>
                <button className='button2'> Изучить программы обучения для партнеров AWS</button>
                </div>
                <div className="cooperation__block__block1">
                <img src={picture3} alt="" />
                <p style={{fontSize: 20, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Получите признание</p>
                <p style={{fontWeight: 500}}>Переймите опыт AWS, проверьте свои предложения, получите значки партнеров и доступ к финансовым преимуществам с помощью программ и ресурсов, предназначенных для содействия в разработке, выводе на рынок и продаже с помощью AWS.</p>
                <button  className='button2'>Изучить партнерские программы</button>
                </div>
             </div>
        </div>
    </div>
    }
    </>
  )
}

export default Cooperation