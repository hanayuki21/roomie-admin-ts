import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

export const fetchBacklogs = () => {
  return useQuery({
    queryKey: ["backlogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("backlogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data;
    },
  });
};
