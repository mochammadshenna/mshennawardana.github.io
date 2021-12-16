import React from 'react'
import Link from 'next/dist/client/link'
import Navbar from '../components/organisms/Navbar'
import Project from '../components/organisms/Project'

export default function project() {
    return (
        <>
            <Navbar />

            <main className="container">
                <Project />
            </main>
        </>
    )
}
