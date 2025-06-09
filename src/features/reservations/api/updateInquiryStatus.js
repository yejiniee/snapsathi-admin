import supabase from "@/supabase";

export default async function updateInquiryStatus({ id, status }) {
  console.log(id, status);
  const { error } = await supabase
    .from("reservation_inquiries")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
}
