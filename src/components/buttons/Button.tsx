import styled, { css } from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    margin?: string;
    primary?: boolean;
    index?: number;
    stretching?: boolean;
    danger?: boolean;
  }
}

type ButtonProps = {
  text: string;
  margin?: string;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
  danger?: boolean;
  stretching?: boolean;
};

const basicStyle = css`
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  height: 32px;
  cursor: pointer;
`;

const Wrapper = styled.button`
  ${basicStyle};
  color: #24292f;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  font-weight: 500;
  margin: ${({ margin }) => margin && margin};
  :hover {
    background-color: #f3f4f6;
  }
  ${({ primary }) => primary && primaryStyle};
  ${({ disabled }) => disabled && disabledStyle};
  ${({ stretching }) => stretching && 'width: 100%'};
  ${({ danger }) => danger && dangerStyle};
`;

const primaryStyle = css`
  background-color: #2da44e;
  border: 1px solid #2da44e;
  color: #fff;
  :hover {
    background-color: #2c974b;
  }
`;

// default disabled style: #8c95a0, #f6f8fa

const disabledStyle = css`
  background-color: #94d3a2;
  :hover {
    background-color: #94d3a2;
  }
  cursor: not-allowed;
`;

const dangerStyle = css`
  color: #cf222e;
  :hover {
    color: #fff;
    background-color: #a40e26;
  }
`;

const Button = ({
  text,
  margin,
  primary,
  disabled,
  stretching,
  danger,
  onClick,
}: ButtonProps) => {
  return (
    <Wrapper
      margin={margin}
      primary={primary}
      disabled={disabled}
      stretching={stretching}
      danger={danger}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
