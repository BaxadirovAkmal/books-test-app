import { Box, Button } from '@mui/material';
import NotFoundImage from '../../assets/images/not_found.png';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const StyledSection = styled.section`
	width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
	flex-direction: column;
    align-items: center;
	justify-content: center;
	gap: 6rem;
`;

const Img = styled.img`
	max-width: 36rem;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const style = {width: '100%', rowGap: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}

const NotFound = () => {
	return (
		<StyledSection>
			<Box sx={style}>
				<Img src={NotFoundImage} alt="not-found"  />
			</Box>
			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem'}}>
				<Button variant="contained">
					<Link to='/'>Go Home Page</Link>
				</Button>
				<Button variant="outlined">Reload Page</Button>
			</Box>
		</StyledSection>
	)
}

export default NotFound;