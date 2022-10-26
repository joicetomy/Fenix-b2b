import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import FooterTape from '../layouts/FooterTape';

const FooterTapeContainer = () => {
  const data = useStaticQuery(graphql`
  {
    sanityFooter {
      _rawFooterLeft
      _rawFooteritemsBlock
    }
  }
`);
  const [content, setContent] = useState(null);
  useEffect(() => {
    setContent(data?.sanityFooter)
  }, [data?.sanityFooter,data?.sanityFooter._rawFooteritemsBlock,data?.sanityFooter?._rawFooterLeft]);
  return <FooterTape content={content} />;
};

export default FooterTapeContainer;
