// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/location', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Earth (C-137)',
          },
        ],
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
          },
        ],
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/location/1', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'Earth (C-137)',
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'Rick Sanchez',
      })
    );
  }),
  rest.get(
    'https://private-api-adzv.onrender.com/characters',
    (_req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: 'Rick Sanchez',
            status: '',
            species: '',
            gender: '',
            image: '',
            url: '',
            created: '',
            rating: 0,
          },
        ])
      );
    }
  ),
  rest.post(
    'https://private-api-adzv.onrender.com/characters',
    (req, res, ctx) => {
      return res(ctx.status(201));
    }
  ),
  rest.patch(
    'https://private-api-adzv.onrender.com/characters/:id',
    (_req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),
  rest.delete(
    'https://private-api-adzv.onrender.com/characters/:id',
    (_req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),
];
