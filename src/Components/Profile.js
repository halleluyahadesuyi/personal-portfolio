import React from "react"
import profileBackground from "../img/profile-bg.jpg"
import personalPicture from "../img/profile-img.jpg"

export default function Profile() {
  return (
    <section className="img-and-name">
        <img 
            src={profileBackground}
            alt="Profile Background"
            className="profile-bg"
        />
        <img 
            src={personalPicture}
            alt="Profile Image"
            className="profile-img"
        />
        <div className="name-and-job-title">
            <h4 className="name">HALLELUYAH ADESUYI</h4>
            <h5 className="job-title">Frontend Engineer</h5>
        </div>
    </section>
  )
}
