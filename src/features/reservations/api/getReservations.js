import supabase from "@/supabase";

export default async function getReservations(status) {
  let query = supabase
    .from("reservations")
    .select("*")
    .order("created_at", { ascending: false });

  if (status === "confirmed") query = query.eq("status", "confirmed");
  else if (status === "unconfirmed") query = query.eq("status", "unconfirmed");

  const { data, error } = await query;

  if (error) throw error;

  return data;
}
