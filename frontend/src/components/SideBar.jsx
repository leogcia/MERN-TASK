import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";



function SideBar() {

    const { auth } = useAuth();


    return (
        <aside className="md:w-880 lg:w-96 px-5 py-10">
            <p className="text-cl font-bold"> Hola: {auth.nombre}</p>

            <Link
                to='crear-proyecto'
                className="bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
            >Nuevo Proyecto</Link>    
        </aside>
    );
}

export default SideBar;