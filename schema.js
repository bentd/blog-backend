const { gql } = require('apollo-server');

const typeDefs = gql`

  scalar Date

  type FileDimensions {
    width: Int
    height: Int
  }

  type FileDetails {
    image: FileDimensions
  }

  type File {
    contentType: String
    fileName: String
    url: String
    details: FileDetails
  }

  type AssetFields {
    title: String
    description: String
    file: File
  }

  type AssetProperties {
    createdAt: String
    updatedAt: String
    type: String
    id: String
  }

  type Asset {
    sys: AssetProperties
    fields: AssetFields
  }

  type Info {
    title: String
    id: Int
    name: String
    nouns: [String]
    greeting: String
    role: String
    headshot: Asset
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

  type Work {
    title: String
    description: String
    gallery: [Asset]
    link: String
    order: Int
    label: String
  }

  type Query {
    info: Info
    works: [Work]
    testInfo: Info
  }

  input AssetPropertiesInput {
    type: String
    linkType: String
    id: String
  }

  input AssetInput {
    sys: AssetPropertiesInput
  }

  input InfoInput {
    title: String
    id: Int
    name: String
    nouns: [String]
    greeting: String
    role: String
    headshot: AssetInput
    skills: [String]
    university: String
    degree: String
    graduationDate: Date
    contactMessage: String
    contactEmail: String
    contactLabel1: String
    contactLink1: String
    contactLabel2: String
    contactLink2: String
    contactLabel3: String
    contactLink3: String
  }

  type InfoUpdateResponse {
    success: Boolean!
    fields: Info
  }

  type Mutation {
    updateField(field: String): InfoUpdateResponse!
    updateFields(info: InfoInput): InfoUpdateResponse!
  }
`;

module.exports = typeDefs;
