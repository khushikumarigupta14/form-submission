import React from "react";
import FormSubmit from "./components/FormSubmit";
import FormDisplay from "./components/FormDisplay";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });
const App = () => {
  return (
    <div>
      <HistoryRouter
        history={history}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<FormSubmit />} />
          <Route path="/form/:id" element={<FormDisplay />} />
          <Route path="/form/" element={<div>No form ID provided</div>} />
        </Routes>
      </HistoryRouter>
    </div>
  );
};

export default App;
