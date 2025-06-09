import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./features/auth/pages/SignInPage";
import { ReservationPage } from "./features/reservations";
import ReservationInquiryPage from "./features/reservations/pages/ReservationInquiryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reservation" element={<ReservationPage />} />
        <Route
          path="/reservation-inquiry"
          element={<ReservationInquiryPage />}
        />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
