const { description } = require('../../package');

module.exports = {
  logo: "/img/logo/fundmaster-hero-image.png",
  title: 'FundMaster Xe',
  description: description,
  themeConfig: {
    logo: "/img/logo/fundmaster-hero-image.png",
    searchPlaceholder: 'Search...',
    search:true,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    nav: [
      {
        text: 'Getting Started', link: '/introduction/',
      },

     {
      text: 'System Modules',
      items: [
        {text: 'Admin panel', link: '/administration/' },
        {text: 'Accounts', link: '/accounts/' },
        {text: 'Pensioner Register', link:'/pensioners/'},
        {text: 'Scheme Setup', link: '/schemesetup/' },     
        {text: 'Investment', link: '/investments/'},
        {text: 'Member Register', link:'/members/'},
        {text: 'Workflow', link:'/workflow/'},
        {text: 'Reports', link:'/reports/'},
      ]
    },
      {
        text: 'MSS',
        link: 'https://www.systechafrica.com',
      },
      {
        text: 'Glossary',
        items: [
          {text: 'Letter A', link: '/glossary/' },
          {text: 'Letter B', link: '/letterB/' },
          {text: 'Letter C', link: '/letterC/' },      
        ]
      },
      {
        text: ' Video Tutorial',
        link: '/videotutorials/'
      },
    ],
    sidebar:require('./sidebar.js'),
  },
};