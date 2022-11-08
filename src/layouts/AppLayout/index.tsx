import MainLayout from 'layouts/MainLayout';
import RouterContainer from 'routes';
const App = () => {
  return (
    <div className="App">
      <MainLayout className="right">
        <RouterContainer />
      </MainLayout>
    </div>
  );
};

export default App;
