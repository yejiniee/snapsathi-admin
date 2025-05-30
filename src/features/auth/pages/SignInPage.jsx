import SignInForm from "../components/SignInForm";

export default function SignInPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="text-xl font-bold">SNAPSATHI 예약 관리 시스템</h1>
      <SignInForm />
    </main>
  );
}
