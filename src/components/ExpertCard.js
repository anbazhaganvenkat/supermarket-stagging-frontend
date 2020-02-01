import React from "react";
import defaultAvatar from "../assets/default-avatar.png";
import USFlag from "../assets/img/mock_imgs/us-flag-icon-png-24.png";
import variables from "../scss/_variables.scss";

const ExpertCard = props => {
  const {
    id,
    bannerColor,
    avatarUrl,
    firstName,
    lastName,
    jobTitle,
    city,
    stateName,
    skills,
    timezone,
    availability,
    hourlyRate
  } = props.data;

  const { classnames, admin_data, readyForHire, handleExperts } = props;
  {
    /* / This condition will remove after removed avatar image attributes in ExpertCard */
  }
  let expertImage;
  if (avatarUrl) {
    expertImage = `url(${avatarUrl})`;
  } else {
    expertImage = `url(${defaultAvatar})`;
  }

  const {
    size,
    certified,
    link,
    openLinkInNewTab,
    selectExperts,
    isActive
  } = props;

  let name = [];
  if (firstName) {
    name.push(firstName);
  }
  if (lastName) {
    name.push(lastName);
  }

  name = name.join(" ");

  const location = [];
  if (city) {
    location.push(city);
  }
  if (stateName) {
    location.push(stateName);
  }

  const skillCount = skills && skills.length > 0 ? skills.length : 0;

  const showSkills = skills => {
    const max_skills = skills.length;
    let skills_arr = [];
    for (let i = 0; i < skills.length; i++) {
      skills_arr.push(
        <span className="badge badge-pill badge-dark">{skills[i].name}</span>
      );
      if (i === 1) {
        break;
      }
    }
    if (max_skills > 2) {
      skills_arr.push(
        <span className="badge badge-pill badge-orange">{`+${max_skills -
          2}`}</span>
      );
    }
    return skills_arr;
  };

  const isActiveExperts = isActive
    ? "active-experts far fa-check-circle"
    : "inactive-experts far fa-circle";
  const activeExperts = `float-right cursor-pointer ${isActiveExperts}`;

  return (
    <div
      className={`${size ? size : "col-4"} mb-4 cursor-pointer ${classnames}`}
      key={id}
      onClick={() => {
        {
          if (link) {
            openLinkInNewTab
              ? window.open(link)
              : window.location.replace(link);
          }
        }
      }}
    >
      <div className="card mx-auto" style={{ width: "255px" }}>
        <div
          className={`card-header ${
            certified ? "justify-content-start align-items-start" : ""
          }`}
          style={{
            backgroundImage: expertImage,
            backgroundColor: `${
              bannerColor ? bannerColor : variables.cardHeaderDefaultColor
            }`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {certified && (
            <div className="certification">
              <span className="badge badge-pill badge-primary">Certified</span>
            </div>
          )}
          {selectExperts && (
            <span
              onClick={() => handleExperts(id)}
              className={activeExperts}
              style={{
                right: "20px",
                top: "0.75rem",
                position: "absolute",
                color: "white",
                fontSize: "50px"
              }}
            />
          )}
        </div>
        <div className="card-body">
          <div
            className="user-and-title text-center cursor-pointer"
            onClick={() => {
              {
                if (link) {
                  openLinkInNewTab
                    ? window.open(link)
                    : window.location.replace(link);
                }
              }
            }}
          >
            <p>
              <b>{name}.</b>
              <span className="d-block h7">{jobTitle}</span>
            </p>
          </div>
          {/* /.user-and-title */}
          <div className="location">
            <div className="city-wrapper d-flex align-items-center justify-content-center">
              <i>
                <img src={USFlag} alt="us-flag" />
              </i>
              <span className="d-block">
                <small>{location.join(", ")}</small>
              </span>
            </div>
            {/* /.city-wrapper */}
            <div className="timezone-wrapper">
              {timezone && (
                <span className="d-block text-center text-grayed">
                  <small>Time Zone: {timezone}</small>
                </span>
              )}
            </div>
          </div>
          {admin_data && admin_data.phone && (
            <div className="rate text-center">
              <span className="h6-5 d-block text-grayed">Phone:</span>
              <span className="h6-5 d-block">{admin_data.phone}</span>
            </div>
          )}

          {admin_data && admin_data.email && (
            <div className="rate text-center">
              <span className="h6-5 d-block text-grayed">Email:</span>
              <span className="h6-5 d-block">
                <b>{admin_data.email}</b>
              </span>
            </div>
          )}

          {hourlyRate && (
            <div className="rate text-center">
              <span className="h5">
                <b>${hourlyRate}</b>
                <span className="text-grayed">/hr</span>
              </span>
            </div>
          )}

          {skills && (
            <div className="skills d-flex align-items-center justify-content-center">
              {skillCount > 0 && <div>{showSkills(skills)}</div>}
            </div>
          )}

          {availability && (
            <div className="rate text-center">
              <span className="h6-5 d-block text-grayed">Availability:</span>
              <span className="h6-5 d-block text-success">
                Less than 10 Hours per Week
              </span>
            </div>
          )}

          {readyForHire && (
            <div className="btn-wrapper text-center mt-4">
              <button className="btn btn-primary w-100">
                Work with Stephanie
              </button>
              <a href="#" className="text-link h6-5 d-block mt-3">
                Edit My Profile…
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
