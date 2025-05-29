import { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signIn, isPending } = useSignIn();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <form
      onSubmit={handleSignInSubmit}
      className="flex w-[300px] flex-col gap-4"
    >
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded border px-3 py-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="rounded border px-3 py-2"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-[#4763E4] py-2 text-white"
      >
        {isPending ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
