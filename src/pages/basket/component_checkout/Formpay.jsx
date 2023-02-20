
//import { Link } from 'react-router-dom'

import { Link } from "react-router-dom"

//import Checkbox from '../component/Checkbox'
const Formpay= () => {
    return (
        <div>
                        <h3>Seleccionar método de pago</h3>
                        <form class="max-w-md mx-auto mt-5 p-5  rounded-md grid grid-cols-2 gap-4">
                            <div class="mb-4 col-span-2">
                                <label for="fname" class="block font-medium text-gray-700">Titular</label>
                                <input type="text" id="fname" name="fname" placeholder="Nombre del Titular" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div class="mb-4 col-span-2">
                                <label for="tarjeta" class="block font-medium text-gray-700">Número de tarjeta</label>
                                <input type="text" id="tarjeta" name="tarjeta" placeholder="1234 1234 1234 1234" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div class="mb-4 col-span-1">
                                <label for="caducidad" class="block font-medium text-gray-700">Fecha de caducidad</label>
                                <input type="text" id="caducidad" name="caducidad" placeholder="MM/YY" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                            <div class="mb-4 col-span-1">
                                <label for="cvc" class="block font-medium text-gray-700">CVC</label>
                                <input type="text" id="cvc" name="cvc" placeholder="CVC" class="border border-gray-400 p-2 w-full rounded-md" />
                            </div>
                        </form>




               
        </div>
    )
}
export default Formpay