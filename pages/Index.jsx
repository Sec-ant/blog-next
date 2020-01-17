import React from 'react';
import { Box, Main } from 'grommet';
import blogPosts from '../data/blog-posts';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const Index = () => (
  <>
    <AppBar>
      <p>My Blog in Next.js</p>
    </AppBar>
    <Main pad="large">
      {blogPosts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </Main>
  </>
);

export default Index;
