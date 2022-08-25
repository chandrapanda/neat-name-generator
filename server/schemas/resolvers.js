const { StudentName } = require("../models");

const resolvers = {
  Query: {
    // All names
    names: async () => {
      return StudentName.find();
    },

    Mutation: {
      // Add name
      addStudentName: async (parent, { firstName, lastName }) => {
        const name = await StudentName.create({
          firstName,
          lastName,
        });
      },
    },
  },
};

module.exports = resolvers;
