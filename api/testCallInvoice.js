const createInvoice = require('./createInvoice'); // Adjust the path to your module

// Mock request and response
const req = {
  method: 'POST',
  body: {
    "out": false,
    "amount": 100, // example amount
    "memo": "Payment for Services", // example memo
    "expiry": 3600, // example expiry time
    "unit": "sat", // example unit
    "webhook": "https://example.com/webhook", // example webhook URL
    "internal": false // example internal flag
  },
};

const res = {
  status: function (statusCode) {
    this.statusCode = statusCode;
    return this;
  },
  send: function (data) {
    console.log(response.data);
  },
};

// Call your function
createInvoice(req, res);