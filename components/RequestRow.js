import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  state = {
    loadingApproval: false,
    loadingFinalize: false,
  };

  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    try {
      this.setState({ loadingApproval: true });
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .approveRequest(this.props.id)
        .send({ from: accounts[0] });
    } catch (err) {
    } finally {
      this.setState({ loadingApproval: false });
    }
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    try {
      this.setState({ loadingFinalize: true });
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .finalizeRequest(this.props.id)
        .send({ from: accounts[0] });
    } catch (err) {
    } finally {
      this.setState({ loadingFinalize: false });
    }
  };

  render() {
    const { id, request, approversCount } = this.props;

    const readyToFinalize = request.approvalCount > (approversCount / 2);

    return (
      <Table.Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{request.description}</Table.Cell>
        <Table.Cell>{web3.utils.fromWei(request.value, "ether")}</Table.Cell>
        <Table.Cell>{request.recipient}</Table.Cell>
        <Table.Cell>
          {request.approvalCount} / {approversCount}
        </Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button
              color="green"
              basic
              onClick={this.onApprove}
              loading={this.state.loadingApproval}
            >
              Approve
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          {request.complete ? null : (
            <Button
              color="red"
              basic
              onClick={this.onFinalize}
              loading={this.state.loadingFinalize}
            >
              Finalize
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default RequestRow;
