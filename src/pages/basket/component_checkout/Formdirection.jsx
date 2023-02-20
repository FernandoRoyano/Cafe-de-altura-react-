
import { Link } from 'react-router-dom'
const Formdirection= () => {
    return (
        <div className='flex justify-center items-center bg-brown w-full  '>

<form class="max-w-md mx-auto mt-5 p-5 rounded-md">
                        <div class="grid grid-cols-1 gap-4 mb-4">
                            <div>
                            <label for="nombre" class="block font-medium text-gray-700 mb-2">Nombre</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="apellidos" class="block font-medium text-gray-700 mb-2">Apellidos</label>
                            <input type="text" id="apellidos" name="apellidos" placeholder="Introduce tus apellidos" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="telefono" class="block font-medium text-gray-700 mb-2">Teléfono</label>
                            <input type="text" id="telefono" name="telefono" placeholder="Introduce tu número de teléfono" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="email" class="block font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Introduce tu email" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="pais" class="block font-medium text-gray-700 mb-2">País</label>
                            <select id="pais" name="pais" class="border border-gray-400 p-2 w-full rounded-md">
                                <option value="">Selecciona tu país</option>
                                <option value="es">España</option>
                                <option value="mx">México</option>
                                <option value="co">Colombia</option>
                            </select>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="poblacion" class="block font-medium text-gray-700 mb-2">Población</label>
                                <input type="text" id="poblacion" name="poblacion" placeholder="Introduce tu población" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                                <label for="cp" class="block font-medium text-gray-700 mb-2">Código postal</label>
                                <input type="text" id="cp" name="cp" placeholder="Introduce tu código postal" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4">
                            <div>
                                <label for="calle" class="block font-medium text-gray-700 mb-2">Calle</label>
                                <input type="text" id="calle" name="calle" placeholder="Introduce tu calle" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                                <label for="num" class="block font-medium text-gray-700 mb-2">Nº</label>
                                <input type="text" id="num" name="num" placeholder="Introduce tu número" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="piso" class="block font-medium text-gray-700 mb-2">Piso</label>
                            <input type="text" id="piso" name="piso" placeholder="Introduce tu piso" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div>
                            <label for="puerta" class="block font-medium text-gray-700 mb-2">Puerta</label>
                            <input type="text" id="puerta" name="puerta" placeholder="Introduce tu puerta" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            </div>

                            </div>
                            <div class="text-center">
                                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Enviar</button>
                            </div>
                            </form>

        </div>
    )
}


<Link to="./success">Acerca de</Link>
export default Formdirection