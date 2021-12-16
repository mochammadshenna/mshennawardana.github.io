import React from 'react'
import Navbar from '../components/organisms/Navbar'

export default function contact() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section className="row align-items-center" id="contact">
                    <div className="col-12 col-md-7">
                        <h1 className="fw-bold mb-3">Contact Me</h1>
                        <p>
                            Do you have a project that requires my skills? I will be happy to help you by email
                            directly to <b className="text-danger">shenawardana@gmail.com</b>
                        </p>
                        <form action="">
                            <input type="text" name="name" placeholder="Name " className="form-control mb-3" />
                            <input type="text" name="emil" placeholder="Email" className="form-control mb-3" />
                            <textarea name="field" id="field" placeholder="Your Message Here"
                                className="form-control mb-3"></textarea>
                            <button className="btn d-block ms-auto px-4">Send </button>
                        </form>
                    </div>

                </section>
            </main>
        </>
    )
}
