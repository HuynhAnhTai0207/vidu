import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ChatComponent = () => {
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedEmojis, setSelectedEmojis] = useState([]);

    const handlePosClick = () => {
        setEmojiPickerVisible(!isEmojiPickerVisible);
    };

    const handleEmojiClick = (emoji) => {
        const { unified } = emoji;
        setSelectedEmojis((prevEmojis) => [...prevEmojis, unified]);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div id="pos" onClick={handlePosClick}>
                Emoji
            </div>
            {isEmojiPickerVisible && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
            )}
            <div>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={inputValue }
                    onChange={handleInputChange}
                />
                <div>
                    {selectedEmojis.map((emoji, index) => (
                        <span key={index}>{String.fromCodePoint(`0x${emoji}`)}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;