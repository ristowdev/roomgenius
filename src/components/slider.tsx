// PriceRangeSlider.tsx
import React, { useState } from 'react';
import Slider from 'react-slider';
import 'rc-slider/assets/index.css'; // Import the styles

interface PriceRangeSliderProps {
  onRangeChange: (values: number[]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ onRangeChange }) => {
  const [values, setValues] = useState<number[]>([0, 100]); // Initial values, adjust as needed

  const handleRangeChange = (newValues: number[]) => {
    setValues(newValues);
    onRangeChange(newValues);
  };

  return (
    <Slider
      min={0}
      max={100}
      step={1}
      value={values}
      onChange={handleRangeChange}
    />
  );
};

export default PriceRangeSlider;
