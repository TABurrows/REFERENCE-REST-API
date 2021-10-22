// app/config.js

const { DeepFreeze } = require("./utils");

const Config = DeepFreeze({
  API: {
    Version: "v1",
  },
  DBConnector: {
    client: "sqlite3",
    connection: {
      filename: "countries.db",
    },
    useNullAsDefault: true,
  },
  Metadata: {
    Table: "countries",
    Schema: [
      {
        Param: "name",
        Field: "name",
      },
      {
        Param: "alpha2",
        Field: "alpha-2",
      },
      {
        Param: "alpha3",
        Field: "alpha-3",
      },
      {
        Param: "countryCode",
        Field: "country-code",
      },
      {
        Param: "iso3166pt2",
        Field: "iso_3166-2",
      },
      {
        Param: "region",
        Field: "region",
      },
      {
        Param: "subRegion",
        Field: "sub-region",
      },
      {
        Param: "intermediateRegion",
        Field: "intermediate-region",
      },
      {
        Param: "regionCode",
        Field: "region-code",
      },
      {
        Param: "subRegionCode",
        Field: "sub-region-code",
      },
      {
        Param: "intermediateRegionCode",
        Field: "intermediate-region-code",
      },
    ],
  },
});

module.exports = Config;
