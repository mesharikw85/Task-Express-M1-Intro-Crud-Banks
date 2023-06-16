let accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  return res.status(200).json(accounts);
};

const creatNewAccount = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;

  const newAccount = { id, ...req.body };

  accounts.push(newAccount);

  return res.status(201).json(newAccount);
};

const deleteAccount = (req, res) => {
  const { accountID } = req.params;
  const findAccounts = accounts.find((acount) => acount.id === +accountID);
  if (!findAccounts) {
    return res.status(404).json({ message: "not found account" });
  } else {
    accounts = accounts.filter((account) => account.id != accountID);
  }
  return res.status(200).json({ message: "acoount delete successfull" });
};

const updateAccount = (req, res) => {
  const accountID = req.params.accountId;
  const findAccount = accounts.find((account) => account.id === +accountID);
  if (!findAccount) {
    return res.status(404).json({ message: "account not found" });
  }

  findAccount.username = req.body.username
    ? req.body.username
    : findAccount.username;
  findAccount.funds = req.body.funds ? req.body.funds : findAccount.funds;
  return res
    .status(200)
    .json({ findAccount, message: "acoount update successfull" });
  // // If it does exist, replace the values of the account with the new values coming from the req.
  // findAccount.data = req.body;
  // //Send a response with the correct status code.
  // return res.status(200).json({ message: "acoount update successfull" });
};

module.exports = {
  getAllAccounts,
  creatNewAccount,
  deleteAccount,
  updateAccount,
};
