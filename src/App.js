import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookRepo from './Component/BookRepo';
import withNavigation from './Component/withNavigation';
import withParams from './Component/WithParams';
import BookForm from './Component/Edit';
function App() {
  const BookRepWithNavigation=withNavigation(BookRepo);
  const BookformWithParamsAndNavigation = withParams(withNavigation(BookForm));
  return (
    <div className="App">
        <div className="TodoApp">
              <Router>
                <Routes>
                <Route path="/" element={< BookRepWithNavigation />} />
                <Route path="/edit/:id" element={< BookformWithParamsAndNavigation />} />
              </Routes>
              </Router>
            </div>
    </div>
  );
}

export default App;
