import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import styles from './mainnavigation.module.css'
import Image from 'next/image';
import Logo from "@/_assets/images/home/artesanias.svg"
import { FaShoppingBag } from "react-icons/fa";

const MainNavigation = () => {
  return (

  <div className={styles.mainNavigation__Desktop}>
    <div className={styles.logoContainer}>
    <Image 
      className={styles.navigationLogo}
      src={Logo} alt='Logo artesanias babahoyo'/>
      <p className={styles.textoLogo}>Artesanias Babahoyo</p>
    </div>

    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem className={styles.navigationItems}>
          <NavigationMenuLink asChild>
            <Link href="/">Inicio</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/product">Productos</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/about">Nosotros</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/contact">Contactanos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <FaShoppingBag />
  </div>
  )
}

export default MainNavigation