import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {

  static async getInitialProps(props) {
    const { address } = props.query;

    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call()
        })
    );

    const approversCount = await campaign.methods.approversCount().call();

    return { address, requests, requestCount, approversCount };
  }

  render() {
    return (
      <Layout>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button floated="right" primary style={{ marginBottom: '10px' }}>Add request</Button>
          </a>
        </Link>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { this.props.requests.map((request, index) => 
              <RequestRow
                request={request}
                key={index}
                id={index}
                approversCount={this.props.approversCount}
                address={this.props.address} />) 
            }
          </Table.Body>
        </Table>
        <div>Found { this.props.requestCount } requests</div>
      </Layout>
    );
  }
}

export default RequestIndex;
