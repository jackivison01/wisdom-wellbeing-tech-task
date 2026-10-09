# Wisdom Wellbeing Resource Centre

A single-page React application for browsing wellbeing resources by category.

The app displays podcasts, articles, newsletters, recipes, fitness, and meditation resources. Users can browse grouped resource cards, filter resources by title or tags, sort resources by newest upload date, and open a resource to view its full details.

## Features

- Resources grouped by category
- Resource cards displaying:
  - Title
  - Thumbnail image
  - Up to three tags
  - Duration
- Sort resources by newest upload date, or category A-Z
- Open a resource to view its description, upload date, category, tags, duration, and image
- Responsive layout built with Material UI
- TypeScript types for resource data
- Unit and component tests using Vitest and React Testing Library

## Tech Stack

- React
- TypeScript
- Vite
- Material UI
- Vitest
- React Testing Library
- pnpm

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

### Run tests

```bash
pnpm test
```

To run tests once rather than in watch mode:

```bash
pnpm test -- --run
```

## Testing and TDD Approach

This project was developed using a red-green-refactor approach.

I began with tests for the resource business logic before building the UI:

1. Grouping resources by category
2. Filtering resources by title and tags
3. Sorting resources by upload date

I then added component-level tests to verify that:

- A resource card displays the expected information.
- Selecting a resource triggers the selection handler.
- The resource detail dialog displays the selected resource's information.

Keeping grouping, filtering, and sorting as pure utility functions makes the core behaviour easy to test independently from the UI.

Once my initial development was complete, I carried out some user testing and made cosmetic improvements to improve the user experience.

## Project Structure

```text
src/
  components/
    ResourceCard.tsx
    ResourceCard.test.tsx
    ResourceDetails.tsx
    ResourceDetails.test.tsx
  models/
    resource.ts
  test/
    setup.ts
  utils/
    resourceUtils.ts
    resourceUtils.test.ts
  App.tsx
```

## Future Improvements

Given more time, I would consider adding:

- User-selectable sort options, such as oldest/newest and alphabetical category order
- Loading, error, and image fallback states
- A data-fetching layer to replace the local mock data
- Stronger validation on resource data payload
- Visual refinements, including skeleton loading states
- CICD pre-commit linting and prettier formatting as the prettier formatting was only added at the end
- CICD automated test runs
