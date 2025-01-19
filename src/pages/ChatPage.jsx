import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, leftArrow, phone, Send } from "../assets/Images";
import Message from "../components/Core/Chatting/Message";

const ChatPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hotelData = location.state?.hotelData;
  const messages = [
    { text: "Hi!", time: "10:10", isUser: true },
    {
      text: "Awesome, thanks for letting me know! Can't wait for my delivery. 🎉",
      time: "10:11",
      isUser: true,
    },
    {
      text: "No problem at all! I'll be there in about 15 minutes.",
      time: "10:11",
      isUser: false,
    },
    { text: "I'll text you when I arrive.", time: "10:11", isUser: false },
    { text: "I'll text you when I arrive.", time: "10:11", isUser: false },
    { text: "I'll text you when I arrive.", time: "10:11", isUser: false },
    { text: "I'll text you when I arrive.", time: "10:11", isUser: false },
    { text: "Great! 😊", time: "10:12", isUser: true },
  ];

  const handleBackOnclick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#090D14] w-full h-screen text-white flex flex-col items-center justify-center relative scrollbar-hide">
      <div className="fixed top-0 z-50 bg-[#090D14] px-1 pb-4 w-[393px] pr-3">
        <div className="flex justify-between mt-[35px] w-full border-gray-600 pb-6 px-2">
          <div
            onClick={handleBackOnclick}
            className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center"
          >
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
          {/* </Link> */}

          <div className="flex justify-center items-center gap-2">
            <div className="w-[44px] h-[44px] rounded-full">
              <img src={Avatar} alt="" />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-base">{hotelData.name}</p>
              <p className="text-sm">(+44) 50 9285 3022</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>

      <div className="w-[393px] h-screen p-4 flex flex-col space-y-2 overflow-y-auto mt-[7.6rem] pb-20">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            time={msg.time}
            isUser={msg.isUser}
          />
        ))}
      </div>

      <div className="sticky bottom-0 z-50 bg-[#090D14] px-4  pb-4 w-[393px]">
        <div className="flex justify-between mt-[20px] w-full items-center px-2 pb-2">
          <div className=" gap-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-gray-600 text-white rounded-xl px-4 py-2 w-[290px]"
            />
          </div>
          <div className="bg-[#3579DD] rounded-full w-10 h-10 flex items-center justify-center">
            <img src={Send} alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
