import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { PostItem } from 'components/PostItem';
import { PaginationBar } from 'components/PaginationBar'; 
import { getFeed } from 'api/feed';
import { Store } from 'interfaces';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((store: Store) => store);
  const [ page, setPage ] = useState<number>(0);
  const PER_PAGE = 10;

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p - 1);
  };

  return (
    <>
      <Typography variant="h6">Trending Feed</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiCard-root': {
            margin: '15px',
            flexBasis: '25%',
            minWidth: '250px',
          },
        }}
      >
        {feed
          .slice(page * PER_PAGE, (page + 1) * PER_PAGE)
          .map(post => <PostItem key={post.id} post={post} />)}
      </Box>
      <PaginationBar handleChange={handlePagination} current={page + 1} length={feed.length} perPage={PER_PAGE} />
    </>
  );
};
