use shop // this is a database
db.createUser({ user: 'appdev', pass: 'dev', roles: ['readWrite'] })

db.getUsers() // get user in current db
db.updateUser('appdev', { roles: ['readWrite', { role: 'readWrite', db: 'blog' }] }) // update user
