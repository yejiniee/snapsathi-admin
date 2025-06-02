import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signOut } from "../api/auth";

export const useSignOut = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/signin", { replace: true });
    },
    onError: (error) => {
      alert("로그아웃 실패: " + error.message);
    },
  });
};
