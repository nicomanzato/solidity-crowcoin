import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {

  state = {
    value: '',
    loading: false,
    errorMessage: '',
  }

  onValueChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      this.setState({ loading: true, errorMessage: '' });
      const campaign = Campaign(this.props.campaignAddress);
      const accounts = await web3.eth.getAccounts();
      const value = web3.utils.toWei(this.state.value, 'ether');

      await campaign.methods.contribute().send({ from: accounts[0], value });

      Router.replaceRoute(`/campaigns/${this.props.campaignAddress}`);
    } catch(err) {
      this.setState({ errorMessage: err.message })
    } finally {
      this.setState({ loading: false, value: '' });
    }
  }
  
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input 
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={this.onValueChange}
          />
        </Form.Field>
        <Message error header="Ooops!" content={this.state.errorMessage} />
        <Button
          primary
          loading={this.state.loading}
        >Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
