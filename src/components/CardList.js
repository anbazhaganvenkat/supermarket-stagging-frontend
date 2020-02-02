import React from "react";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import ExpertGrid from "../components/ExpertGrid";

const CardList = props => {
  const { data, listType, isLoading, currentUrl } = props;
  const totalCount = data.length;

  return (
    <div className="card-list-wrapper">
      <span className="d-block font-weight-bold h6-5">
        Showing {totalCount} {totalCount > 1 ? `${listType}s` : listType}…
      </span>
      <div className="card-list row">
        {isLoading ? (
          <Spinner />
        ) : totalCount ? (
          <div className="row no-gutters">
            {data.map(expert => (
              <ExpertGrid
                id={expert.id}
                size="col-12"
                certified={true}
                data={expert}
                link={`/expert-profile/${expert.id}?redirect=${currentUrl}`}
                openLinkInNewTab={true}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

CardList.defaultProps = {
  listType: "results"
};

CardList.propTypes = {
  listType: PropTypes.string
};

export default CardList;
