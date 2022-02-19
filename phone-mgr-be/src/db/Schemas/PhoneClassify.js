const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const PhoneClassifySchema = new mongoose.Schema({
  title: String,

  meta: getMeta(),
});

PhoneClassifySchema.pre('save', preSave);

mongoose.model('PhoneClassify', PhoneClassifySchema);
