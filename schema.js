const { gql } = require('apollo-server');

const typeDefs = gql`

  scalar Date

  type AssetMetadata {
    type: String
    linkType: String
    id: String
  }

  type Asset {
    sys: AssetMetadata
  }

  type Home {
    title: String
    id: Int
    name: String
    heroNouns: [String]
    greeting: String
    role: [String]
    skills: [String]
    university: [String]
    degree: String
    graduationDate: Date
    hobbyLabel: String
    hobbyPhoto: Asset
    contactMessage: String
    contactEmail: String
    contactLabel1: String
    contactLink1: String
    contactLabel2: String
    contactLink2: String
    contactLabel3: String
    contactLink3: String
  }

  type Query {
    home: Home
    testHome: Home
  }
`;

module.exports = typeDefs;
