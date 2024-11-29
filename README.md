# Saticoy - Service - Login Form

This repository contains the code for the Login Page microservice of the Saticoy project. This microservice is responsible for handling the login form and authenticating users. It is written in TypeScript and uses ReactJS for the front-end. It uses the `@saticoy/ui` library to make sure the backend is in line with all other front-end services. At the backend, it uses the `@saticoy/core` library to do the backend operations for Saticoy.

## Code installation

To install the code locally, run the following commands:

```bash
npm install
```

## Run the code

To run the code, use the following command:

```bash
npm run dev
```

## Build the code

To build the distribution for this service, run the following commands:

```bash
npm run build
```

## Storybook

This project uses Storybook for developing components in isolation. To run Storybook, use the following command:

```bash
npm run storybook
```

This will only give you the components thatare used in this service. If you want to see all the components defined in the `@saticoy/ui` library, you have to run the Storybook for that library. To do that, go to the `@saticoy/ui` library and run the Storybook there.