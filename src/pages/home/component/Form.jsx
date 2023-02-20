
import { Link } from 'react-router-dom'
const Form = () => {
    return (
        <div className='flex justify-center items-center bg-brown w-full  '>

            <form action="">
                <div className="flex flex-col w-12/12 bg-white pt-[20px] pl-[19px] pb-[20px]  ">
                    <div className='flex flex-col gap-3'>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Nombre completo</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nombre completo"></input>
                        </div>

                        <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Email</label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email"></input>
                        </div>

                        <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Teléfono</label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Teléfono"></input>
                        </div>

                    </div>
                    <div>
                        <textarea name="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" name="privacidad" />
                        <label>Acepto la <Link className="text-black " to={"/Politica_de_privacidad"}> Política de Privacidad </Link>     y los

                            <Link className="text-black " to={"/Terminos_y_condiciones"}> Términos y condiciones </Link>     .</label>
                    </div>
                    <br></br>
                    <div>
                        <button className=" p-3 bg-strong-green text-white border-none rounded font-semibold text-sm cursor-pointer w-20">Enviar</button>
                    </div>
                    <datalist >
                        <option value="US +1(555) 987-6543" />
                    </datalist>
                </div>


            </form >
        </div>
    )
}
export default Form