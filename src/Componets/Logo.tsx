import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.div`
  padding: 20px;
  font-size: 64px;
  color: #000000;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 78px;
`

const Logo = () => {
	return (
		<LogoWrapper>
			only.
		</LogoWrapper>
	);
};
export default React.memo(Logo)

