import { agregarPuntos } from "../util/util"

const Card = ({ item }) => {

  return (
    <>

      <div className="card" style={{ width: '18rem', height: '400px' }}>
        <img src={item.flags.png} className="card-img" alt="..." />
        <div className="card-body row">
          <h3 className="text-center lead font-weight-bold mb-2 col-12">{item.name.common}</h3>
          <p className="lead fs-6 mb-2 col-12">Idioma: {Object.values(item.languages || "").join(" / ")}</p>
          <p className="lead fs-6 mb-2 col-12">Población: {agregarPuntos(item.population)}  millones</p>
          <p className="lead fs-6 col-12">Atracciones Principales: Sagrada Familia, Alhambra, Museo del Prado</p>
        </div>
      </div>

    </>
  )
}

export default Card