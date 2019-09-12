import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Quotes from './screens/Quotes';
import QuoteDetails from './screens/QuoteDetails';

import theme from './utils/theme';
import { Content } from './components/ui';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fafafa;
    font-family: ${props => props.theme.fonts.regular};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`
const Wrapper = styled.div`
  background-color: #fff;
  width: 800px;
  height: 500px;
  box-shadow: 1px 1px 32px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 3px;
`;

const Sidebar = styled.div`
  flex: 0 0 240px;
  padding: ${props => props.theme.spacing.lg} 0;
  background: ${props => props.theme.colors.blue} 0;
  color: #fff;
  border-radius: 3px 0 0px 3px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Wrapper>
        <Sidebar>
          <Route path='/' component={Quotes} />
        </Sidebar>
        <Content>
          <Route path={`/quotes/:id`} component={QuoteDetails} />
        </Content>
      </Wrapper>
      <GlobalStyle />
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
