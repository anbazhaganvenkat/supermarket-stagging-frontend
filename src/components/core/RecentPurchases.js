import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "../core/Button";
import createLandingIcon from "../../assets/pages/landing-page/create-landing-page.png";

export default class RecentPurchases extends React.Component {
  render() {
    const { status, projectName, price, bannerImage, projectId } = this.props;

    return (
      <>
        <div className="row mb-3">
          <div className="col">
            <div className="section-title">
              <span className="h1">Recent Purchases</span>
            </div>
          </div>
        </div>

        <div>
          <Card className="mx-auto w-100" style={{ height: "80px" }}>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={bannerImage}
                  size="30"
                  alt=""
                  style={{
                    width: "144px",
                    height: "80px",
                    backgroundColor: "#009DDA"
                  }}
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-2 mt-4">
                    <span
                      className="status text-white p-1"
                      style={{
                        borderRadius: "7px",
                        fontWeight: "600",
                        backgroundColor: "#009DDA"
                      }}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "45px",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      <strong className="multiline-ellipsis">
                        {projectName}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-2 mt-4">
                    <strong style={{ color: "#2AD587" }}>${price}</strong>
                  </div>
                  <div className="col-md-4 mt-3">
                    <Link to={`/project/edit/${projectId}`}>
                      <Button name="gotoproject" label="Go to my Project" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
