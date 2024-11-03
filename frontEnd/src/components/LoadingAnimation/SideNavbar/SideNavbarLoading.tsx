import './SideNavbarLoading.scss';

const SideNavbarLoading = ({fromAdminDashboard=false}: {fromAdminDashboard?: boolean}) => {
  return (
    <div className='side-nav-bar-loading'>
      {fromAdminDashboard&&<div className="side-nav-bar-loading-header"></div>}
      <div className="side-nav-bar-loading-inner">
        {Array.from({length:8}).map((_, index) =>(
          <div className="side-nav-bar-loading-item" key={index}></div>
        ))}
      </div>
    </div>
  )
}

export default SideNavbarLoading;
