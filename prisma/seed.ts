import { db } from "~/utils/db/db.server";


async function seed() {
	await Promise.all(
		getLevels().map((levels) => {
			return db.schoollevel.create({data: levels});
		})
	);
}


function getLevels() {

	return [
		{
			label: 'Terminale',
		},
		{
			label: 'Première'
		},
		{
			label: 'Seconde'
		},
	];
}


// Launching seeding function asynchronously
seed().then(async () => {
	await db.$disconnect();
}).catch(async (e) => {
	console.error(e);
	await db.$disconnect();
	process.exit(1);
});
