import React from "react";
import Select from "./core/Select";

class Country extends React.Component {
  render() {
    const countryOptions = [
      {
        value: "US",
        label: "United States"
      }
    ];

    return (
      <Select
        name="country"
        label="Country"
        options={countryOptions}
        placeholder="Select Country"
        error=""
        notify="true"
        required
      />
    );
  }
}
export default Country;
