import { FC, ReactNode } from "react";
import { Store } from "react-notifications-component";

interface NotificationProps {
  title: string | FC | ReactNode;
  message: string | FC | ReactNode;
  type: "success" | "danger" | "info" | "default" | "warning";
  duration?: number;
  onClick?: () => void;
}

export const addNotification = ({ onClick, ...args }: NotificationProps) =>
  Store.addNotification({
    container: "top-right",
    animationIn: ["animate_animated", "animate_fadeIn"],
    animationOut: ["animate_animated", "animate_fadeOut"],
    dismiss: {
      duration: 3000,
      pauseOnHover: true,
    },
    onRemoval: (_, eventType) => {
      if (eventType === "click" && onClick) onClick();
    },
    ...args,
  });
