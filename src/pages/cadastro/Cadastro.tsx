import { useNavigate } from 'react-router-dom'

import './Cadastro.css'
import { useState } from 'react';

function Cadastro() {

    const navigate = useNavigate()

    const [tipoConta, setTipoConta] = useState('');

    function back() {
        navigate('/login')
    }
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="cpf">Tipo do cadastro</label>
                        <select
                        onChange={(e) => setTipoConta(e.target.value)}
                            id="cpf"
                            name="cpf"
                            placeholder="cpf"
                            className="border-2 border-slate-700 rounded p-2">

                            <option value="cpf">Pessoa Física</option>
                            <option value="ong">ONG</option>

                        </select>
                    </div>
                    
                    {tipoConta === 'cpf' && <div className="flex flex-col w-full">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="cpf"
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>}
                    {tipoConta === 'ong' &&
                        <div className="flex flex-col w-full">
                            <label htmlFor="cnpj">CNPJ</label>
                            <input
                                type="cnpj"
                                id="cnpj"
                                name="cnpj"
                                placeholder="CNPJ"
                                className="border-2 border-slate-700 rounded p-2"
                            />
                        </div>}

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="border-2 border-slate-700 rounded p-2"

                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="data">Data de Nascimento</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            placeholder="data"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back}>
                            Cancelar
                        </button>
                        <button
                            className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro