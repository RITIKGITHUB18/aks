import { Bounce, ToastContainer } from "react-toastify";

const ToastContainerLocal = () => {
  return (
    <div className="transform translate-y-6 font-[400] text-[12px] leading-4 z-[100]">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        stacked
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ToastContainerLocal;
