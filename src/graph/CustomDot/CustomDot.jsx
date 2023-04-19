import React, { useCallback, memo } from "react";

const CustomDot = memo(
  ({ cx, cy, stroke, payload, value, index, active, setActiveIndex }) => {
    const handleMouseOver = useCallback(() => {
      console.log("test");
      console.log(index);
      if (index !== undefined) {
        console.log("Working");
        setActiveIndex(index);
      }
    }, [index, setActiveIndex]);

    const handleMouseLeave = useCallback(() => {
      setActiveIndex(null);
    }, [setActiveIndex]);

    if (active) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={4}
          stroke={stroke}
          strokeWidth={2}
          fill="#FFFFFF"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      );
    }

    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="transparent"
        strokeWidth={2}
        fill="transparent"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
);

export default CustomDot;
