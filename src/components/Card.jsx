
const Card = ({ item }) => {
  function agregarPuntos(numero) {
    // Convertir el número a string y dividirlo en partes de tres dígitos desde el final
    let partes = numero.toString().split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Volver a unir las partes, teniendo en cuenta los decimales si existen
    return partes.join('.');
  }
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card" style={{ width: '18rem', height: '400px' }}>
          <img src={item.flags.png} className="card-img" alt="..." />
          <div className="card-body row">
            <h3 className="text-center lead font-weight-bold mb-2 col-12">{item.name.common}</h3>
            <p className="text-gray-600 mb-2 col-12">Idioma: {Object.values(item.languages).join(" / ")}</p>
            <p className="text-gray-600 mb-2 col-12">Población: {agregarPuntos(item.population)}  millones</p>
            <p className="text-gray-600 col-12">Atracciones Principales: Sagrada Familia, Alhambra, Museo del Prado</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Card