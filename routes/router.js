const router = require('express').Router();
const bcrypt = require('bcrypt');

const dbModel = include('databaseAccessLayer');

const petModel = include('models/pet');

router.get('/', async (req, res) => {
	console.log("page hit");
	
	try {
		const result = await dbModel.getAllUsers();
		res.render('index', { allUsers: result });
		console.log(result);
	}
	catch (err) {
		res.render('error', { message: 'Error reading from MySQL' });
		console.log("Error reading from mysql");
		console.log(err);
	}
});

router.get('/pets', async (req, res) => {
    try {
        const pets = await petModel.findAll({
            attributes: ['pet_name']
        });

        res.render('pets', { allPets: pets });
    }
    catch (err) {
        console.log("PETS ERROR:", err);
        res.render('error', { message: 'Error loading pets' });
    }
});

router.post('/addUser', async (req, res) => {
    console.log("form submit");
    console.log(req.body);
	
	try {
		const success = await dbModel.addUser(req.body);
		if (success) {
			res.redirect("/");
		}
		else {
			res.render('error', { message: "Error writing to MySQL" });
			console.log("Error writing to MySQL");
		}
	}
	catch (err) {
		res.render('error', { message: "Error writing to MySQL" });
		console.log("Error writing to MySQL");
		console.log(err);
	}
});

router.get('/deleteUser', async (req, res) => {
    console.log("delete user");
	console.log(req.query);

	let userId = req.query.id;
	
	if (userId) {
		try {
			const success = await dbModel.deleteUser(userId);
			if (success) {
				res.redirect("/");
			}
			else {
				res.render('error', { message: 'Error writing to MySQL' });
				console.log("Error writing to mysql");
			}
		}
		catch (err) {
			res.render('error', { message: 'Error writing to MySQL' });
			console.log(err);
		}
	}
});

module.exports = router;