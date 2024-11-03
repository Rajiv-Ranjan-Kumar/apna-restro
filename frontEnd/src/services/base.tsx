const useRequiredEnv = () => {
    const USER_WEB_SOCKET_URL = import.meta.env.VITE_WEB_SOCKET_URL;
    const OPENCAGE_API_KEY = import.meta.env.VITE_WEB_OPENCAGE_API_KEY;
    const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;
    const RAZORPAY_SECRET = import.meta.env.VITE_RAZORPAY_SECRET;
      
    if (!USER_WEB_SOCKET_URL) {
      throw new Error("WebSocket URL is not defined in environment variables.");
    }
      
    if (!OPENCAGE_API_KEY) {
      throw new Error("OpenChange Api Key is not defined in environment variables.");
    }

    if (!RAZORPAY_KEY) {
      throw new Error("Razorpay Key is not defined in environment variables.");
    }

    if (!RAZORPAY_SECRET) {
      throw new Error("Razorpay Secret is not defined in environment variables.");
    }

  
    return {
      USER_WEB_SOCKET_URL,
      OPENCAGE_API_KEY,
      RAZORPAY_KEY,
      RAZORPAY_SECRET,
    };
};
  
export default useRequiredEnv ;
  