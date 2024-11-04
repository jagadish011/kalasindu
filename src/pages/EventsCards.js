import React from 'react';
import { Link } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { FaRegClock } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';

const EventsCard = ({ eventLink, imgSrc, title, artist, date, time, location, price }) => {
  return (
    <Link to={eventLink} className="whats-new-card" style={{ textDecoration: "none" }}>
      <div className="card rounded-top-4" >
        <div className="card-wrapper">
          <div>
            <img className="rounded-top-4 img-fluid" src={imgSrc} alt={title} />
          </div>
          <div className="p-3 mb-2 bg-white text-dark rounded-bottom-4">
            <h3 className="fw-bold">{title}</h3>
            <p className="fw-bold">{artist}</p>
            <div>
              <div className="d-flex justify-content-start">
                <SlCalender className="mt-2" />
                <p className="ms-2 mb-2">{date}</p>
              </div>
              <div className="d-flex justify-content-start">
                <FaRegClock className="mt-2" />
                <p className="ms-2 mb-2">{time}</p>
              </div>
              <div className="d-flex justify-content-start">
                <IoLocationOutline className="fs-5 mt-2" />
                <p className="ms-2 mb-2">{location}</p>
              </div>
              <div className="d-flex justify-content-between align-item-center">
                <a
                  href={eventLink}
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  more info <GoArrowUpRight />
                </a>
                <p className="fw-semibold fs-5">{price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventsCard;
