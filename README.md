# Tag Discovery
[![ci](https://github.com/wellitongervickas/tagdiscovery/actions/workflows/cy.yml/badge.svg?branch=main)](https://github.com/wellitongervickas/tagdiscovery/actions/workflows/cy.yml)

[Demo](https://tagdiscovery.vercel.app/)

A nextjs project with:

- Tailwind css
- Postcss
- Typescript
- Eslit and prettier
- Cypress and jest
- Docker

## Before start

- yarn install

## Run with Docker

- docker build -t tagdiscovery-nextjs .
- docker run -dp 3000:3000 tagdiscovery-nextjs

**_dp: run docker image in background_**

Static build files will run on `localhost:3000`

## Run development mode

- yarn dev

## Run tests

- yarn test:watch
- yarn test:coverage

## Code quality

- yarn lint
- yarn format

### Run Cypress examples

- yarn dev
- yarn test:e2e

## Build

- yarn build
- yarn start

Static build files will run on `localhost:3000`
