import React, { Fragment } from 'react';
import { Box, Container, Typography } from '@material-ui/core';

export default function Page404() {
  return (
    <Fragment>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1">
            404 - The page that you are looking for does not exist!
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
}
