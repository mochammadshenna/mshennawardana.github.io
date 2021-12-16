/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface MenuProps {
    title: string;
    active?: boolean;
    icon: string;
    href: string;
}
export default function SideLink(props: Partial<MenuProps>) {
    const { title, active, href = '/', icon } = props;
    const classTitle = cx({
        'list': true,
        'active': active,
    })
    let ic = `/icon/ic-${icon}`

    return (
        <li className={classTitle}>
            <b className="b1"></b>
            <Link href={href}>
                <a ref={href} data-bs-toggle="tooltip" data-bs-placement="top" className="side-link" title={title}>
                    <Image src={ic} height={20} width={20} />
                </a>
            </Link>
        </li>
    )
}
