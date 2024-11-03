import './AppDownload.scss'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-plateform">
            <img src={assets.play_store} alt="" loading='lazy' />
            <img src={assets.app_store} alt="" loading='lazy' />
        </div>
    </div>
  )
}

export default AppDownload
