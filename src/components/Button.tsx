import styled from 'styled-components'
import { ButtonProps } from './Button.props';

const Button = ({appearance, children, ...props}: ButtonProps): JSX.Element => {
  return (
	<button className='btn' {...props}>
		{children}
	</button>
  )
}

export default Button;