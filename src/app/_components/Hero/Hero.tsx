import Image from 'next/image'
import styles from './hero.module.css'
import HeroImage from "@/_assets/images/home/iglesia.webp"
const Hero = () => {
  return (
    <div className='relative h-[72vh] w-full'>
        <div className='absolute inset-0 -z-10'> 
            <Image src={HeroImage} alt='' className=""/>
        </div>
        <div className="absolute inset-0 -z-5 "
            style={{
                background: "linear-gradient(90deg, rgba(120, 53, 15, 10.7), rgba(180, 83, 9, 0.7))",
            }}
            aria-hidden="true"
      />
    </div>

    
  )
}

export default Hero