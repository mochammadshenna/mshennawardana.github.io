/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/dist/client/link'

interface projectProps {
    no: string
    title: string
    image: string
    desc: string
    tools: string
    linkvisit?: string
    linksc?: string
}

export default function ListProject(props: Partial<projectProps>) {
    const { no, title, image, desc, tools, linkvisit, linksc } = props
    return (
        <div className="row py-5 justify-content-center">
            <div className="col-12 col-md-10 col-xl-6 left-side">
                <p className="fw-bold h3">{no}</p>
                <h3 className="fw-bold mb-4 mb-xl-0">
                    {title}
                </h3>
                <img src={image} alt="" className="w-100 d-xl-none" />
                <br />
                <p>
                    {desc}
                </p>
                <br />
                <p><b>Tools : </b> {tools}</p>
                <br />
                <a target="_blank" href={linkvisit} className="btn me-3">Visit</a>
                <a target="_blank" href={linksc} className="btn">Source Code</a>
            </div>
            <div className="col-6 right-side d-none d-xl-block">
                <img src={image} alt="" className="w-100" />
            </div>
        </div>
    )
}
