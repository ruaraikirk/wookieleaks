import React from 'react';
import { describe, expect, it } from 'vitest';
// eslint-disable-next-line import/named
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Modal from '../index';
import PERSON_QUERY from '../queries/personQuery';

const mockModalData = { visible: true, id: 'cGVvcGxlOjE=' };

describe('Modal test', () => {
  it('Loading element alt and src contains correct value', () => {
    const loadingMock = [
      {
        request: {
          query: PERSON_QUERY,
          variables: {
            id: 'cGVvcGxlOjE='
          }
        },
        result: {
          data: {}
        }
      }
    ];

    render(
      <MockedProvider mocks={loadingMock} addTypename={false}>
        <Modal modalData={mockModalData} onClose={() => null} />
      </MockedProvider>
    );

    const loadingImage = document.querySelector('img');
    expect(loadingImage.alt).toContain('loading');
    expect(loadingImage.src).toContain('/src/assets/loading.gif');
  });

  it('renders without error', async () => {
    const personMock = {
      request: {
        query: PERSON_QUERY,
        variables: {
          id: 'cGVvcGxlOjE='
        }
      },
      result: {
        data: {
          person: {
            name: 'Luke Skywalker',
            id: 'cGVvcGxlOjE=',
            birthYear: '19BBY',
            eyeColor: 'blue',
            homeworld: { name: 'Tatooine', __typename: 'Planet' },
            filmConnection: {
              edges: [
                { node: { title: 'A New Hope', episodeID: 4, __typename: 'Film' }, __typename: 'PersonFilmsEdge' },
                {
                  node: { title: 'The Empire Strikes Back', episodeID: 5, __typename: 'Film' },
                  __typename: 'PersonFilmsEdge'
                },
                {
                  node: { title: 'Return of the Jedi', episodeID: 6, __typename: 'Film' },
                  __typename: 'PersonFilmsEdge'
                },
                {
                  node: { title: 'Revenge of the Sith', episodeID: 3, __typename: 'Film' },
                  __typename: 'PersonFilmsEdge'
                }
              ],
              __typename: 'PersonFilmsConnection'
            },
            __typename: 'Person'
          }
        }
      }
    };

    render(
      <MockedProvider mocks={[personMock]} addTypename={false}>
        <Modal modalData={mockModalData} onClose={() => null} />
      </MockedProvider>
    );

    expect(await screen.findByText('Luke Skywalker')).toBeDefined();
    expect(await screen.findByText('19BBY')).toBeDefined();
    expect(await screen.findByText('blue')).toBeDefined();
    expect(await screen.findByText('Tatooine')).toBeDefined();
  });

  it('Should show error UI', async () => {
    const errorMock = {
      request: {
        query: PERSON_QUERY,
        variables: {
          id: 'cGVvcGxlOjE='
        }
      },
      error: new Error('An error occurred')
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Modal modalData={mockModalData} onClose={() => null} />
      </MockedProvider>
    );

    expect(await screen.findByText('Error! Something has gone wrong, try again later.')).toBeDefined();
  });
});
