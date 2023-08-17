import client from '../database';

// export const fakeMatches = [
//   {
//     id: 42,
//     status: 'ongoing',
//     location: 'Toulouse',
//     date: 1692110735317,
//     game: 'football',
//     results: [
//       { id: 1, result: 0 },
//       { id: 2, result: 1 },
//     ],
//   },
//   {
//     id: 36,
//     status: 'finished',
//     location: 'Toulouse',
//     date: 1692110735317,
//     game: 'football',
//     results: [
//       { id: 1, result: 0 },
//       { id: 2, result: 1 },
//     ],
//   },
//   {
//     id: 75,
//     status: 'upcoming',
//     location: 'Paris',
//     date: 1849792030000,
//     game: 'football',
//     results: [
//       { id: 1, result: 0 },
//       { id: 3, result: 1 },
//     ],
//   },
// ];

// export const fakeTeams = [
//   {
//     id: 1,
//     name: 'Toulouse',
//     logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Toulouse_FC_logo_2021.svg/1200px-Toulouse_FC_logo_2021.svg.png',
//     matches: [42, 75],
//   },
//   {
//     id: 2,
//     name: 'Marseilles',
//     logo: 'https://www.1min30.com/wp-content/uploads/2018/03/Couleur-logo-Olympique-de-Marseille.jpg',
//     matches: [42],
//   },
//   {
//     id: 3,
//     name: 'Paris',
//     logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/600px-Paris_Saint-Germain_Logo.svg.png',
//     matches: [75],
//   },
// ];

const seedDB = () => {
  const query = `

            INSERT INTO "public".matches (id, status, location, date, game, results)
            VALUES
            (67, 'upcoming', 'Paris', 1755428873000, 'football', array['{ "id": 1, "result": 0 }','{ "id": 3, "result": 1 }']::json[])
            (42, 'ongoing', 'Toulouse', 1692110735317, 'football', array['{ "id": 1, "result": 0 }', '{ "id": 2, "result": 1 }']::json[]),
            (36, 'finished', 'Toulouse', 1692110735317, 'football', array['{ "id": 1, "result": 0 }','{ "id": 2, "result": 1 }']::json[]),
            (75, 'upcoming', 'Paris', 1849792030000, 'football', array['{ "id": 1, "result": 0 }','{ "id": 3, "result": 1 }']::json[])
            ;
            

            INSERT INTO "public"."teams" (id, name, logo, matches)
            VALUES 
            (1, 'Toulouse', 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Toulouse_FC_logo_2021.svg/1200px-Toulouse_FC_logo_2021.svg.png', ARRAY [42, 75]),
            (2, 'Marseilles', 'https://www.1min30.com/wp-content/uploads/2018/03/Couleur-logo-Olympique-de-Marseille.jpg', ARRAY [42]),
            (3, 'Paris', 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/600px-Paris_Saint-Germain_Logo.svg.png', ARRAY [75]),
        `;

  try {
    client.query(query);
  } catch (e) {
    throw e;
  }
};

//seedDB();
