# Reiz-Tech

## Installation

```
npm install
```

```
npm start
```

## About

Organizing and displaying countries based on filtered options.

## Technologies

React.js - front-end framework
Tailwind CSS - CSS framework
Axios - Data fetching

## Features

1. Can select any country from filtered results
2. Filter countries alphabetically
3. Filter by countries oceania region
4. filter countries by area size
5. Pagination
6. Filters options only appear if country exists
7. Optimized for the mobile experience
8. Error handling

# My experience and considerations

Overall, I had a great time building this application! However, the pagination implementation had me thinking, and I’m sure the architecture could be improved with a bit of guidance from a more experienced dev.

I opted to avoid context API and chose to pop drill as the app is still relatively small. Context is generally not that efficient at this point. If we wanted to add a host of new filter options, I would opt to use redux.

I created my own tooltip to explain the ascending/descending function. If filter options were to expand and if many of them needed explanations in the form of tooltips, I would opt to use this small package https://github.com/atomiks/tippyjs-react.

## Live-link

https://reiz-tech-app.netlify.app
