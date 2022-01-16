import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import userConfig from '../../config';

import Header from '../components/Header';

import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import FeaturedImage from '../components/FeaturedImage';
import PageNav from '../components/PageNav';
import Share from '../components/Share';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { author } = data.site.siteMetadata
  const { frontmatter, html } = markdownRemark
  const { previous, next } = pageContext;

  let url = '';
  if (typeof window !== `undefined`) {
    url = window.location.href;
  }
  
  return (
    
    <div>
      <Header config={userConfig} />
      {console.log(frontmatter)}
      <Container>
        <Helmet
          title={`${frontmatter.title} | ${author}`}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <Card>
          <ArticleHeader>
            {frontmatter.featuredImage && (
              <FeaturedImage
                image={frontmatter.featuredImage}
              />
            )}
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <span />
          </ArticleHeader>
          <Article>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Article>
          {userConfig.showShareButtons && (
            <Share url={url} title={frontmatter.title} email={userConfig.social.emailAddress} />
          )}
        </Card>

        <PageNav>
          {previous && (
            <Button to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Button>
          )}

          {next && (
            <Button to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Button>
          )}
        </PageNav>
      </Container>
  </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;
