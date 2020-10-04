var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/MaximSiebert-2020',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MaximSiebert/MaximSiebert-2020.git',
        user: {
            name: 'Maxim Siebert',
            email: 'maxim@hey.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)