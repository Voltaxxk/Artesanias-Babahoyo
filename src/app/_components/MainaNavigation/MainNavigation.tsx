import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import styles from './mainnavigation.module.css'


const MainNavigation = () => {
  return (
  <NavigationMenu className="bg-accent-500">
    <NavigationMenuList>
      <NavigationMenuItem>
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
  )
}

export default MainNavigation