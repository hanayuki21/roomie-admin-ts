import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

export const fetchRooms = () => {
    return useQuery({
        queryKey: ["rooms"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("rooms")
                .select("*");

            if (error) {
                console.log(error);
                throw error;
            }

            return data;
        },
    });
};

export const fetchRoomsWithId = (id: any) => {
    return useQuery({
        queryKey: ["rooms", id],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("rooms")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.log(error);
                throw error;
            }

            return data;
        },
    });
};

// export const fetchRoomsWithUserId = (id: any) => {
//     return useQuery({
//         queryKey: ["rooms", id],
//         queryFn: async () => {
//             const { data, error } = await supabase
//                 .from("rooms")
//                 .select("*")
//                 .eq("profile_id", id)
//                 .single();

//             if (error) {
//                 console.log(error);
//                 throw error;
//             }

//             return data;
//         },
//     });
// };
