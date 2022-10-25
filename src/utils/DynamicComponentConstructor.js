import dynamic from "react-dynamic-import";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  getSanityWidget,
  getSanityRichTextWidgetMapper,
} from "@utils/layoutUtils";

const   SanityWidgetComponent = (props) => {
  const {
    widgetType, widgetSubType, loading, ...rest
  } = props;

  const [ComponentIn, setComponentIn] = useState(null);
  useEffect(() => {
    const widgetName = widgetSubType ? getSanityRichTextWidgetMapper(widgetSubType) : getSanityWidget(widgetType);
    if (widgetName) {
      const componentIn = dynamic({
        loader: widgetName && (() => import(`@widgets/${widgetName}`)),
        placeholder: loading,
      })
      setComponentIn(componentIn);
    }
  }, [widgetType, loading]);
  return ComponentIn ? (<ComponentIn {...rest} />) : null;
};

SanityWidgetComponent.defaultProps = {
  loading: undefined,
  widgetSubType: undefined,
};

SanityWidgetComponent.propTypes = {
  widgetType: PropTypes.string.isRequired,
  widgetSubType: PropTypes.string,
  loading: PropTypes.func,
};

export {
  SanityWidgetComponent,
};
