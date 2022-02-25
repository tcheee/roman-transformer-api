const express = require('express');
const { checkInteger, checkRomanString } = require('./helpers/checkFormat');
const { fromInteger, fromRoman } = require('./helpers/romanAlgorithm');
const app = express();
const port = process.env.PORT || 5000;

app.get('/fromRoman/*', async (req, res) => {
  try {
    const urlElements = req.url.split('/');
    const element = urlElements[urlElements.length - 1];
    if (!checkRomanString(element)) {
      throw new Error(
        'ERROR: The element in the url is not a Roman number. Please try again.'
      );
    }
    const result = fromRoman(element);
    res.send(JSON.stringify(result));
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/toRoman/*', async (req, res) => {
  try {
    const urlElements = req.url.split('/');
    const element = urlElements[urlElements.length - 1];
    if (!checkInteger(element)) {
      throw new Error(
        'ERROR: The element in the url is not a number. Please try again.'
      );
    }
    const result = fromInteger(element);
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('/*', (_, res) => {
  res.send(
    'Please use one of the following route: <br> - /fromRoman/* <br>  - /toRoman/* <br><br> Thank you!'
  );
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
