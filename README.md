# PG Search Sequelize - Example

Demonstration of how to use the `pg-search-sequelize` library to search a database of films and actors.

# Demo

Try out this example's demo [here](https://project-demo.herokuapp.com/search).

# Run it locally

Prerequisites: Docker. If you don't want to use Docker, you'll need to have Postgres and Node.js 6.0.0 or above installed.

To start the server and database with docker, run:

```js
./init.sh
```

That's it. Now you can open your browser and navigate to the IP address of the `./init.sh` command.

# How It Works

Our database is very simple; we only have 3 tables: `film`, `actor`, and `film_actor`. Using `pg-search-sequelize`, we create a materialized view from the film and actor data. We give the film names the highest weight, details and cast get a lower weight, and the rest of the details follow in order. The weighting system allows our search results to be sorted by relevance depending on how we set it up. Because we gave movie names a higher order than cast names, a search query of "Washington" would yield a result of the movie "Washington Heights" before "Man on Fire," since the first has the search query in the movie name while the second has it in the movie's cast.

We then define our materialized view model in `/models` and register it with `pg-search-sequelize` so that we get the search functionality.

Finally, we expose two API `/film/:query` and we start the express server on port `3000`.

# Next Steps

If you are interested in using this library in your projects, head on over to [pg-search-sequelize](https://github.com/mujz/pg-search-sequelize).

If there's anything you didn't like, or if you have any comments or suggestions, please do submit them in the issues section of [pg-search-sequelize](https://github.com/mujz/pg-search-sequelize)
