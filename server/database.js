const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Comment = new Schema({
    title : String,
    body: String
});

const User = new Schema({
    
});

const Account = new Schema({
    Name: String,
    DateAdded: Date,
    IsDefault: Boolean
});

const Transaction = new Schema({
    Name: String,
    Description: String,
    Date: Date,
    Amount: Number,
    Account: [Account],
    User: [User]
});

const Category = new Schema({
    Name: String,
    InitialBudgetAmount: Number,
    AdjustablePredictedAmount: Number,
    IsExpense: Boolean,
    Transactions: [Transaction]
});

const Budget = new Schema({
    Name: String,
    Date: Date,
    Categories: [Category]
      {
        "Name": "Rent/Mortgage",
        "InitialBudgetAmount": 735,
        "AdjustablePredictedAmount": 730,
        "IsExpense": true,
        "Transactions": [
          {
            "Name": "ACH Payment Canyon View Crossing",
            "Description": "Rent Payment",
            "Date": "01/01/2016",
            "Amount": 730,
            "Account": {
              "Name": "Checking",
              "DateAdded": "01/01/2016",
              "IsDefault": true
            },
            "User": {
              "FirstName": "Zach",
              "LastName": "Trayner",
              "Email": "ztrayner@gmail.com",
              "UserId": "6vTNTgWKuHv4PGGTS"
            }
          }
        ]
      },
      {
        "Name": "Restaurants",
        "InitialBudgetAmount": 25,
        "AdjustablePredictedAmount": 20.34,
        "IsExpense": true,
        "Transactions": [
          {
            "Name": "JCWs Inc",
            "Description": "JCWs for dinner",
            "Date": "01/02/2016",
            "Amount": 20.34,
            "Account": {
              "Name": "Checking",
              "DateAdded": "01/01/2016",
              "IsDefault": true
            },
            "User": {
              "FirstName": "Zach",
              "LastName": "Trayner",
              "Email": "ztrayner@gmail.com",
              "UserId": "6vTNTgWKuHv4PGGTS"
            }
          }
        ]
      },
      {
        "Name": "Paycheck",
        "InitialBudgetAmount": 1200,
        "AdjustablePredictedAmount": 1300,
        "IsExpense": false,
        "Transactions": [
          {
            "Name": "ACH Transfer Paycheck",
            "Description": "Zach Paycheck",
            "Date": "01/10/2016",
            "Amount": 700.34,
            "Account": {
              "Name": "Checking",
              "DateAdded": "01/01/2016",
              "IsDefault": true
            },
            "User": {
              "FirstName": "Zach",
              "LastName": "Trayner",
              "Email": "ztrayner@gmail.com",
              "UserId": "6vTNTgWKuHv4PGGTS"
            }
          }
        ]
      }
    ],
    "AccountsForBudgetMonth": [
      {
        "EstimatedStartingBalance": 2100,
        "StartingBalance": 2000,
        "Account": {
          "Name": "Checking",
          "DateAdded": "01/01/2016",
          "IsDefault": true
        }
      }
    ]
  })

mongoose.model('comments', Comment);

mongoose.connect('mongodb://localhost:27017/NigelFinancialPlanner');
