import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";
import { useDispatch } from "react-redux";
import { updateUser } from "../../slice/userSlice";
import { leftArrow } from "../../assets/Images";
const AddNameComponent = ({ setIsNameEntered }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitName = () => {
    dispatch(updateUser({ username: name }));
    setName("");
    setIsNameEntered(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#090D14] w-full text-white flex flex-col items-center justify-center"
      >
        <Link onClick={handleBack} className="self-start sm:ml-4">
          <div className="rounded-full p-[10px] mt-[14px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link>

        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mt-[40px] mb-[24px] transition-transform -translate-x-">
            <h1 className="flex text-[30px] font-[700] leading-[40px] text-white ">
              Hi there !
            </h1>
            <p className="text-[#EEEEEE] text-opacity-70 text-[17px] font-[400] leading-6">
              Please enter your name
            </p>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="flex w-full sm:w-[285px] h-[40px] text-[18px] bg-[#090D14] border-b-[0.5px] border-slate-400 text-[#EEEEEE] opacity-70 px-2 focus:outline-none"
              />
            </div>
            <CustomButton
              onClick={handleSubmitName}
              text={"Add Name"}
              style="w-full sm:w-[296px]"
              buttonStyle={`w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white rounded-[25px] font-[600] mt-6 leading-6`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddNameComponent;
