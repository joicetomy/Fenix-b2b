import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import Button from '@core/Button';
import { isListNotEmpty } from '@utils/commonUtils';
import { constants } from '@utils/constants';
import { Link } from 'gatsby';

const BlockContent = ({ data, wrapperClass, customButton: CustomButton }) => {
  const getFormattedText = (mark, children) => {
    if (mark.fontSize === 'h2') {
      return (
        <span
          className='text-title'
          style={{
            fontFamily: mark?.fontName === 'initial' ? '' : mark?.fontName,
            color: mark?.fontColor?.hex,
          }}
        >
          {children}
        </span>
      );
    }
    if (mark.fontSize === 'h5') {
      return (
        <span
          className='text-sub-title'
          style={{
            fontFamily: mark?.fontName === 'initial' ? '' : mark?.fontName,
            color: mark?.fontColor?.hex,
          }}
        >
          {children}
        </span>
      );
    }
    if (mark.fontSize === 'normal') {
      return (
        <span
          className='text-normal'
          style={{
            fontFamily: mark?.fontName === 'initial' ? '' : mark?.fontName,
            color: mark?.fontColor?.hex,
          }}
        >
          {children}
        </span>
      );
    }
    return (
      <span
        className='text-normal'
        style={{
          fontFamily: mark?.fontName === 'initial' ? '' : mark?.fontName,
          color: mark?.fontColor?.hex,
        }}
      >
        {children}
      </span>
    );
  };
  getFormattedText.propTypes = {
    mark: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.symbol.isRequired,
  };

  const serializer = {
    types: {
      block: values => {
        const { node, children } = values;
        if (isListNotEmpty(children) && children[0] === '') {
          return <br />;
        }
        if (node?.style === 'normal') {
          return (
            <div
              className={wrapperClass}
              style={{ textAlign: 'left' }}
            >
              {children}
            </div>
          );
        }
        return (
          <div
            className={wrapperClass}
            style={{ textAlign: node?.style || '' }}
          >
            {children}
          </div>
        );
      },
      table: values => {
        const { node } = values;
        const headers = [];
        Object.entries(node?.tableHeaders || {}).forEach((each, index) => {
          if (each[0] !== constants.TYPE) {
            headers.push({ index, key: each[0], value: each[1] });
          }
        });
        return (
          <div className='table-responsive'>
            <table className='rich-text-table'>
              <thead>
                <tr>
                  {isListNotEmpty(headers)
                    ? (
                      headers.map(each => (
                        <th>{each?.value}</th>
                      ))
                    )
                    : ''}
                </tr>
              </thead>
              <tbody>
                {isListNotEmpty(node?.tableRows)
                  ? (node?.tableRows.map(row => (
                    <tr>
                      {headers.map(each => (
                        <td style={{
                          fontWeight: each.key === 'column1' ? 'bold' : '',
                        }}
                        >
                          {row[each.key]}
                        </td>
                      ))}
                    </tr>
                  ))
                  )
                  : ''}
              </tbody>
            </table>
          </div>
        );
      },
    },
    marks: {
      textFormat: values => {
        const { mark, children } = values;
        if (mark?.callToAction && mark?.callToAction?.hasCta) {
          if (mark?.callToAction?.callToActionType === 'button') {
            return (
              CustomButton
                ? (
                  <CustomButton
                    mark={mark}
                  >
                    {getFormattedText(mark, children)}
                  </CustomButton>
                )
                : (
                  <Button
                    style={{
                      backgroundColor: mark?.callToAction?.backgroundColor?.hex,
                      borderColor: mark?.callToAction?.backgroundColor?.hex,
                    }}
                  >
                    {getFormattedText(mark, children)}
                  </Button>
                )
            );
          }
          if (mark?.callToAction?.linkType === 'External') {
            return <a href={mark?.callToAction?.href || ''}>{getFormattedText(mark, children)}</a>;
          }
          return <Link to={mark?.callToAction?.href || ''}>{getFormattedText(mark, children)}</Link>;
        }
        return getFormattedText(mark, children);
      },
    },
    list: values => {
      const { children, type } = values;
      if (children && type === 'bullet') {
        return (
          <>
            <span>{children}</span>
          </>
        );
      }
      if (children && type === 'number') {
        return (
          <>
            <ul className='list-numbers'>
              {children}
            </ul>
          </>
        );
      }
      return (
        <span>{children}</span>
      );
    },
  };

  serializer.propsTypes = {
    types: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  return (
    <div>
      <PortableText className='block-content' blocks={data } serializers={serializer} />
    </div>
  );
};
BlockContent.defaultProps = {
  wrapperClass: '',
  customButton: null,
  data: [],
};
BlockContent.propTypes = {
  wrapperClass: PropTypes.string,
  customButton: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
};

export default BlockContent;
