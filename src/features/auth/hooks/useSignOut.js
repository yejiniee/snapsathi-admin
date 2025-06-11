import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../stores/useUserStore";
import { signOut } from "../api/auth";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { clearUser } = useUserStore();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      clearUser();
      navigate("/signin", { replace: true });
    },
    onError: (error) => {
      alert("로그아웃 실패: " + error.message);
    },
  });
};
