import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const ChannelCardContainer = styled(Link)`
  background-color: var(--background-foreground);
  border-radius: var(--rounded-cards);

  padding: 20px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.15s;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    strong {
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      text-align: left;
      color: var(--text-body);
    }

    small {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      text-align: left;
      color: var(--text-muted);
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: right;
    color: var(--text-body);
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export { ChannelCardContainer };
