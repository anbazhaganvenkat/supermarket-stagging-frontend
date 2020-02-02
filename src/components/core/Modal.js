import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import SecondaryButton from "./SecondaryButton";
/**
 * Render Add modal
 *
 * @param {*} param0
 */
const AddModal = ({
  toggle,
  isOpen,
  HeaderClassName,
  FooterClassName,
  modalTitle,
  modalBody,
  primaryBtnClassName,
  primaryColor,
  cancelColor,
  hideFooter,
  showAddButton,
  showDeleteButton
}) => (
  <div className="custom-popup">
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      keyboard={true}
      backdrop="static"
      size="lg"
      className={HeaderClassName}
    >
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      {modalBody}
      {hideFooter ? (
        ""
      ) : (
        <ModalFooter className={FooterClassName}>
          {showAddButton ? (
            <Button
              color={primaryColor}
              className={primaryBtnClassName}
              onClick={toggle}
            >
              ADD
            </Button>
          ) : (
            <Button
              type="submit"
              color={primaryColor}
              className={primaryBtnClassName}
              onClick={toggle}
            >
              Save
            </Button>
          )}
          <SecondaryButton
            color={cancelColor}
            onClick={toggle}
            label="Cancel"
          />
          {showDeleteButton && (
            <Button
              color={primaryColor}
              className={primaryBtnClassName}
              onClick={toggle}
            >
              DELETE
            </Button>
          )}
        </ModalFooter>
      )}
    </Modal>
  </div>
);
export default AddModal;
