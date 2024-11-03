import React, { lazy, Suspense, useState } from 'react';
import './AdminDashboardLayout.scss'

import TopNavbar from '../../../components/TopNavbar/TopNavbar';
import SideNavbarLoading from '../../../components/LoadingAnimation/SideNavbar/SideNavbarLoading';
const SideNavbar = lazy(() => import('../../../components/SideNavbar/SideNavbar'));



const AdminDashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

    
  return (
    <div className="admin-dashboard-layout">
      <TopNavbar dashboardName='admin' isMenuOpen={isOpenMenu} setIsMenuOpen={setIsOpenMenu}/>

      <main className="admin-dashboard-body">
        <aside className={isOpenMenu ? 'side-bar open':'side-bar'} onClick={()=>setIsOpenMenu(false)}>
            <Suspense fallback={<SideNavbarLoading/>}><SideNavbar fromAdminDashboard={true}/></Suspense>
        </aside>

        <section className="admin-content">
          {children}
        </section>
      </main>
    </div>
  );
};
export default AdminDashboard;
