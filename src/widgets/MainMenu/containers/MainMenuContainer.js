import MainMenu from '@widgets/MainMenu/layouts/MainMenu';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

const MainMenuContainer = props => {
  const [contents,setContents] = useState(null);
  const { sanityHeader } = useStaticQuery(graphql`
    {
      sanityHeader {
        _rawCategories
        _rawBrandLogo
        _rawHeaderLabel
      }
    }
  `);
  useEffect(()=>{
    setContents(sanityHeader)
  },[sanityHeader,sanityHeader?._rawCategories,sanityHeader?._rawBrandLogo,sanityHeader?._rawHeaderLabel])
  return (
    <MainMenu
    categories={contents?._rawCategories}
    logo={contents?._rawBrandLogo}
    contents={contents?._rawHeaderLabel}
    />
  );
};
export default MainMenuContainer;
