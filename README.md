### Technical Details:

Boilerplate - react-create-app
Custom react Hooks
CSS - tailWind css
unit testing - @testing-library

1. Componentized each component into specific folder with added unit test file, I prefer to have the all the relevant files of the component in the same folder so it makes developers to get full context of the component without looking up multiple folders.
2. Used @testing-library for unit test though I am familiar with enzyme and jest, i like how simple the library API is and also refactoring is much easier, this library also helps to decouple from implementation details
3. Created a custom hook though I can have it right inside the component, I would like to separate out the asynchronous operations out of the component and make the component behavior more predictable.
4. added prop-types to the all the components which helps to self document the component and type of the property to pass in, in tsx world this can take care by typescript types( can be interfaces if needed )
5. depending on the type of project I would choose feature first folder or functionality first folder structure, in this case I choose functionality specific folder structure since it's entirely one single feature(click to showcase images).
6. Used functional components extensively to avoid the overhead of class components, but I am very much comfortable with all the component life cycles in react.

### To Install Dependencies

```
yarn
```

### Start Development Server

```
yarn start
```

### Run tests

```
yarn test
```
