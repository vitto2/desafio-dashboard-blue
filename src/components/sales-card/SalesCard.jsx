/* eslint-disable react/prop-types */
import "./style.css";

const SalesCard = ({ icon, valor, titulo, porcentagem, backgroundColor }) => {
  return (
    <div className="container-card" style={{ backgroundColor }}>
      <div className="container-img">
        <img src={icon} alt="" />
      </div>
      <div className="container-text">
        <h1>{valor}</h1>
        <h2>{titulo}</h2>
        <p>{porcentagem}</p>
      </div>
    </div>
  );
};

export default SalesCard;
