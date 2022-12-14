import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
	await Promise.all(
		getLevels().map((joke) => {
			return prisma.joke.create({data: joke});
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
	await prisma.$disconnect();
}).catch(async (e) => {
	console.error(e);
	await prisma.$disconnect();
	process.exit(1);
});
