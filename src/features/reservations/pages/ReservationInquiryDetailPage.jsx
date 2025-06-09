import Button from "@components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";
import useGetInquiryById from "../hooks/useGetInquiryById";
import useGetReservationByNumber from "../hooks/useGetReservationByNumber";
import useUpdateInquiryStatus from "../hooks/useUpdateInquiryStatus";
import useUpdateReservation from "../hooks/useUpdateReservation";

//TODO: 리팩토링 필요
export default function ReservationInquiryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [reservationNumber, setReservationNumber] = useState(null);

  const {
    data: inquiry,
    isLoading: loadingRequest,
    error: errorRequest,
  } = useGetInquiryById(id);

  useEffect(() => {
    if (inquiry?.reservation_number) {
      setReservationNumber(inquiry.reservation_number);
    }
  }, [inquiry?.reservation_number]);

  const {
    data: reservation = {},
    isLoading: loadingReservation,
    error: errorReservation,
  } = useGetReservationByNumber(reservationNumber, {
    enabled: !!reservationNumber,
  });

  const updateMutation = useUpdateReservation({
    closeModal: () => setIsEdit(false),
    setIsEdit,
  });

  const updateInquiryStatus = useUpdateInquiryStatus();
  const handleConfirmInquiryClick = () => {
    if (!inquiry?.id) return;
    if (
      confirm("정말 문의를 종료하시겠어요?\n종료된 문의는 다시 열 수 없습니다.")
    ) {
      updateInquiryStatus.mutate(
        { id: inquiry.id, status: "completed" },
        {
          onSuccess: () => {
            alert("문의가 종료되었습니다.");
            navigate("/reservation-inquiry");
          },
        },
      );
    }
  };

  useEffect(() => {
    if (reservation) setFormData(reservation);
  }, [reservation]);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleFormSubmit = () => {
    const { id, created_at, ...rest } = formData;
    const newFormData = {
      ...rest,
      modified_at: new Date().toISOString(),
    };
    updateMutation.mutate({ id, newFormData });
  };

  if (loadingReservation || loadingRequest) {
    return <div className="p-6">로딩 중입니다...</div>;
  }
  if (errorReservation || errorRequest) {
    return (
      <div className="p-6 text-red-600">
        오류가 발생했습니다.
        <br />
        {errorReservation?.message || errorRequest?.message}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">예약 문의 상세</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-semibold">문의 내역</h2>
          <p>{inquiry.message || "문의 내용이 없습니다."}</p>
        </div>
        <div>
          <h2 className="font-semibold">기존 예약</h2>
          <ReservationForm
            reservation={formData}
            isEdit={isEdit}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        {isEdit ? (
          <>
            <Button onClick={() => setIsEdit(false)} variant="outlined">
              취소
            </Button>
            <Button onClick={handleFormSubmit}>저장</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEdit(true)}>예약 수정하기</Button>
            <Button
              variant="outlined"
              onClick={handleConfirmInquiryClick}
              disabled={updateInquiryStatus.isLoading}
            >
              문의 종료하기
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
