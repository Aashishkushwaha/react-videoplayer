import React from "react";
import { NavLink } from "react-router-dom";

const withLink = (WrappedComponent) => (props) => {
  const newProps = {
    ...props,
    video: {
      ...props.video,
      title: (
        <NavLink to={{ pathname: `/${props.video.id}`, autoplay: true }}>
          {props.video.title}
        </NavLink>
      ),
    },
  };
  return <WrappedComponent {...newProps} />;
};

export default withLink;
