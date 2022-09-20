import React from "react"
import profileBackground from "../img/profile-bg.jpg"
import personalPicture from "../img/profile-img.jpg"

export default function Profile() {
  return (
    <section class="img-and-name">
        <img 
            src={profileBackground}
            alt="Profile Background"
            class="profile-bg"
        />
        <img 
            src={personalPicture}
            alt="Profile Image"
            class="profile-img"
        />
        <div class="name-and-job-title">
            <h4 class="name">Halleluyah Adesuyi</h4>
            <h5 class="job-title">Frontend Developer</h5>
        </div>
    </section>
  )
}
