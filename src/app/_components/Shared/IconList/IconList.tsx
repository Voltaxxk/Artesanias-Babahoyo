import { Badge } from '@/components/ui/badge'
import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiLeaf } from "react-icons/bi";
import { HiBuildingStorefront } from "react-icons/hi2";




interface itemProps {
    icon? : React.ReactNode,
    title? : string,
    description? : string,
    colorIcon? : string,
    bgBadge? : string,
}


const IconList = () => {
  return (
    <ul className='flex flex-col gap-y-5'>
        <li className='flex gap-x-5'>
            <Badge className='w-10 h-10 rounded-full text-amber-600 bg-amber-100'><FaHandHoldingHeart  size={35}/></Badge>
            <div className='flex flex-col gap-y-2'>
                <h3>Hechos a Mano con Amor</h3>
                <p>Cada pieza es única y elaborada con técnicas tradicionales transmitidas de generación en generación.</p>
            </div>
        </li>

        <li className='flex gap-x-5'>
            <Badge className='w-10 h-10 rounded-full text-orange-600 bg-orange-100'><BiLeaf  size={35}/></Badge>
            <div className='flex flex-col gap-y-2'>
                <h3>Materiales Naturales</h3>
                <p>utilizamos solo los mejores materiales naturales y sostenibles para garantizar durabilidad y confort</p>
            </div>
        </li>

        <li className='flex gap-x-5'>
            <Badge className='w-10 h-10 rounded-full text-amber-600 bg-amber-100'><HiBuildingStorefront  size={35}/></Badge>
            <div className='flex flex-col gap-y-2'>
                <h3>Apoyo a comunidades</h3>
                <p>Cada compra apoya directamente a las familias artesanas de nuestro pais.</p>
            </div>
        </li>

    </ul>
  )
}

export default IconList