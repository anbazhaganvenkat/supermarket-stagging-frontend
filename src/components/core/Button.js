import React from "react";
import { Button as ReactButton } from "reactstrap";

class Button extends React.Component {
  render() {
    const {
      size,
      active,
      disabled,
      outline,
      children,
      color,
      type,
      className,
      onClick,
      icon,
      hideTextInMobile,
      block,
      label,
      align
    } = this.props;

    return (
      <ReactButton
        size={size}
        active={active}
        disabled={disabled}
        outline={outline}
        onClick={onClick}
        type={type || "button"}
        block={block}
        className={`m-1 float-${align} ${className}`}
        style={{ backgroundColor: color, borderColor: color }}
      >
        {hideTextInMobile && (
          <span className={"d-none d-sm-none d-md-inline-block"}>
            {icon && (
              <i style={icon ? { marginRight: 5 } : {}} className={icon} />
            )}
            {hideTextInMobile}
          </span>
        )}
        {label && (
          <span
            className={
              hideTextInMobile
                ? "d-block d-sm-block d-md-none d-lg-none d-lg-none"
                : ""
            }
          >
            {icon && (
              <i style={icon ? { marginRight: 5 } : {}} className={icon} />
            )}
            {label}
          </span>
        )}
      </ReactButton>
    );
  }
}

export default Button;
