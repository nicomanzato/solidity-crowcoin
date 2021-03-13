import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";

class RequestNew extends Component {

  state = {
    value: '',
    description: '',
    recipient: '',
    errorMessage: '',
    loading: false,
  }

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  onValueChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onRecipientChange = (event) => {
    this.setState({ recipient: event.target.value });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    try {
      this.setState({ loading: true, errorMessage: '' });
      const accounts = await web3.eth.getAccounts();

      const { value, description, recipient } = this.state;

      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0]});

      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch(err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ value: '', description: '', recipient: '', loading: false })
    }

  }

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
            Back
          </a>
        </Link>

        <h3>Create a request</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input 
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </Form.Field>
          <Form.Field>
            <label >Value in ether</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={this.onValueChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={this.onRecipientChange}
            />
          </Form.Field>
          <Message error header="Ooops!" content={this.state.errorMessage} />
          <Button
            primary
            type="submit"
            loading={this.state.loading}
          >Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
