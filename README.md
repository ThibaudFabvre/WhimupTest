# WhimupTest

How to test?

You need yarn or npm installed. Postgres is recommended but not mandatory

1) Installing the project:
- In your terminal enter yarn (or 'npm run' if you use npm instead)

2) Then you have two options:

Option 1:  If you want to use postgres:
- yarn migrate:up
You can then add test data by uncomenting the "//seed()" line in the db-seeder.ts file. 


Option 2: If you want to use the precoded and commented data (simpler)
You can uncomment the fake data parts (in the same file), and in match.ts, uncomment the function and comment the other with
the same route (to switch from database usage to a more simple predefined constant usage). If you choose the latter. Don't forget to
import the fakedata in match.ts

5) Once you have setup your source of data, you can now launch the API:
- yarn start:dev

WARNING: don't forget to recomment the seed() call once you have done yarn:start:dev, if you had uncommented it, as it will throw an error
if you don't. Once the seeding has been done once, you don't need it anymore after all.



