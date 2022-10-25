import Layout from '@widgets/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import React, { Fragment, useEffect, useState } from 'react';
import { isListNotEmpty } from '../utils/commonUtils';
import { SanityWidgetComponent } from '../utils/DynamicComponentConstructor';

const HomePage = () => {
  const { sanityHomePage } = useStaticQuery(graphql`
  {
    sanityHomePage {
      _rawContents
    }
  }
`);
const [contents, setContent] = useState(null);


useEffect(() => {
  if (isListNotEmpty(sanityHomePage?._rawContents)) {
    setContent(sanityHomePage?._rawContents);
  }
}, [sanityHomePage?._rawContents]);
  return (
    <Layout>
      {
        isListNotEmpty(contents)
          ? contents?.map(content => (
            <Fragment key={`home-${content['_key']}`}>
                <SanityWidgetComponent
                widgetType={content['_type']}
                content={content}
                />
            </Fragment>
          ))
          : ''
      }
    </Layout>
  );
};

export default HomePage;
