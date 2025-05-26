import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  background-color: var(--background-color);
`;

// MainSection unchanged, still full height & flex column
const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// New container inside MainSection that limits width and centers content
const ContentWrapper = styled.div`
  max-width: 900px;               /* Set max width of content */
  margin: 2rem auto;              /* Center horizontally + vertical space */
  padding: 1rem;                  /* Inner padding */
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  /* Optional scale down */
  /* transform: scale(0.95);
  transform-origin: top center; */
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Sidebar />
      <MainSection>
        <Header />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MainSection>
    </AppContainer>
  );
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardMainContent />
            </Layout>
          }
        />
        {/* Add more routes here as needed */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
