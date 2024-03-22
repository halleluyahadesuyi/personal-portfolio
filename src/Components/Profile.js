import React from "react"
import ProgressiveImage from "./ProgressiveImageLoading/ProgressiveImage";
import profileBackground from "../img/profile-bg.jpg"
import personalPicture from "../img/profile-img.jpg"

export default function Profile() {
  return (
    <section className="img-and-name">
      <ProgressiveImage
        src={profileBackground}
        placeholderSrc={profileBackground}
        alt="Profile Background"
        className="profile-bg"
      />
      <ProgressiveImage
        src={personalPicture}
        placeholderSrc={personalPicture}
        alt="Profile Image"
        className="profile-img"
      />
      <div className="name-and-job-title">
        <h4 className="name">HALLELUYAH ADESUYI</h4>
        <h5 className="job-title">Frontend Developer</h5>
      </div>
    </section>
  );
}
