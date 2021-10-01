const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profileQ = {
  name: "What's your name? Nicknames are also acceptable :) ",
  hobby: "What's an activity you like doing? ",
  music: "What do you listen to while doing that? ",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  food: "What's your favourite thing to eat for that meal? ",
  sport: "Which sport is your absolute favourite? ",
  superpower:
    "What is your superpower? In a few words, tell us what you are amazing at! ",
};

const profile = {};

rl.question(`${profileQ.name}`, (name) => {
  profile.name = name;
  rl.question(`${profileQ.hobby}`, (hobby) => {
    profile.hobby = hobby;
    rl.question(`${profileQ.music}`, (music) => {
      profile.music = music;
      rl.question(`${profileQ.meal}`, (meal) => {
        profile.meal = meal;
        rl.question(`${profileQ.food}`, (food) => {
          profile.food = food;
          rl.question(`${profileQ.sport}`, (sport) => {
            profile.sport = sport;
            rl.question(`${profileQ.superpower}`, (superpower) => {
              profile.superpower = superpower;
              rl.close();

              console.log(
                "My name is " +
                  name +
                  " , I like " +
                  hobby +
                  " and listening to " +
                  music +
                  ". My favourite" +
                  " meal is " +
                  meal +
                  " and I prefer eating " +
                  food +
                  " my favorite sport is " +
                  sport +
                  " and my " +
                  "superpower is " +
                  superpower +
                  ". Nice to meet you!"
              );
            });
          });
        });
      });
    });
  });
});
