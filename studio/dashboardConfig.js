export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fce9972d70a8313f0d5d212',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-whh4zqid',
                  apiId: '12ffd7e7-17c8-4b9c-bfd5-9da336ddf397'
                },
                {
                  buildHookId: '5fce9972e07a50107b2c7579',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zqw4si7d',
                  apiId: 'eaa94b87-d538-46cc-8d0b-58c0957f6eb5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JosiahRareBird/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zqw4si7d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
