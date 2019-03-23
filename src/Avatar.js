import styled from "styled-components";
import Box from "./Box";
import PropTypes from "prop-types";
import theme from "./theme";

const px = a => (typeof a === "number" ? `${a}px` : a);

const Avatar = styled(Box.withComponent("img"))`
  border-radius: ${({ theme }) => theme.pill};
  display: inline-block;
  width: ${props => px(props.size[0])};
  height: ${props => px(props.size[0])};
  ${theme.mediaQueries.md} {
    width: ${props => px(props.size[1])};
    height: ${props => px(props.size[1])};
  }
  ${theme.mediaQueries.lg} {
    width: ${props => px(props.size[2])};
    height: ${props => px(props.size[2])};
  }
`;

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  size: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.arrayOf(PropTypes.string)])
};

Avatar.defaultProps = {
  theme,
  size: [48, 96, 144]
};

export default Avatar;
