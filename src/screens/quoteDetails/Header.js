import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Edit, Trash, LinkExternal } from 'styled-icons/boxicons-regular';

import { Row, Column, Anchor, StyledLink } from '../../components/ui';

const HeaderRow = styled(Row)`
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid #f7f7f7;
`;

const Header = ({ quote, deleteQuote }) => {
  return (
    <HeaderRow>
      <Column>
        <Anchor secondary href={quote.source} target="blank" data-cy="quote-source" >
          <LinkExternal size={18} style={{ paddingRight: '5px' }} />
          View author profile
          </Anchor>
      </Column>
      <Column width="170px" justify="flex-end">
        <StyledLink secondary to={`/quotes/${quote.id}/edit`}>
          <Edit size={18} style={{ paddingRight: '5px' }} />
          Edit
          </StyledLink>
        <Anchor
          href="#"
          onClick={() => deleteQuote(quote.id)}
          style={{ marginLeft: '20px' }}
          secondary
          data-cy="delete-link"
        >
          <Trash size={18} style={{ paddingRight: '5px' }} />
          Delete
          </Anchor>
      </Column>
    </HeaderRow>
  )
}

Header.propTypes = {
  quote: PropTypes.instanceOf(Object).isRequired,
  deleteQuote: PropTypes.func.isRequired
};

export default Header;