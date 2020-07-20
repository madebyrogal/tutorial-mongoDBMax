use admin;
db.createUser({ user: 'max', pass: 'max', roles: ['userAdminAnyDatabase'] });
db.auth('max', 'max');
