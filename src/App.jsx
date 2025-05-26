import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReservationPage } from "./features/reservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
