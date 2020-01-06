# Should I go sailing

Should I go sailing is a service that notifies you automatically if the conditions for sailing in your location will be perfect to go sailing on the upcoming weekend. It uses the Stormglass API to pull data about the weather, wind, waves, tides, and then uses a Telegram bot to send a notification to the user in the event that the conditions are expected to be the way the user likes them.

## Why

I created this project mostly to scratch my own itch – I like to go sailing on the weekends during summer, and I wanted to automate the task of checking whether the weather will allow me to do that on the upcoming weekend.

## Testing

The repo has a testing mode, to activate it make sure the env is set to TESTING in the config.js file. The testing mode uses the test/test.json file as data input. It contains a mock JSON of data from Stormglass.

## Tech Stack

Should I go sailing uses Express.js as a server framework, and the telegram bot API as a frontend. I've included some rudimentary frontend data delivery for local development purposes.

## License

MIT © [l-sugar](https://github.com/l-sugar)
