import React from 'react'
import '../assets/styles/core.css'
import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <>
    <footer className="section bg-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h6 className="footer-heading text-uppercase  mt-3 text-white mb-4">Address</h6>
                    <img src={logo} height='60'></img>
                    <p className="mt-2" style={{color: 'rgba(197, 158, 112, 1)'}}>12, 1st East Main Rd, Vidyapeeta Layout, ITI
                        Layout, Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070</p>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase  mt-3 text-white">INFORMATION</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us </a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase  mt-3 text-white">QUICK LINKS</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="/events2">Events</a></li>
                            <li><a href="/gallery">Gallery </a></li>
                            <li><a href="/collaborate">Collaborate</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase  mt-3 text-white">Connect with us</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="tel:+91 123456789"> <i className="bi bi-telephone me-2"></i> 9900579347 </a></li>
                            <li><a href="mailto:info@ieto.com"><i className="bi bi-envelope me-2"></i> Kalasindhu@gmail.com </a>
                            </li>
                            <li><a href="https://www.instagram.com/kalasindhu_academy" target='_blank'> <i className="bi bi-instagram me-2"></i>@dKalasindhu</a></li>
                        </ul>
                    </div>
                </div>


                <div className="text-center mt-5 ">
                    <p className="footer-alt mb-0 text-white">2025 © <span className='text-warning'>KALASINDHU </span>, All
                        Rights
                        Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer