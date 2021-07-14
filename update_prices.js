var TokenPrices = require('./prices');

const priceloop = async () => {
  var saves = [];

  for (const sym of TokenPrices.symbols) {
    let x = await TokenPrices[sym.toLowerCase()]()
    saves.push({ [sym] : x});
   };
   return saves
}


const updatePriceJob = async () => {
  try {
  saves = await priceloop();
  await console.log(saves);
  return "Price Job Done";
} catch (err) {
    console.log(err)
    process.exit(1);
  }
};

//To run standalone uncomment the following line
updatePriceJob();

//To use this as a module uncomment the following line
//module.exports = updatePriceJob;
