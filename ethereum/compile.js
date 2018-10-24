const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// delete build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

/** Read Campaign.sol from the Contracts folder */
// path to the Campaign.sol file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// read-in the source code from the subject file
const source = fs.readFileSync(campaignPath, 'utf8');

/** Compile both contracts with Solidity compiler */
const output = solc.compile(source, 1).contracts;

// create build folder
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
