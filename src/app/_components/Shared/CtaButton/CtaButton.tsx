import { Button } from '@/components/ui/button'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


interface CtaButtonProps {

    ctaText: string,
    ctaUrl: string,
    isExternal?: boolean,
    icon?: React.ReactNode,
    textColor?: string,
    bgColor?: string,
    bgHover?: string,
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link',

}


const CtaButton = ({ ctaText, ctaUrl, isExternal, textColor, bgColor, bgHover, variant }: CtaButtonProps) => {
  return (
    <a href={ctaUrl} target={isExternal ? '_blank' : '_self'} rel="noreferrer">
        <Button className={`${bgColor || "bg-transparent"} ${'hover:'+bgHover} ${textColor} w-50 p-7`} size="lg" variant={variant}>{ctaText} <FaLongArrowAltRight/></Button>
    </a>
  )
}

export default CtaButton