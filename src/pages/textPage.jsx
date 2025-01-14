const toastId = coupon.promoCode;
toast.info(`🦄${toastId} copied`, {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  toastId: toastId,
});
