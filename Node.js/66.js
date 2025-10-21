

// Example route: /api.v1/users?role=admin&country=USA
app.get('/api.v1/users', (req, res) => {
    
    console.log(req.query); // Will log { role: 'admin', country: 'USA' }

    const { role, country } = req.query;
    let filteredUsers = userData;

    if (role) {
        filteredUsers = filteredUsers.filter(user => user.role === role);
    }

    if (country) {
        filteredUsers = filteredUsers.filter(user => user.country === country);
    }
    
    res.status(200).json(filteredUsers);
});


