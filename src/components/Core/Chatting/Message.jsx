import React from 'react';

const Message = ({ text, time, isUser }) => {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`relative p-3 rounded-lg shadow-md max-w-[80%] min-w-[18%] ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        
        <p className="text-sm leading-5 break-words mb-2">{text}</p>
        <div
          className={`flex items-center text-[10px] absolute right-3 bottom-1 ${
            isUser ? 'text-gray-200' : 'text-gray-500'
          }`}
        >
          <span>{time}</span>
          {/* Checkmark for user messages */}
          {isUser && (
            <span className="ml-1">
              ✔✔
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
