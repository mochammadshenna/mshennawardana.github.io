import React from 'react'
import Link from 'next/dist/client/link'
import ListProject from './listProject'

export default function index() {
    return (
        <section className="pt-5" id="project">
            <h1 className="fw-bold mb-3 text-center">My Project</h1>

            <ListProject
                no="01."
                title="QISWA"
                image="/img/project/pairproject.png"
                desc="UNDER MAINTENANCE"
                tools="React"
            />
        </section>
    )
}
