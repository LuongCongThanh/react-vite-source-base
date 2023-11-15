import { useState } from 'react';

const ToggleSwitchMode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    // <div className="switch-mode btn text-white border-white">
    //   <FontAwesomeIcon icon={faMoon} />
    // </div>
    <div className="relative">
      <input type="checkbox" id="time" />
      <label htmlFor="time">Night</label>
    </div>
  );
};

export default ToggleSwitchMode;
