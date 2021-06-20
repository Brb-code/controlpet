'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('mascota', [{
         nombre: 'Cachuchin',
         edad:1,
         delete: false,
         createdAt:new Date(),
         updatedAt:new Date()
       }, {
        nombre: 'Beto',
        edad:3,
        delete: false,
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('mascota', null, {});
  }
};
