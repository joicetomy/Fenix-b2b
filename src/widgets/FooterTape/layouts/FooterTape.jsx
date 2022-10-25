import { Link } from "gatsby";
import PropTypes from 'prop-types';
import React from 'react';
import Img from '../../../components/common/SanityImage';


const renderSeprator = (index, length, seperator) => (seperator && index < length ? `${seperator}` : '');
const FooterTape = ({ content }) => (
  <>
    <div className='footer-content content'>
      <ul className='social-media'>
        <li className='social-media-item'>
          <div className='social-media-text content'>{content?._rawFooterLeft?.title}</div>
        </li>
        {content?._rawFooterLeft?.socialMediaBlock.map(socialMediaItem => (
            <li className='social-media-item' key={`socialMediaItem-${socialMediaItem.name}`}>
              <a href={socialMediaItem?.link} target='_blank' rel='noreferrer' title={socialMediaItem?.name} className='social-media-link content' aria-label='Social media link'>
                {socialMediaItem?.icon?.asset
                  ? (
                    <div className='social-media-icon'>
                      <Img
                        className='w-100'
                        id={socialMediaItem?.icon?.asset ? socialMediaItem?.icon?.asset._ref : ''}
                      />
                    </div>
                  ) : ''}
                <div className='social-media-text content'>{socialMediaItem?.name}</div>
              </a>
            </li>
          ))}
      </ul>
      <div className='footer-links'>
        {content?._rawFooteritemsBlock.map((footerItem, index) => (
            <React.Fragment key={`footer-item-${index}`}>
              {footerItem?.callToAction === 'internal'
                ? <Link to={footerItem.link} className='text-link mx-1 content'>{footerItem?.name}</Link>
                : <a href={footerItem.link} className='text-link mx-1 content' aria-label='Footer Name'>{footerItem?.name}</a>}
              {renderSeprator(index, content?._rawFooteritemsBlock.length - 1, content?.seperator)}
            </React.Fragment>
          ))}
      </div>
    </div>
  </>
);

FooterTape.defaultProps = {
  content: null,
};
FooterTape.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
};
export default FooterTape;
