export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed92dc9b47a68b34f39f61e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kw1u2ee6',
                  apiId: 'ca0e2a02-eaff-47f3-a4d9-3f625fc9a491'
                },
                {
                  buildHookId: '5ed92dc97b43f7fa27ca95b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ra2rvk58',
                  apiId: '6f1c38bb-b502-42b9-9725-8b9874a1b14d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryan258/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ra2rvk58.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
