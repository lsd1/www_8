/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import {
  Row,
  Col,
} from 'reactstrap';

// import ServiceBlock from 'components/ServiceBlock';
import HeaderMessage from 'components/HeaderMessage';
import TransactionHistory from 'components/TransactionHistory';
import Transactions from 'containers/Transactions';
import SearchBox from 'components/SearchBox';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import sagaTransactions from 'containers/Transactions/saga';

const Layout = styled.div`
  background-color: #F5F5F5;
  padding: 0;
  height:100%;
`;
const Layout2 = styled.div`
  margin:0 auto;
  width:50%;
  margin-top:20%;

 & div.searchbox-form{
  transform: scale(1.3);
}
`;

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout className="container-fluid">
        {/* <Row noGutters>
          <Col sm>
            <HeaderMessage />
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="5" className="text-center-down-md">
            <ServiceBlock />
          </Col>
          <Col sm="12" lg="7" className="">
            <TransactionHistory />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Transactions />
          </Col>
        </Row> */}
        <Layout2>
          <Row>
          <Col sm>
              <SearchBox />
            </Col>
          </Row>
        </Layout2>
      </Layout>
    );
  }
}

const withSagaTransaction = injectSaga({ key: 'transactions', saga: sagaTransactions });

export default compose(
  withSagaTransaction,
  // withConnect,
  // withRouter,
)(HomePage);
