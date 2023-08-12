const greetings = [
  "Hey",
  "Howdy",
  "Hello",
  "Yo",
  "Greetings",
  "Hi",
  "Hi there",
];

export const getGreeting = () => {
  return greetings.at(Math.floor(Math.random() * greetings.length));
};
