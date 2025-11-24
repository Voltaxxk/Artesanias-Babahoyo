import Image from 'next/image'
import styles from './hero.module.css'
import HeroImage from "@/_assets/images/home/iglesia.webp"
import CtaButton from '../Shared/CtaButton/CtaButton';
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.bgImageContainer}> 
            <Image src={HeroImage} alt='' className=""/>
        </div>
        <div className={styles.bgGradient}
            style={{
                background: "linear-gradient(180deg, rgba(120, 53, 15, 0.5), rgba(180, 83, 9, 0.7))",
            }}
            aria-hidden="true"
      />
      <div className={styles.textContainer}>
        <div className={styles.infoContainer}>
            <h1>Artesanías Auténticas del Ecuador</h1>
            <p className={styles.descrptionText}>Descubre la belleza de nuestras hamacas tradicionales e implementos de pesca artesanales, hechos con amor, técnicas y manos expertas del Ecuador</p>

            <div className={styles.ctasContainer}>
              <CtaButton ctaText='Explora productos' ctaUrl='../' bgColor='bg-amber-600' bgHover='bg-amber-700'  variant='default' />
              <CtaButton ctaText='Nuestra Historia' ctaUrl='../'  variant='outline' />
            </div>
        </div>
      </div>



    </div>

    
  )
}

export default Hero