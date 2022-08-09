import React from 'react';
import styled from "styled-components";


const WrapperError = styled.div`
  height: 60px;
  max-width: 640px;
  width: 100%;
  border-radius: 8px;
  background-color: #F5E9E9;
  border: 1px solid #E26F6F;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  .ico-error {
    height: 20px;
    width: 20px;
    background-color: #FFC8C8;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ico-error:before {
    content: '!';
    position: absolute;
    color: #EE6565;
    font-size: 14px;
    font-weight: 400;
  }
  label{
	margin-left: 10px;
	font-size: 14px;
  }
`

interface IError {
	message: string
}
const Error = ({message}: IError) => {
	return (
		<WrapperError>
			<div className='ico-error'/>
			<label>{message}</label>
		</WrapperError>
	);
};

export default React.memo(Error);