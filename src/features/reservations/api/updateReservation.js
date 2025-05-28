import supabase from "@/supabase";

export default async function updateReservation({ id, newFormData }) {
  const { data, error } = await supabase
    .from("reservations")
    .update(newFormData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
