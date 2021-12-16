/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/organisms/Navbar'
import Image from 'next/dist/client/image';

export default function about() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section className="row align-items-center" id="about">
                    <div className="col-12 col-md-6 ">
                        <h1 className="fw-bold mb-3">About Me,</h1>
                        <p>
                            My name is Mochammad Shenna Wardana, I&apos; m a Full Stack Developer. Currently build <b className="text-danger">Qiswa Apps</b>,  Helping people with disabilities to become better at what they do in my life and work mission.
                        </p>
                        <p>
                            In my works I always try to combine aesthetic with functional aspects, looking for the right balance to communicate without annoying.
                        </p>
                        <p>
                            In addition, I like to create and contribute to open-source projects.That helps
                            me to
                            learn a ton of new stuff, grow as a developer and support other open-source projects.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 order-first order-md-last">
                        <img src="/img/illustration/skill.png" alt="" className="w-100 " />
                    </div>
                </section>
            </main>
        </>
    )
}
