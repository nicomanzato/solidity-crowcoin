pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address campaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(campaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
    
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    modifier onlyApprovers() {
        require(approvers[msg.sender]);
        _;
    }
    
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
    
    function contribute() public payable {
        require(msg.value >= minimumContribution);
        approversCount++;
        approvers[msg.sender] = true;
    }
    
    function createRequest(string description, uint value, address receipient) public onlyManager {
        Request memory request = Request({
            description: description,
            value: value,
            recipient: receipient,
            approvalCount: 0,
            complete: false
        });
        
        requests.push(request);
    }
    
    
    function approveRequest(uint requestIndex) public onlyApprovers {
        Request storage request = requests[requestIndex];
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++; 
    }
    
    function finalizeRequest(uint requestIndex) public onlyManager {
        Request storage request = requests[requestIndex];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
}



