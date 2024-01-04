import React, {useState, useEffect} from 'react'
import AmazonTop from '../../Assets/amazonTop.jpeg'
import AmazonBottom from '../../Assets/amazonBottom.jpeg'
import Spinner from '../../Components/Spinner/Spinner'
import './Style.css'
const AboutUs = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000)
  })
  return (
    <>
        {loading ? <Spinner /> :
    <div className='About__us'>
      <div className='About__us__container'>
      <h1 style={{textAlign: 'center'}}>О нас</h1>
        <div className="About__us__block1">
          <p style={{width: 600, marginTop: 20}}>Коли компанія Amazon розпочинала свою діяльність у 1995 році, це був сайт, де продавалися лише книжки. Нині Amazon – це найдорожча компанія у світі й найбільший ринок електронної комерції. 
          З роками Amazon перетворився на глобального домінанта в усіх цифрових сферах: компанія займається стримінгом відео на Amazon Prime, має музичний сервіс Amazon Music, електронну читалку Amazon Kindle та сервіс з аудіокнигами Audible. Amazon також має власне видавництво. Дочірні компанії Amazon виробляють техніку й охоплюють великі інтернет-ресурси, як-от Twitch.tv та iMDb.</p>
          <img src={AmazonTop} width={600} height={300} style={{borderRadius: 20}}/>
        </div>
        <div className="About__us__block2">
        <img src={AmazonBottom} width={600} height={300} style={{borderRadius: 20}}/>
          <p style={{width: 600, marginTop: 20}}>Надалі справи Amazon не завжди йшли так само добре: порівняно повільне зростання у перші 5 років змусило акціонерів скаржитися, що компанія не досягає прибутковості. Модель та концепція Amazon сприймалися досить новаторськими і незвичними на той час. Чимало людей переймалися, що компанія не виправдає інвестиції або навіть не виживе в довгостроковій перспективі.
          Упродовж років різні кризи знищили багато електронних компаній, але Amazon вижила і змогла стати визначним гравцем в онлайн-продажах. Коли компанія зрештою вийшла “в плюс” і отримала дохід у мільярд доларів, це довело, що нетрадиційна бізнес-модель Безоса все-таки увінчалась успіхом.</p>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default AboutUs