See Challenge_Instructions.pdf for a description of the challenge and README.md for some screenshots of the ensuing application.

Here are some noteworthy aspects of the application.

General

- Uses axios to download JSON containing Pokemon information
- Navigates the Pokemon evolutionary tree
- Searchs for Pokemons by name
- Filters Pokemons by strengths and weaknesses

React Specific

- Uses React router

- Splits React components into Components and Containers
	- Components are stateless, pure React components
	- Containers maintain state and their markup contains Components

- Uses built-in useState, useEffect, useCallback, and useRef hooks
- Implements useDebounce and useFetch custom hooks that can be reused in other applications

JavaScript Specific

- Debounces input for the search component
- For performance, tracks strengths and weaknesses with bits
- Implements a modal with a backdrop
- The useFetch custom hook is a higher order function