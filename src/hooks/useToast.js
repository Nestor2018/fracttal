import toast from "react-hot-toast";

const useToast = (message, color, Icon, bgColor) => {
  return toast(message, {
    duration: 4000,
    position: "top-center",
    style: {
      color,
      fontWeight: "bolder",
      backgroundColor: bgColor
    },
  });
};

export default useToast;
