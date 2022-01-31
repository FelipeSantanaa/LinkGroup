'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('interesses', [{
      interesse: 'Music'
    },
    {
      interesse: 'Comedy'
    },
    {
      interesse: 'Brand'
    },
    {
      interesse: 'Creative'
    },
    {
      interesse: 'Influencer'
    },
    {
      interesse: 'Government'
    },
    {
      interesse: 'Actor/Celebrity'
    },
    {
      interesse: 'Gaming/Esports'
    },
    {
      interesse: 'Fashion/Beauty'
    },
    {
      interesse: 'Food/Hospitality'
    },
    {
      interesse: 'Podcast/Radio'
    },
    {
      interesse: 'Education'
    },
    {
      interesse: 'Sports'
    },
    {
      interesse: 'Publication/DigitalMedia'
    },
    {
      interesse: 'Tv/Film'
    },
    {
      interesse: 'Writer'
    },
    {
      interesse: 'Community Org/Non-Profit'
    },
    {
      interesse: 'Agency'
    },
    {
      interesse: 'Ecommerce'
    },
    {
      interesse: 'Business Professional'
    },
    {
      interesse: 'Internet/Technology'
    },
    {
      interesse: 'Arts/Entertainment'
    },
    {
      interesse: 'Health/Wellness'
    },
    {
      interesse: 'Travel/Tourism'
    },
    {
      interesse: 'Independent/Samll Business'
    },
    {
      interesse: 'Personal'
    },
    {
      interesse: 'Politics'
    },
    {
      interesse: 'Model'
    },
    {
      interesse: 'Other'
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('interesses', null, {});
  }
};
