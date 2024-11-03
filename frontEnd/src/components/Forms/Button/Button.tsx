import './Button.scss';

interface ButtonProps {
  name: string;
  type: 'button'|'submit';
  isBack?: boolean;
  isSave?: boolean;
  isContinue?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button:React.FC<ButtonProps> = ({name, type, isBack=false, isSave=true, isContinue=false, onClick, className=''}) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      <button type={type} className={`btn 
        ${isBack ? 'btn-back' : ''} ${isSave ? 'btn-save' : ''} 
        ${isContinue ? 'btn-continue' : ''} 
      `}>{name}</button>
    </div>
  )
}

export default Button;
