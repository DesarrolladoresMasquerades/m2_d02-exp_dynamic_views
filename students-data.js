// const students = [
module.exports = [
  {
    firstName: 'ana',
    lastName: 'smith',
    bootcamps: [
      {
        type: 'web dev',
        graduated: false,
        year: 2020,
        favoriteTopics: ['dom manipulation', 'OOP']
      }
    ],
    campus: {
      city: 'miami',
      postalCode: '33130',
      country: 'us'
    },
    isCareerChanger: true
  },
  {
    firstName: 'maria',
    lastName: 'vazquez',
    bootcamps: [
      {
        type: 'web dev',
        graduated: false,
        year: 2020,
        favoriteTopics: ['node', 'react']
      }
    ],
    campus: {
      city: 'miami',
      postalCode: '33139',
      country: 'us'
    },
    isCareerChanger: false
  },
  {
    firstName: 'marc',
    lastName: 'anthony',
    bootcamps: [
      {
        type: 'web dev',
        graduated: true,
        year: 2018,
        favoriteTopics: ['dom manipulation', 'react']
      },
      {
        type: 'ux/ui',
        graduated: true,
        year: 2019,
        favoriteTopics: ['sketch']
      }
    ],
    campus: {
      city: 'miami',
      postalCode: '33131',
      country: 'us'
    },
    isCareerChanger: true
  },
  {
    firstName: 'elon',
    lastName: 'musk',
    bootcamps: [
      {
        type: 'web dev',
        graduated: true,
        year: 2018,
        favoriteTopics: ['mongo', 'react']
      }
    ],
    campus: {
      city: 'vancouver',
      postalCode: 'v5k 111',
      country: 'ca'
    },
    isCareerChanger: false
  },
  {
    firstName: 'max',
    lastName: 'perez',
    bootcamps: [
      {
        type: 'web dev',
        graduated: true,
        year: 2017,
        favoriteTopics: ['express', 'angular']
      },
      {
        type: 'data analytics',
        favoriteTopics: ['tableau', 'machine learning'],
        graduated: false,
        year: 2020
      }
    ],
    campus: {
      city: 'mexico city',
      postalCode: '555123',
      country: 'mex'
    },
    isCareerChanger: false
  }
];

// module.exports = students;
