import supabase from "@/supabase";

export default async function getReservationByNumber(reservationNumber) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("reservation_number", reservationNumber)
    .single();
  if (error) throw error;

  return data;
}
