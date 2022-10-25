/**
 * Copyright(c) 2020 Mozanta Technologies Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Mozanta
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Mozanta.
 *
 * @author Afsal M
 *
 */

import PropTypes from 'prop-types';
import React, {
  useContext, useEffect, useState,
} from 'react';
import UserContext from '@components/context/UserContext';
import { useMediaQuery } from 'react-responsive';
import { getWidgetLayoutFileName } from '@utils/layoutUtils';
import ComponentConstructor from '@utils/DynamicComponentConstructor';

const Wrapper = props => {
  const { children, minWidth, maxWidth } = props;
  return useMediaQuery({ minWidth, maxWidth }) ? children : null;
};

const ResponsiveWrapper = React.memo(props => {
  const { breakpoints } = useContext(UserContext);
  const {
    children, xs, sm, md, lg, xl,
  } = props;

  if (!xs && !sm && !md && !lg && !xl) {
    return children;
  }

  const [views, setViews] = useState([]);

  useEffect(() => {
    const viewBreaks = [];
    const hasView = false;
    let viewBreak = { minWidth: 0, maxWidth: 0 };

    if (!hasView && breakpoints.xs && xs) {
      const minWidthIn = 0;
      const maxWidthIn = breakpoints.xs.maxWidth || 360;
      const minWidth = Math.min(viewBreak.minWidth, minWidthIn);
      const maxWidth = Math.max(viewBreak.maxWidth, maxWidthIn);
      viewBreak = { minWidth, maxWidth };
    } else {
      const minWidth = 1 + (breakpoints.xs.maxWidth || 360);
      viewBreak = { ...viewBreak, minWidth };
    }
    if (breakpoints.sm && sm) {
      const minWidthIn = 1 + (breakpoints.xs.maxWidth || 360);
      const maxWidthIn = breakpoints.sm.maxWidth || 768;
      const minWidth = Math.min(viewBreak.minWidth, minWidthIn);
      const maxWidth = Math.max(viewBreak.maxWidth, maxWidthIn);
      viewBreak = { minWidth, maxWidth };
    } else {
      if (viewBreak.maxWidth > viewBreak.minWidth) {
        viewBreaks.push(viewBreak);
      }
      const minWidth = 1 + (breakpoints.sm.maxWidth || 768);
      viewBreak = { ...viewBreak, minWidth };
    }
    if (breakpoints.md && md) {
      const minWidthIn = 1 + (breakpoints.sm.maxWidth || 768);
      const maxWidthIn = breakpoints.md.maxWidth || 1024;
      const minWidth = Math.min(viewBreak.minWidth, minWidthIn);
      const maxWidth = Math.max(viewBreak.maxWidth, maxWidthIn);
      viewBreak = { minWidth, maxWidth };
    } else {
      if (viewBreak.maxWidth > viewBreak.minWidth) {
        viewBreaks.push(viewBreak);
      }
      const minWidth = 1 + (breakpoints.md.maxWidth || 1024);
      viewBreak = { ...viewBreak, minWidth };
    }
    if (breakpoints.lg && lg) {
      const minWidthIn = 1 + (breakpoints.md.maxWidth || 1024);
      const maxWidthIn = breakpoints.lg.maxWidth || 1440;
      const minWidth = Math.min(viewBreak.minWidth, minWidthIn);
      const maxWidth = Math.max(viewBreak.maxWidth, maxWidthIn);
      viewBreak = { minWidth, maxWidth };
    } else {
      if (viewBreak.maxWidth > viewBreak.minWidth) {
        viewBreaks.push(viewBreak);
      }
      const minWidth = 1 + (breakpoints.lg.maxWidth || 1440);
      viewBreak = { ...viewBreak, minWidth };
    }
    if (xl) {
      const minWidthIn = 1 + ((breakpoints.xl && breakpoints.xl.maxWidth) || 4000);
      const minWidth = Math.min(viewBreak.minWidth, minWidthIn);
      viewBreak = { minWidth };
      viewBreaks.push(viewBreak);
    } else if (viewBreak.maxWidth > viewBreak.minWidth) {
      viewBreaks.push(viewBreak);
    }
    setViews(viewBreaks);
  }, [children, xs, sm, md, lg, xl]);

  let component;
  views.some(breakPoint => {
    component = <Wrapper children={children} minWidth={breakPoint.minWidth} maxWidth={breakPoint.maxWidth} />;
    return component.ref;
  });
  return [component];
});

ResponsiveWrapper.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

ResponsiveWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const LayoutConstructor = React.memo(props => {
  const breakpointKeys = ['xl', 'lg', 'md', 'sm', 'xs'];
  const {
    widgetId, layoutId, content, widgetType, defaultLayout, breakpoints, loading,
  } = props;

  const [views, setViews] = useState([]);

  useEffect(() => {
    const localBreakpoints = breakpoints && typeof breakpoints === 'object' ? breakpoints : {};
    let layoutKeys = [];
    const breakViews = [];

    if (!localBreakpoints.lg) {
      localBreakpoints.lg = { layoutId };
    }
    breakpointKeys.forEach(key => {
      layoutKeys.push(key);
      if (localBreakpoints && localBreakpoints[key]) {
        if (localBreakpoints[key].hide) {
          layoutKeys.splice(-1, 1);
        } else {
          const breakPointLayout = localBreakpoints[key].layoutId;
          const view = breakPointLayout ? getWidgetLayoutFileName(widgetType, breakPointLayout) : defaultLayout;
          breakViews.push({ key: layoutKeys, layout: `${widgetId}/layouts/${view}` });
          layoutKeys = [];
        }
      } else if (breakViews.length > 0) {
        const lastBreakpointView = breakViews[breakViews.length - 1];
        breakViews[breakViews.length - 1] = { ...lastBreakpointView, key: [...lastBreakpointView.key, ...layoutKeys] };
        layoutKeys = [];
      }
    });

    setViews(breakViews);
  }, [widgetType, layoutId, breakpoints]);

  if (Array.isArray(views) && views.length === 1 && Array.isArray(views[0].key) && views[0].key.length === breakpointKeys.length) {
    const { layout } = views[0];
    return (<ComponentConstructor {...content} path={layout} />);
  }

  return Array.isArray(views) ? views.map(({ key, layout }, index_) => {
    const keyObject = {};
    key.forEach(k => { keyObject[k] = true; });
    return (
      <ResponsiveWrapper key={index_} {...keyObject}>
        <ComponentConstructor
          {...content}
          path={layout}
          loading={loading}
        />
      </ResponsiveWrapper>
    );
  }) : null;
});

LayoutConstructor.defaultProps = {
  breakpoints: {},
  loading: undefined,
};

LayoutConstructor.propTypes = {
  widgetId: PropTypes.string.isRequired,
  layoutId: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  widgetType: PropTypes.string.isRequired,
  defaultLayout: PropTypes.string.isRequired,
  breakpoints: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.func,
};

export {
  LayoutConstructor,
};

export default ResponsiveWrapper;
