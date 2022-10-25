import TopMenu from '@widgets/TopMenu/layouts/TopMenu';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

const TopMenuContainer = props => {
  const { sanityHeader } = useStaticQuery(graphql`
    {
      sanityHeader {
        _rawHeaderLabel
        _rawCatalogTabs
      }
    }
  `);
 
  const [hidePrice, setHidePrice] = useState(false);
  const [contents,setContents] = useState(null);
  
  const handleHidePrice = () => {
    setHidePrice(!hidePrice);
  };

  useEffect(() => { 
    setContents(sanityHeader);
  },[sanityHeader])

  return (
    (
      <TopMenu
        hidePrice={hidePrice}
        handleHidePrice={handleHidePrice}
        contents={contents}
      />
    )
  );
};
export default TopMenuContainer;
