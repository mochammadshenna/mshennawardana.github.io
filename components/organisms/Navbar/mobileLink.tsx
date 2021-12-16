/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MenuProps {
    icon: 'ic-home.svg' | 'ic-about.svg' | 'ic-skill.svg' | 'ic-project.svg' | 'ic-contact.svg'
    href: string
}
export default function MobileLink(props: MenuProps) {
    const { icon, href } = props;

    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link">
                    <Image src={`/icon/${icon}`} height={20} width={20} />
                </a>
            </Link>
        </li>
    )
}
