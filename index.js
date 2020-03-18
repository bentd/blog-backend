const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');



const home =  {
  "title": "Home",
  "name": "Dylan Bent",
  "heroNouns": [
    "student",
    "coder",
    "dreamer",
    "entrepreneur",
    "inventor",
    "friend"
  ],
  "greeting": "Hi, I'm Dylan",
  "role": "software developer and future electrical engineer",
  "skills": [
    "React Native",
    "React",
    "Bootstrap",
    "Flask (Backend)",
    "Google Cloud",
    "Heroku",
    "Firebase",
    "Solidity (Ethereum)",
    "VHDL",
    "Microcontrollers"
  ],
  "university": "Florida Agricultural and Mechanical University 🐍",
  "degree": "B.S. Electrical Engineering",
  "graduationDate": "2022-05-06",
  "hobbyLabel": "Wheels",
  "hobbyPhoto": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "62DlVHczzjX4BuoYtiYnxx"
    }
  },
  "contactMessage": "My professional DMs are always open!",
  "contactEmail": "bentd@outlook.com",
  "contactLabel1": "LinkedIn",
  "contactLink1": "https://www.linkedin.com/in/dylan-bent-40b396b5/",
  "contactLabel2": "Instagram",
  "contactLink2": "https://www.instagram.com/dylnbnt/",
  "contactLabel3": "GitHub",
  "contactLink3": "https://github.com/bentd"
};

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    home: () => home,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
