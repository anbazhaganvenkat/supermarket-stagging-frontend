import React, { useEffect, useState } from "react";
import { ChevronDown } from "../../assets/img/icons";
import Sentence from "./NLSentence";

const NLForm = props => {
  const {
    paragraphs,
    extraParagraphs,
    select,
    getSelectedFilters,
    liveFilters
  } = props;
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };

  return (
    <form action="#">
      {paragraphs.map((paragraph, index) => {
        return (
          <Sentence
            actualParagraph={paragraph}
            select={select}
            key={index}
            getSelectedFilters={getSelectedFilters}
            liveFilters={liveFilters}
          />
        );
      })}
      {!showFilters && (
        <div className="btn-wrapper">
          <button className="btn btn-primary">Discover Experts</button>
        </div>
      )}

      <div className={`show-more-filters ${!!showFilters && "filters-active"}`}>
        <button type="button" className="btn btn-link" onClick={toggleFilters}>
          <span className="text-primary">
            show {showFilters ? "less" : "more"} filters
          </span>
          <span className="circle-arrow-down">
            <ChevronDown />
          </span>
        </button>
      </div>

      {showFilters && (
        <>
          {extraParagraphs.map((paragraph, index) => {
            return (
              <Sentence
                actualParagraph={paragraph}
                select={select}
                key={index}
                getSelectedFilters={getSelectedFilters}
                liveFilters={liveFilters}
              />
            );
          })}
          <div className="btn-wrapper">
            <button className="btn btn-primary">Discover Experts</button>
          </div>
        </>
      )}
    </form>
  );
};

export default NLForm;
