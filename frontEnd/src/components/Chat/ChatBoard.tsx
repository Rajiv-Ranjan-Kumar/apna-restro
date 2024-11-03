import { useEffect, useRef, useState } from 'react';
import './ChatBoard.scss';
import { FaTimes, FaPaperPlane, FaSmile } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';

interface ChatBoardProps {
    onClose: () => void;
    messages: {[key:string]:string}[];
    sendMessage: (message: string) => void;
}

const ChatBoard:React.FC<ChatBoardProps> = ({ onClose, messages, sendMessage }) => {
    
    const [input, setInput] = useState<string>('');
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const messageEndRef = useRef<HTMLDivElement>(null);

   

    const handleSendMessage = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
            setIsEmojiPickerOpen(false);
        }
    };



    const handleEmojiClick = (emojiData: { emoji: string }) => {
        setInput(prevInput => prevInput + emojiData.emoji);
    };



    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
            event.preventDefault();
        }
    };



    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);



    return (
        <div className="chat-board">
            <div className="chat-header">
                <h4>Chat</h4>
                <FaTimes className="close-icon" onClick={onClose} />
            </div>

            <div className="message-list">
                {messages.map((message, index) => (
                   <>
                    {message.type === 'received' &&(
                        <div key={index} className="message-item received">
                            <span className="message-text">{message.text}</span>
                            <span className="message-time">{message.time}</span>
                        </div>
                    )}

                    {message.type === 'sent' &&(
                        <div key={index} className="message-item sent">
                            <span className="message-text">{message.text}</span>
                            <span className="message-time">{message.time}</span>
                        </div>
                    )}
                   </>
                ))}
                <div ref={messageEndRef} />
            </div>

            <div className="input-area">
                <FaSmile
                    className="emoji-icon"
                    onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                />
                {isEmojiPickerOpen && (
                    <div className="emoji-picker">
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
};

export default ChatBoard;
