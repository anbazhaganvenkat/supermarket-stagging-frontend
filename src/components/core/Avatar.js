import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../assets/default-avatar.png";

class Avatar extends React.Component {
  render() {
    const {
      url,
      firstName,
      lastName,
      defaultUrl,
      size,
      bgColor,
      color,
      square,
      customSize,
      imageSize,
      fontSize,
      className
    } = this.props;

    const sizes = {
      xs: 32,
      sm: 45,
      md: 60,
      lg: 100,
      customSize: parseInt(imageSize, 10)
    };

    let dimension;
    if (customSize) {
      dimension = customSize;
    }

    if (!dimension && size) {
      dimension = sizes[size];
    }

    if (!dimension) {
      dimension = sizes["sm"];
    }

    const defaultStyle = {
      width: dimension,
      height: dimension,
      display: "block",
      borderRadius: square ? "5px" : "50%"
    };

    if (url) {
      let backgroundImage = `url(${url})`;
      if (defaultUrl) {
        backgroundImage = `${backgroundImage}, url(${defaultUrl})`;
      }

      const style = Object.assign({}, defaultStyle, {
        backgroundSize: "cover",
        backgroundImage
      });

      return <div style={style} />;
    }

    if (firstName || lastName) {
      const initial = [];
      if (firstName) {
        initial.push(firstName[0]);
      }

      if (lastName) {
        initial.push(lastName[0]);
      }

      if (initial.length === 1 && firstName) {
        initial.push(firstName[1]);
      }

      if (initial.length === 1 && lastName) {
        initial.push(lastName[1]);
      }

      if (initial.length > 0) {
        const style = Object.assign({}, defaultStyle, {
          lineHeight: `${dimension}px`,
          backgroundColor: bgColor || "#212121",
          color: color || "#ffffff",
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: fontSize || 15,
          letterSpacing: 1
        });

        return <div style={style}>{initial.join("")}</div>;
      }
    }

    if (defaultUrl) {
      const style = Object.assign({}, defaultStyle, {
        backgroundSize: "cover",
        backgroundImage: `url(${defaultUrl})`
      });

      return <div style={style} />;
    }

    const style = Object.assign({}, defaultStyle, {
      backgroundSize: "cover",
      backgroundImage: `url(${defaultAvatar})`
    });

    return <div className={className} style={style} />;
  }
}

Avatar.propTypes = {
  url: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  defaultUrl: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  square: PropTypes.bool,
  customSize: PropTypes.number
};

export default Avatar;
