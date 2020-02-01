import React, { Component } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { FilePlusIcon } from "../assets/img/icons";

class DragAndDropField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropzone: !this.props.hiddenDropzone,
      placeholderImageURL: null,
      numberOfLocalFiles: null
    };
  }

  setShowDropzone = () => {
    this.setState({ showDropzone: !this.state.showDropzone });
  };

  showImageOnSelection = acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        this.setState({
          placeholderImageURL: reader.result
        });
      };
      reader.readAsDataURL(file);
    });
  };

  setLocalFiles = acceptedFiles => {
    this.setState({
      numberOfLocalFiles: acceptedFiles.length
    });
  };

  render() {
    const {
      label,
      name,
      hiddenDropzone,
      btnLabel,
      acceptedFileTypes,
      multiple,
      imageDropzone
    } = this.props;

    const {
      showDropzone,
      placeholderImageURL,
      numberOfLocalFiles
    } = this.state;

    const files = this.props.files || "";

    return (
      <>
        {hiddenDropzone && !showDropzone && (
          <a
            href="#"
            className="btn btn-link d-inline-flex px-0 text-underline"
            onClick={this.setShowDropzone}
          >
            {btnLabel}
          </a>
        )}
        {showDropzone && label && <label>{label}</label>}
        <Dropzone
          onDrop={acceptedFiles => {
            if (imageDropzone) {
              this.showImageOnSelection(acceptedFiles);
            }
            this.setLocalFiles(acceptedFiles);
            this.props.bannerImageUpload(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={`${
                showDropzone ? "d-flex" : "d-none"
              } dropzone-wrapper`}
            >
              <div
                {...getRootProps({
                  className:
                    "dropzone text-center d-flex flex-column align-items-center justify-content-center"
                })}
              >
                <input
                  {...getInputProps({
                    name: name,
                    accept: acceptedFileTypes,
                    multiple: multiple
                  })}
                />
                {(imageDropzone && placeholderImageURL === null) ||
                (!imageDropzone && numberOfLocalFiles === null) ? (
                  <>
                    <div className="icon-wrapper mb-3">
                      <FilePlusIcon />
                    </div>
                    <p className="mb-0">Drag & Drop Files to Upload</p>
                    <span className="d-block text-grayed h6">
                      (or click to select)
                    </span>
                  </>
                ) : (
                  <>
                    {!imageDropzone && (
                      <>
                        <div className="icon-wrapper mb-3">
                          <FilePlusIcon />
                        </div>
                        <p className="mb-0">
                          {numberOfLocalFiles}{" "}
                          {numberOfLocalFiles > 1 ? "Files" : "File"} selected
                        </p>
                      </>
                    )}

                    {imageDropzone && (
                      <p className="mb-1">
                        <img
                          src={placeholderImageURL}
                          alt=""
                          style={{ maxWidth: "130px" }}
                        />
                      </p>
                    )}
                    <span className="d-block text-grayed h6">
                      (click to select or replace with new{" "}
                      {imageDropzone ? "image" : "files"})
                    </span>
                  </>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      </>
    );
  }
}

DragAndDropField.defaultProps = {
  name: "dropzone_name_placeholder",
  hiddenDropzone: false,
  acceptedFileTypes: "",
  bannerImageUpload: () => {
    console.log("uploadHandler");
  },
  imageDropzone: false,
  multiple: true
};

export default DragAndDropField;
