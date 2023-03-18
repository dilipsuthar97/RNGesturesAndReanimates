import React, { memo } from "react";
import { MotiView } from "@motify/components";

type LoadingIndicatorProps = {
  size: number;
};

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ size }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size /10,
        shadowOpacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 200,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
      }}
    />
  );
};
export default memo(LoadingIndicator)