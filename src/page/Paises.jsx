import { useEffect, useState } from "react";
import Card from "../components/Card";


const API = 'https://restcountries.com/v3.1/all';

const Paises = () => {
    const [datos, setDatos] = useState([]);
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setDatos(data); // Asumo que quieres usar todos los datos devueltos por el API
        } catch (error) {
            console.error(error);
        }
    };

    getDatos();

    useEffect(() => {
    }, []);
    return (
        <>
            <div className="container text-center m-10 bg-gradient-to-r min-vh-100 rounded-3">
                <div className="row">
                    <h1 className="text-center">{datos.length}</h1>
                    {datos.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                            <Card item={item} />
                        </div>
                    ))}
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Paises