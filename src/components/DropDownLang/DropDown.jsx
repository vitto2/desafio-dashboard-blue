import { useState } from "react";
import "./style.css";

const DropDown = () => {
  const [idioma, setIdioma] = useState("pt-br");

  const handleChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <div className="idioma">
      <select name="idioma" id="idioma" value={idioma} onChange={handleChange}>
        <option value="pt-br">
          <span className="pais">PT(BR)</span>
        </option>
        <option value="en-us">
          <span className="pais">EN(US)</span>
        </option>
      </select>
    </div>
  );
};

export default DropDown;
