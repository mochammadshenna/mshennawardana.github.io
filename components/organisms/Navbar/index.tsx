/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import SideLink from './sideLink'
import { useRouter } from "next/router";
import MobileLink from './mobileLink';
import Image from 'next/dist/client/image';

export default function index() {
    const router = useRouter();

    return (
        <section id="navbar">
            <nav className="sidebar-dekstop d-none d-md-flex flex-column">
                <a href="" className="logo mt-5">
                    <h1 className='h4 fw-bold'>MSW.</h1>
                </a>

                <ul className="mt-auto p-0 mb-5">
                    <SideLink icon="home.svg" title="Home" href="/"
                        active={router.pathname == "/" ? true : false} />
                    <SideLink icon="about.svg" title="About" href="/about"
                        active={router.pathname == "/about" ? true : false} />
                    <SideLink icon="skill.svg" title="Skill" href="/skill"
                        active={router.pathname == "/skill" ? true : false} />
                    <SideLink icon="project.svg" title="Portofolio" href="/project"
                        active={router.pathname == "/project" ? true : false} />
                    <SideLink icon="contact.svg" title="Contact" href="/contact"
                        active={router.pathname == "/contact" ? true : false} />
                </ul>
            </nav>

            <nav className="navbar navbar-expand navbar-mobile d-md-none">
                <div className="container-xxl">
                    <ul className="navbar-nav m-auto w-100 justify-content-around">
                        <MobileLink icon="ic-home.svg" href="/" />
                        <MobileLink icon="ic-about.svg" href="/about" />
                        <MobileLink icon="ic-skill.svg" href="/skill" />
                        <MobileLink icon="ic-project.svg" href="/project" />
                        <MobileLink icon="ic-contact.svg" href="/contact" />
                    </ul>
                </div>
            </nav>
        </section>
    )
}
