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
6. Error handling

## My experience and considerations

I had to spend some time thinking about the pagination implementation. I'm sure the pagination architecture could be improved with a little guidance from a more experienced dev.

I opted to avoid context API and chose to pop drill as the app is still relatively small. Context is generally not that efficient at this point in time. If we wanted to add a host of new filter options I would opt to use redux in that case.

I created my own tooltip to explain the ascending/descending function. If filter options were to expand and if many of them needed explanations in the form of tooltips, I would opt to use this small package https://github.com/atomiks/tippyjs-react

Overall I had a great time building this application and hope it as satisfied the requirements of this task to a large degree.

## Live-link

https://reiz-tech-app.netlify.app
