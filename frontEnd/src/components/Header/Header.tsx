import './Header.scss'

interface HeaderProps{
  title: string;
  description: string;
  image: string;
  buttonName: string;
  fromDashboard: boolean;
}


const Header:React.FC<HeaderProps> = ({title, description, image, buttonName, fromDashboard}) => {

  return (
    <div className={fromDashboard ? 'header header-x':'header'}>
      <img src={ image } alt="" loading='lazy'/>
      <div className="header-contents">
        <h2>{ title }</h2>
        <p>{ description }</p>
        <button>{ buttonName }</button>
      </div>
    </div>
  )
}

export default Header
