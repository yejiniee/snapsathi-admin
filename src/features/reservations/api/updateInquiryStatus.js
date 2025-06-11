import supabase from "@/supabase";

export default async function updateInquiryStatus({
  id,
  status,
  reviewed_at,
  reviewed_by,
}) {
  console.log(id, status);
  const { error } = await supabase
    .from("reservation_inquiries")
    .update({ status, reviewed_at, reviewed_by })
    .eq("id", id);

  if (error) throw error;
}
