const express = require("express");
const PORT = 8000;
const accountRoute = require("./api/accounts/accounts.routes");
const app = express();

app.use(express.json());

app.use("/accounts", accountRoute);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
