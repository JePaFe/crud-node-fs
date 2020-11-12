const { argv } = require('./config/yargs')
const posts = require('./posts/posts')

//console.log(argv, argv._, argv.t)

let comando = argv._[0]

let post

switch(comando) {
    case 'create':
        post = posts.create(argv.title)
        console.log('Create ', post)
        break
    case 'read':
        post = posts.read(argv.id)
        console.log('Read ', post)
        break
    case 'update':
        post = posts.update(argv.id, argv.title)
        console.log(post);
        break;
    case 'delete':
        post = posts.delete(argv.id)
        console.log(post);
        break;
    default:
        console.log('No reconozco el comando')
}