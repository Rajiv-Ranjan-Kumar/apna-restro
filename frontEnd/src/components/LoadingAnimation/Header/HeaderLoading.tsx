import './HeaderLoading.scss';

interface HeaderLoadingProps{
  fromDashboard?: boolean;
}

const HeaderLoading:React.FC<HeaderLoadingProps> = ({fromDashboard=false}) => {
  return (
    <div className={fromDashboard?"header-loader header-loader-x":"header-loader"}></div>
  )
}

export default HeaderLoading;
