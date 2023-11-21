import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { toastAlerta } from "../../utils/toastAlerta";

function Perfil() {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', "info")
            navigate("/login")
        }
    }, [usuario.token])



    return (
        <>
            <div className="min-h-[80vh] flex items-center">
                <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center ">
                            <div className="w-full flex justify-center ">
                                <div className="relative">
                                    <img src={usuario.foto} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                                {usuario.nome}</h3>
                        </div >

                        <div className="text-center mt-2">
                            <p className="text-1xl text-slate-700 font-bold leading-normal mb-1">
                                {usuario.usuario}</p>
                        </div >
                       
                        <div className="text-center mt-2">
                            <p className="text-1xl text-slate-700 font-bold leading-normal mb-1">
                            {usuario.nascimento !== undefined ? new Date(usuario.nascimento).toLocaleDateString() : ''}</p>
                        </div >

                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil