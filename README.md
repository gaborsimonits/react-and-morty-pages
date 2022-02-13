After fetching paginated data of characters and locations of the famous TV show, Rick & Morty, using an open-source API, learned and implemented react custom hooks with paginated info and also added an infinite scroll to one of the pages where characters are shown.

https://gaborsimonits.github.io/react-and-morty-pages/

_____

# React and Morty

## Story

Do you know Rick and Morty?
If not, start watching it!

Anyways, the Rick and Morty universe is kinda big with lot of characters and locations.
You with your friends decided that you want to make it easier to look up information about each characters and locations.
You want to create a React app that with the use of an open-source API, shows information about everything you need.
Your friend built the tools for the data fetching, you just need to use the data and build the app.

## What are you going to learn?

- Using react custom hooks
- Using paginated data

## Tasks

1. Start with the landing page. When someone enters the web site, they will see a big Rick and Morty logo with 2 buttons under it. The buttons will be the trigger to show the characters or the locations  but as default a short description about the page is shown under the buttons.
    - When the page opens up, we see a Rick and Morty logo
    - Under the logo there are two button, one for `Characters` and one for `Locations`
    - Until one of the buttons are clicked, there is a description describing the website functionality

2. Create a component where the characters are listed. Since the data is paginated, make it possible to jump between the pages.
    - If we click on the `Characters` button, a list of characters shows up
    - The list contains character cards, one card shows the given character `image`, `name` and `species`
    - At the end of the list there is a pagination bar where we can switch between pagination pages

3. Create a component where the locations are listed. Since the data is paginated, make it possible to jump between the pages.
    - If we click on the `Locations` button, a list of locations shows up
    - The list contains location cards, one card shows the given planet `name` and `type`
    - At the end of the list there is a pagination bar where we can switch between pagination pages

4. Create a single character component that shows more specific information about a character. When someone click on a character in the pagination list the component shows up.
    - When we click on a character in the list, more infomration shows up from the character

5. Create a single location component that shows more specific information about a location. When someone click on a character in the pagination list the component shows up.
    - When we click on a location in the list, more infomration shows up from the location

6. Create tests for every cases where the user can interact with the application. Check that the interface works properly when you click on the `character` and `location` card.
    - There are test-cases that check whether the page loads successfuly
    - There are test-cases that check whether more information shows up from the character, when we click on a character in the list
    - There are test-cases that check whether more infomration shows up from the location, when we click on a location in the list
    - All the tests pass

7. [OPTIONAL] It is easier to jump between pagination pages by just scrolling down. When the user scrolls down to the bottom of the list of characters/locations, the next list of characters/locations shows up at the bottom of the list and the user can continue to scroll down.
    - When a list of characters/locations shows up and we scoll down to the bottom of the list, new characters/locations show up at the bottom of the list

## General requirements

None

## Hints

- Before you start the project, type `npm install`/`yarn install` in the terminal. That will create the `node_modules` folder for you.
- When you start the project, take a look at the console. The starter code log out the objects that you will get and how you can get the data.
- You don't need to understand what is going on in the given custom hooks, they are just aid you to have data that you can work with.
- If you want to get characters to present, use the `useCharacters` from `api/useData.js`.
  The requested data is too big to get in one JSON therefore a pagination list is returned. A pagination list has more pages with different objects. In this case one page contains 20 characters from page no. 1. If you want to get more characters from other pages, you just need to change the parameter of the `useCharacters` hook to the page number you want to get.
- The JSON you will get has 2 property: `info` that contains information about the pagination you requested and `results` that contains the characters from the pagination. It is true to the `useLocations` hook also. If you want to see an example of the JSON you get, you can find the documentation of the webpage you get the data from. YOU DON'T NEED TO CARE ABOUT THE API! Everything you need from the API is already writen. Just use the custom hooks from the `useData.js` file.

## Background materials

- <i class="far fa-exclamation"></i> [Custom hooks](https://reactjs.org/docs/hooks-custom.html)
- <i class="far fa-book-open"></i> [What is JSON?](https://en.wikipedia.org/wiki/JSON)
- <i class="far fa-book-open"></i> [What is pagination for?](https://www.interaction-design.org/literature/article/split-the-contents-of-a-website-with-the-pagination-design-pattern)
- <i class="far fa-book-open"></i> [Characters JSON example](https://rickandmortyapi.com/documentation/#character)
- <i class="far fa-book-open"></i> [Locations JSON example](https://rickandmortyapi.com/documentation/#location)
- <i class="far fa-exclamation"></i> [Jest](https://jestjs.io/docs/tutorial-react)
- <i class="far fa-exclamation"></i> [Mocking modules with jest](https://jestjs.io/docs/en/mock-functions#mocking-modules)
- <i class="far fa-exclamation"></i> [Mocking the data fetching with a module](https://www.npmjs.com/package/axios-mock-adapter)
