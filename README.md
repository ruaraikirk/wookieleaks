<p style="text-align: center;">
  <img src="src/assets/chewbacca_wookie_icon.svg" />
</p>
<p style="text-align: center; font-size: 42px">Wookieleaks</p>

Wookieleaks is a small web app built with Vite and React using SWAPI [via its GraphQL Wrapper](https://graphql.org/swapi-graphql).

## Live Demo

Hosted on [Netlify](https://lucent-hamster-a5cb19.netlify.app/)

## Tools

- Built using ![Vite](public/vite.svg) & ![React](public/react.svg)
- Tailwind CSS & daisyUI
- GraphQL & Apollo
- react-infinite-scroller

## Features
- Infinite scrolling of star wars characters
- Open modal to view more detailed information

## Local Development

1. Clone the repo.

   ```sh
   git clone git@github.com:ruaraikirk/wookieleaks.git
   ```

2. Install the packages by running `npm install`.

3. (Optional) Follow the instructions [here](https://github.com/graphql/swapi-graphql) to set up the SWAPI GraphQL Wrapper locally.

4. In the file `src/main.jsx`, change the Apollo Client uri parameter to the GraphiQL instance running locally at localhost (the actual port number will be printed to the console), or leave as the default if skipped step 3.

5. Start the application locally in dev mode.

   ```sh
   npm run dev
   ```

4. Verify by opening the following URL in broswer.
   ```sh
   http://127.0.0.1:5173/
   ```

## Tests

Some example testing of UI cna be run using the following command.

```sh
npm run test
```