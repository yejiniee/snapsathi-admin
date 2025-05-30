import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate("/reservation", { replace: true });
    },
    onError: (error) => {
      alert("로그인 실패: " + error.message);
    },
  });
};
