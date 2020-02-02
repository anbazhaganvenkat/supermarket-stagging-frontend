import React from "react";
import PropTypes from "prop-types";
import ExpertCard from "./ExpertCard";

class ExpertGrid extends React.Component {
  render() {
    const {
      id,
      data,
      size,
      link,
      handleExperts,
      certified,
      openLinkInNewTab
    } = this.props;

    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4 expert-card">
        <ExpertCard
          classnames="expert-card"
          data={data}
          size={size}
          key={id}
          certified={certified}
          handleExperts={handleExperts}
          link={link}
          openLinkInNewTab={openLinkInNewTab}
        />
      </div>
    );
  }
}

ExpertGrid.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string,
  handleExperts: PropTypes.func,
  certified: PropTypes.string
};

export default ExpertGrid;
