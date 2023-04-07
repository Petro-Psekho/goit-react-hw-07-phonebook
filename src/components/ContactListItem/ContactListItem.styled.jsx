import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 16px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;

  margin-bottom: 4px;

  color: #efefef;
  background-color: #fff;

  /* :nth-of-type(2n) {
    background-color: #ecf1f4;
  } */
`;

export const ContactItem = styled.p`
  font-size: 18px;
  color: #4e4e4e;
`;

export const ContactItemName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ContactItemPhone = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  color: #acaaaa;
`;

export const ContactItemNumber = styled.div`
  margin-left: 10px;
`;

export const DeleteContactItem = styled.div`
  margin-left: 10px;
  cursor: pointer;

  color: #4e4e4e;
`;
