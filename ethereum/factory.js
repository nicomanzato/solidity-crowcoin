import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x5276DC18aaf07CD0c14170BbC11EAa0e23654E17'
);

export default instance;