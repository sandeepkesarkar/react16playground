import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${black};
  ${elevation[4]};
  ${transition({
  ease: 'ease-in'
}
)};
  &:hover{
    ${elevation[5]};
  }
`;
