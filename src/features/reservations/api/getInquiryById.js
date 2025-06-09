import supabase from "@/supabase";

export default async function getInquiryById(inquiryId) {
  const { data, error } = await supabase
    .from("reservation_inquiries")
    .select("*")
    .eq("id", inquiryId)
    .eq("status", "pending")
    .single();
  if (error) throw error;
  return data;
}
