const express = require("express");
const router = express.Router();
const {
  getAllAccounts,
  creatNewAccount,
  deleteAccount,
  updateAccount,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);

router.post("/", creatNewAccount);

router.delete("/:accountID", deleteAccount);

router.put("/:accountId", updateAccount);

module.exports = router;
