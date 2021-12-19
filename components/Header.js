import React, { Component } from "react";
import { Menu, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import { Link } from '../routes';

class Header extends Component {
  state = {
    balance: 0,
    currentNetwork: '',
    isValidNetwork: true,
  };

  roundEth(amount, dec) {
    const [integer, decimals] = amount.split('.');
    return `${integer}.${decimals.slice(0, dec)}`;
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const balanceInEth = web3.utils.fromWei(balance, "ether");
    const currentNetwork = await web3.eth.net.getNetworkType();

    this.setState({
      balance: balanceInEth,
      currentNetwork: currentNetwork,
      isValidNetwork: currentNetwork === 'goerli',
    });
  }

  onConnectMetamask = () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  };

  render() {
    return ( 
      <>
        
        { !this.state.isValidNetwork && (
          <Message color='red' style={{ marginTop: "10px" }}>
                  You are currenctly connected to { this.state.currentNetwork }. Please connect to the Goerli network to test this app
          </Message>
        )}
       
        <Menu style={{ marginTop: "10px" }}>
          <Link route="/">
            <a className="item">CrowdCoin</a>
          </Link>
          <Menu.Menu position="right">
            {this.state.balance > 0 ? (
              <Menu.Item>{this.roundEth(this.state.balance, 2)} ETH</Menu.Item>
            ) : (
              <Menu.Item onClick={this.onConnectMetamask}>
                Connect Metamask
              </Menu.Item>
            )}

            <Link 
              route="/"
            >
              <a className="item">Campaigns</a>
            </Link>
            <Link
              route="/campaigns/new"
            >
              <a className="item">+</a>
            </Link>
          </Menu.Menu>
        </Menu>
      </>
    );
  }
}

export default Header;
