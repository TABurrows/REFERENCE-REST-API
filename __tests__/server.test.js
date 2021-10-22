


const request = require("supertest");
const app = require("../app");
const { db } = require("../app/db");



jest.setTimeout( 20000 );

let target;
beforeAll( async () => {
  target = await app.listen(3333);
});

afterAll( async () => {
  if(target) target.close();
  if(db) await db.destroy();
});



describe("Test reference REST API server", () => {

  test("GET / should return a 404", async () => {
          await request(target)
                  .get("/")
                  .then( response => { expect(response.statusCode).toBe(404); });
  });

  test("GET /status should return a 200", async () => {
    await request(target)
            .get("/status")
            .then( response => { expect(response.statusCode).toBe(200); });
  });

  test("GET /api/v1/countries should return a 200", async () => {
    await request(target)
            .get("/api/v1/countries")
            .then( response => { expect(response.statusCode).toBe(200); });
  });

});