const { gql } = require('apollo-server');

const typeDefs = gql`

  scalar Date

  type AssetProperties {
    createdAt: String
    updatedAt: String
    type: String
    id: String
  }

  type AssetFields {
    title: String
    file: File
  }

  type File {
    contentType: String
    fileName: String
    url: String
    details: FileDetails
  }

  type FileDetails {
    image: FileDimensions
  }

  type FileDimensions {
    width: Int
    height: Int
  }

  type Asset {
    sys: AssetProperties
    fields: AssetFields
  }

  type Home {
    title: String
    id: Int
    name: String
    heroNouns: [String]
    greeting: String
    role: String
    headshotPhoto: Asset
    skills: [String]
    university: String
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

  input AssetPropertiesInput {
    type: String
    linkType: String
    id: String
  }

  input AssetInput {
    sys: AssetPropertiesInput
  }

  input HomeInput {
    title: String
    id: Int
    name: String
    heroNouns: [String]
    greeting: String
    role: String
    headshotPhoto: AssetInput
    skills: [String]
    university: String
    degree: String
    graduationDate: Date
    hobbyLabel: String
    hobbyPhoto: AssetInput
    contactMessage: String
    contactEmail: String
    contactLabel1: String
    contactLink1: String
    contactLabel2: String
    contactLink2: String
    contactLabel3: String
    contactLink3: String
  }

  type HomeUpdateResponse {
    success: Boolean!
    fields: Home
  }

  type Mutation {
    updateName(name: String): HomeUpdateResponse!
    updateHome(home: HomeInput): HomeUpdateResponse!
  }
`;

module.exports = typeDefs;
