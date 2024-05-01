# Authors

- Chloe Gee
- Ashley Pearson
- Matthew Loynes
- Jungbin Choi

# Presentation Video

https://youtu.be/_g4ohnR-wF8

# Front-End

- Built in React.js
- Event-Driven Functionality
  - Buttons
    - Reset
    - Hint
  - Grid
  - Keypad
  - Scoreboard
- Calls on the Back-End to derive hints and unique words, as well as update the score board
- Uses native CSS for styling and animations

# Back-End

- Built in Express.js
- Calls upon `https://random-word-api.herokuapp.com/word?length=5` to fetch 5 letter words for the Wordle game
- Keeps a state-persistent SQLite database of words used (to remove repeats) and scores (to keep track of scores even if the user reloads the page)
- Calls upon `@google/generative-ai` API to create AI-generated hints based on the current word

# Back-End Routes

- `GET /word` -- Returns a new unique word

```
{
	"word": string
}
```

- `GET /hint` -- Returns a hint

```
{
	"hint": string
}
```

- `GET /score` -- Returns an increasing array of scores

```
{
	"guesses": number[]
}
```

- `PUT /score` -- Updates the given score

```
INPUT
{
	"guess": number
}

OUPUT
{
	"guesses": number[]
}
```
