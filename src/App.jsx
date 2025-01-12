import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import FieldPage from "./pages/FieldPage.jsx";
import TabsPage from "./pages/TabsPage.jsx";
import InputPage from "./pages/InputPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BreadcrumbPage from "./pages/BreadcrumbPage.jsx";

function App() {
	return (
		<>
			<GlobalStyle />

			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/buttons" element={<ButtonPage />} />
						<Route path="/input" element={<InputPage />} />
						<Route path="/field" element={<FieldPage />} />
						<Route path="/tabs" element={<TabsPage />} />
						<Route path="/table" element={<TablePage />} />
						<Route path="/home/test/test2/test3/test4/features/security" element={<BreadcrumbPage />} />

						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
