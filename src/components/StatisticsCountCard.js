import React from "react";
import propTypes from "prop-types";
import CountUp from "react-countup";

class StatisticsCountCard extends React.Component {
  // Handle redirect url
  handleRedirect = () => {
    return (window.location = this.props.redirectUrl);
  };

  render() {
    const { count, label } = this.props;

    return (
      <div
        className="card shadow-none mb-3 cursor-pointer"
        onClick={this.handleRedirect}
      >
        <h2 className="text-center mt-3 font-weight-bold">
          <CountUp separator="," start={0} end={count} duration={3} />
          <h5 className="text-center text-secondary">{label}</h5>
        </h2>
      </div>
    );
  }
}

StatisticsCountCard.propTypes = {
  count: propTypes.number.isRequired,
  label: propTypes.string.isRequired
};

export default StatisticsCountCard;
