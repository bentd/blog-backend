const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
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
  }


  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  #type Book {
  #  title: String
  #  author: String
  #}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  #type Query {
  #  books: [Book]
  #}
`;

module.exports = typeDefs;
