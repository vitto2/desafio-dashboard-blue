import "./style.css";
import SalesCard from "../sales-card/SalesCard";
import iconetotalvendas from "../../assets/icon-total-vendas.svg";
import exportIcon from "../../assets/export-icon.svg";
import iconContratos from "../../assets/icon-contratos.svg";
import iconImplantadas from "../../assets/icon-implantadas.svg";
import iconNovosContratos from "../../assets/novos-contratos.svg"
const Sales = () => {
  return (
    <div className="container-sales">
      <div className="container-items-title">
        <section className="text-section">
          <h2>Vendas hoje</h2>
          <h3>Resumo de vendas</h3>
        </section>
        <section className="btn-export-section">
          <img src={exportIcon} alt="" />
          <p className="btn-export">Exportar</p>
        </section>
      </div>
      <section className="section-cards">
        <SalesCard
          icon={iconetotalvendas}
          valor="R$1,000"
          titulo="Total de vendas"
          porcentagem="+8% a mais que ontem"
          backgroundColor={"#ffe2e5"}
        />
        <SalesCard
          icon={iconContratos}
          valor="300"
          titulo="Total de contratos"
          porcentagem="+5% a mais que ontem"
          backgroundColor={"#FFF4DE"}
        />
        <SalesCard
          icon={iconImplantadas}
          valor="300"
          titulo="Total de contratos"
          porcentagem="+1,2% a mais que ontem"
          backgroundColor={"#DCFCE7"}
        />
        <SalesCard
          icon={iconNovosContratos}
          valor="8"
          titulo="Novos contratos"
          porcentagem="+5% a mais que ontem"
          backgroundColor={"#F3E8FF"}
        />
      </section>
    </div>
  );
};

export default Sales;
