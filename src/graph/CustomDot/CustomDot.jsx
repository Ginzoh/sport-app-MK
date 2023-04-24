import React, { useCallback, memo } from "react";

/**
 * CustomDot component represents a custom dot on a chart.
 * It handles mouse over and mouse leave events to display or hide the dot.
 * 
 * @component
 * @param {Object} props - The properties for the CustomDot component.
 * @param {number} props.cx - The x-coordinate of the dot's center.
 * @param {number} props.cy - The y-coordinate of the dot's center.
 * @param {string} props.stroke - The color of the dot's stroke.
 * @param {Object} props.payload - The payload data associated with the dot.
 * @param {number} props.value - The value represented by the dot.
 * @param {number} props.index - The index of the dot in the series.
 * @param {boolean} props.active - Indicates whether the dot is active or not.
 * @param {function} props.setActiveIndex - The function to set the active index.
 * @returns {JSX.Element} The CustomDot component.
 */
const CustomDot = memo(
  ({ cx, cy, stroke, payload, value, index, active, setActiveIndex }) => {
    const handleMouseOver = useCallback(() => {
      if (index !== undefined) {
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
          r={3}
          stroke={stroke}
          strokeWidth={3}
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
        r={3}
        stroke="transparent"
        strokeWidth={3}
        fill="transparent"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
);

export default CustomDot;
