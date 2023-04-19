import React, { useCallback, memo } from "react";

/**
 * CustomDot component.
 * Renders a customized dot for the line chart.
 * 
 * @component
 * @example
 * const data = {...};
 * const active = true;
 * const setActiveIndex = (index) => {...};
 * 
 * return (
 *   <CustomDot data={data} active={active} setActiveIndex={setActiveIndex} />
 * );
 */


const CustomDot = memo(
  ({ cx, cy, stroke, payload, value, index, active, setActiveIndex }) => {
    /**
     * Handles mouse over event for the custom dot.
     *
     * @param {React.MouseEvent} event - The mouse event object.
     */
    const handleMouseOver = useCallback(() => {
      if (index !== undefined) {
        setActiveIndex(index);
      }
    }, [index, setActiveIndex]);

    /**
     * Handles mouse leave event for the custom dot.
     *
     * @param {React.MouseEvent} event - The mouse event object.
     */
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
          strokeWidth={2}
          fill="#FFFFFF"
          onMouseOver={handleMouseOver}
          onMouseMove={handleMouseOver}
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
        strokeWidth={2}
        fill="transparent"
        onMouseOver={handleMouseOver}
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
);

export default CustomDot;
