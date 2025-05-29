import supabase from "@/supabase";

export default async function deleteReservation(id) {
  const { error } = await supabase.from("reservations").delete().eq("id", id);

  if (error) throw error;

  return { id };
}
