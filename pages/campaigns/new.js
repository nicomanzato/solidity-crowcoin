import React, { Component } from "react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: 0,
    loading: false,
    errorMessage: '',
  };

  onContributionChange = (event) => {
    this.setState({ minimumContribution: event.target.value, errorMessage: '' });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      this.setState({ loading: true});
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution).send({
        from: accounts[0],
      });

      Router.pushRoute('/');

    } catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={this.onContributionChange}
            />
          </Form.Field>
          
          <Message error header="Ooops!" content={this.state.errorMessage} />
          <Button
            type="submit"
            primary
            loading={this.state.loading}
          >
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
