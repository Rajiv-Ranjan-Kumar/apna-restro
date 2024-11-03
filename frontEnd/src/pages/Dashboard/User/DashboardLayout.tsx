import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { isUserDashboardRoute } from '../../AllRoutes';

import './DashboardLayout.scss';
import useWebSocket from '../../../services/websocket';

const Notifications = lazy(() => import('../../../components/Notifications/Notifications'));
const SideNavbar = lazy(() => import('../../../components/SideNavbar/SideNavbar'));
import SideNavbarLoading from '../../../components/LoadingAnimation/SideNavbar/SideNavbarLoading';
import TopNavbar from '../../../components/TopNavbar/TopNavbar';
import { FaComments } from 'react-icons/fa';
import ChatBoard from '../../../components/Chat/ChatBoard';
import useRequiredEnv from '../../../services/base';
import NotificationsLoading from '../../../components/LoadingAnimation/Notifications/NotificationsLoading';



const DashboardLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {

  const { setConnection, messages, sendMessage, closeWebSocket } = useWebSocket();

  const { USER_WEB_SOCKET_URL } = useRequiredEnv();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isIndicates, setIsIndicates] = useState(false);



  const addConnection = async (attempts: number = 5) => {
    const webSocketUrl = USER_WEB_SOCKET_URL;

    try {
      const isConnected = await setConnection(webSocketUrl);
      setIsConnected(isConnected);
    } catch (error) {
      console.error('Connection failed, retrying...', error);
      if (attempts > 1) {
        setTimeout(() => addConnection(attempts - 1), 1000);
      } else {
        console.log('All connection attempts failed.');
      }
    }
  };

  useEffect(() => {
    addConnection();
  }, []);


  
  const location = useLocation();

  useEffect(() => {
    if(!isUserDashboardRoute(location.pathname)){
      closeWebSocket();
    }
  },[closeWebSocket, location]);



  const messageLengthRef = useRef(0);
  
  useEffect(() => {
    if(isConnected && !isOpenChat && messages.length > messageLengthRef.current)
      setIsIndicates(true);
    else
      setIsIndicates(false);

    messageLengthRef.current = messages.length;
  },[isConnected,isOpenChat,messages]);

  // const playDeviceSound = () => {
  //   const audio = new Audio('https://freesound.org/data/previews/586/586896_12898102-lq.mp3');
  //   audio.play().catch(error => console.error('Error playing sound:', error));
  // };

  // useEffect(() => {
  //   if (isMessage) {
  //     playDeviceSound();
  //   }
  // }, [isMessage]);


  return (
    <div className="dashboard-layout">
        <TopNavbar dashboardName='user' isMenuOpen={isOpenMenu} setIsMenuOpen={setIsOpenMenu} />

      <div className="dashboard-body">
        <aside className={isOpenMenu ? 'side-bar open':'side-bar'} onClick={()=>setIsOpenMenu(false)}>
            <Suspense fallback={<SideNavbarLoading/>}><SideNavbar /></Suspense>
        </aside>

        <main className="main-container">
          {children}
        </main>

        <aside className="side-bar right-side-bar">
            <div className="notification-container">
                <h5>Notifications</h5>
                <div className="notification-data-container">
                <Suspense fallback={<NotificationsLoading />}>
                  <Notifications/>
                </Suspense>
                </div>
            </div>
        </aside>
      </div>

      <div className="chat-board-icon" onClick={()=>setIsOpenChat(true)}>
        <FaComments className='icon' />
        {isIndicates && <div className="indicate">!</div>}
      </div>

      <div className="chat">
        {isOpenChat&&<ChatBoard onClose={() => setIsOpenChat(false)} messages={messages} sendMessage={sendMessage} />}
      </div>
    </div>
  );
};
export default DashboardLayout;