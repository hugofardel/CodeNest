import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar.jsx";

// Global Layout
const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

// Main layout area
const ContentArea = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

// Main content
const Main = styled.main`
	flex: 1;
	overflow-y: auto;
	padding: 1rem;
	background-color: #f5f5f5;
`;

// AppLayout Component
const AppLayout = () => {
	return (
		<Layout>
			<ContentArea>
				<Sidebar />
				<Main>
					<Outlet />
				</Main>
			</ContentArea>
		</Layout>
	);
};

export default AppLayout;
