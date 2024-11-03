import { useEffect, useRef, useState } from 'react';
import { getCurrentTime } from '../utils/Base';

const useWebSocket = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ text: string; time: string; type: string }[]>([]);


  

  const handleMessage = (message: string) => {
    const currentTime = getCurrentTime();
    setMessages(
      (prevMessages:{ text: string; time: string; type: string }[]) => 
      [...prevMessages, { text: message, time: currentTime, type: 'received'}]
    );
  };
  


  const setConnection = (url: string): Promise<boolean> => {
    socketRef.current?.close();
    const socket = new WebSocket(url);
    socketRef.current = socket;
  
    return new Promise((resolve, reject) => {
      socket.addEventListener('open', () => {
        console.log('WebSocket connected');
        resolve(true);
      });
  
      socket.addEventListener('close', () => {
        console.log('WebSocket disconnected');
        reject(false);
      });
  
      socket.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
        reject(false);
      });
  
      socket.addEventListener('message', (event) => {
        handleMessage(event.data);
      });
    });
  };  



 useEffect(() => {
    return () => {
      socketRef.current?.close();
    };
 }, []);



  const sendMessage = (message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);

      const currentTime = getCurrentTime();
      setMessages(
        (prevMessages:{ text: string; time: string; type: string }[]) => 
        [...prevMessages, { text: message, time: currentTime, type: 'sent'}]
      );
    } else {
      console.error('WebSocket is not open. Unable to send message.');
    }
  };



  const closeWebSocket = () => {
    if (socketRef.current) {
      socketRef.current.close();
    }
  };



  return { 
    setConnection, 
    sendMessage, 
    closeWebSocket,
    messages,
  };
};

export default useWebSocket;
