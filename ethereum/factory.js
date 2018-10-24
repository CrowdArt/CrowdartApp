import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5025FD2f7773E4C72928712908F91bB6db0a94E6'
);

export default instance;