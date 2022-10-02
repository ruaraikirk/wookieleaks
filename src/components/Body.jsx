import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
// import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Modal from './Modal';
import errorBoundaryHOC from './ErrorBoundary/ErrorBoundaryHOC';

// TODO Integrate SWAPI show a paginated list of all characters in the Star Wars universe ordered by name.

const nameList = [
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker',
  'Luke Skywalker'
];

const Body = () => {
  const [list, setList] = useState(nameList);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="flex justify-around flex-1 overflow-auto">
      <Modal visible={modalOpen} onClose={() => setModalOpen(false)} name="Luke Skywalker" />
      <InfiniteScroll
        className="w-10/12"
        loadMore={() => setList([...list, ...nameList])}
        hasMore={true}
        loader={
          <div key="loader" className="loader">
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {list.map((item, i) => (
          <ListItem key={`${item}_${i}`} name={item} handleClick={setModalOpen} />
        ))}
      </InfiniteScroll>
    </main>
  );
};

// Body.propTypes = {};

export default errorBoundaryHOC(Body);
