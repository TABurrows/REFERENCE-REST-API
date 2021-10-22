const knex = require("knex");
const { DBConnector, Metadata } = require("../config");

const db = knex(DBConnector);

const Select = () => {
  console.log("[INFO] Received select all request");
  return db(Metadata.Table);
};

const SelectByAlpha2 = (a2) => {
  console.log(`[INFO] Received select by alpha-2 request with parameter ${a2.toUpperCase()}`);
  return db(Metadata.Table).where({ "alpha-2": a2.toUpperCase() });
};

// const Insert = (post) => {
//     console.log("[INFO] Received insert request")
//     return db(DB.Table)
//     .insert(post)
//     .then((ids) => ({ id: ids[0] }));
// };

// const Update = (id, post) => {
//     console.log("[INFO] Received update request")
//     return db(DB.Table).where("id", Number(id)).update(post);
// };

// const Remove = (id) => {
//     console.log("[INFO] Received delete request")
//     return db(DB.Table).where("id", Number(id)).del();
// };

module.exports = { Select, SelectByAlpha2, db }; //, Insert, Update, Remove };
