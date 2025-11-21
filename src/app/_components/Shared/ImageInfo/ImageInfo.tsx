import React from 'react'
import Image from 'next/image';
import ImageDescription from '@/_assets/images/home/artesanoHamaca.jpg';
import IconList from '../IconList/IconList';

const ImageInfo = () => {
  return (
    <div className='flex w-full p-10 gap-x-8 my-10 items-center'>
        <div className='basis-1/2 flex flex-col gap-y-5'>
            <h2 className='text-amber-900'>¿Por qué elegir nuestros productos artesanales? </h2>
            <p>En Artesanías Babahoyo, cada producto cuenta una historia de tradición, calidad y amor por las técnicas ancentrales del Caribe. Nuestros artesanos han perfeccionado sus Habilidades durante generaciones.</p>

            <IconList />

        </div>
        <div className='basis-1/2'>
            <Image className='rounded-2xl shadow-2xl w-full h-96 object-cover object-top'  src={ImageDescription} alt='Artesano hamaca'/>
        </div>
    </div>
  )
}

export default ImageInfo