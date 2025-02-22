import Input from "@/components/Input";
import { insertBacklogs } from "@/hooks/queries/backlogs/useInsertBacklogs";
import { fetchBuildingsWithId } from "@/hooks/queries/buildings/useFetchBuildings";
import { insertBuilding } from "@/hooks/queries/buildings/useInsertBuilding";
import { updateBuilding } from "@/hooks/queries/buildings/useUpdateBuilding";
import { isBuildingNameExists } from "@/utils/isBuildingExist";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/building_edit/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      id: params.id,
    };
  },
});

function RouteComponent() {
  const { id } = Route.useLoaderData();
  const navigate = useNavigate();
  const [buildingName, setBuildingName] = React.useState("");
  const [buildingImage, setBuildingImage] = React.useState("");
  const [numOfRooms, setNumOfRooms] = React.useState(0);
  const [numOfFloors, setNumOfFloors] = React.useState(0);

  const { data } = fetchBuildingsWithId(id);

  // React.useEffect(() => {
  //   if (room_location) {
  //     // Handle any updates or side effects here
  //     console.log("Room Location (Building ID) Updated:", room_location);
  //   }
  // }, [room_location]);

  const handleNumOfRoomsChange = (e: any) => {
    const value = e.target.value;
    const numberValue = parseInt(value, 10);
    // Check if the input is a number and within the range
    if (!isNaN(numberValue) && numberValue <= 100) {
      setNumOfRooms(numberValue);
    } else if (value === "") {
      // alert("The maximum room capacity is 100."); // Clear the state if the input is empty
    }
  };

  const handleNumOfFloorsChange = (e: any) => {
    const value = e.target.value;
    const numberValue = parseInt(value, 10);
    // Check if the input is a number and within the range
    if (!isNaN(numberValue) && numberValue <= 100) {
      setNumOfFloors(numberValue);
    } else if (value === "") {
      // alert("The maximum room capacity is 100."); // Clear the state if the input is empty
    }
  };

  React.useEffect(() => {
    if (data) {
      setBuildingName(data.building_name || "");
      setBuildingImage(data.building_image || "");
      setNumOfFloors(data.num_of_floors || 0);
      setNumOfRooms(data.num_of_rooms || 0);
    }
  }, [data]);

  const onHandleUpdate = async () => {
    await updateBuilding(
      id,
      buildingName,
      buildingImage,
      numOfRooms,
      numOfFloors
    );
    console.log(updateBuilding);
    alert("Data saved successfully");

    await insertBacklogs("UPDATE", `The room ${buildingName} has been edited`);
    navigate({ to: "/building" });
  };

  return (
    <div className="p-10 bg-white flex flex-col gap-7">
      <h1 className="text-center font-bold text-xl pb-8">
        Editing {buildingName}
      </h1>

      {/* Image Preview */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={
            buildingImage
              ? buildingImage
              : "src/assets/dummy/image-placeholder.png"
          }
          alt="Room Preview"
          style={{ objectFit: "cover", width: "16rem" }} // 64px equivalent
        />
      </div>

      {/* Image File Input */}

      <div
        className="inputGroup"
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          position: "relative",
        }}
      >
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setBuildingImage(
              e.target.files && e.target.files[0]
                ? URL.createObjectURL(e.target.files[0])
                : ""
            )
          }
          style={{
            fontSize: "100%",
            padding: "30px",
            outline: "none",
            border: "2px solid #35487a",
            backgroundColor: "transparent",
            borderRadius: "20px",
            width: "100%",
          }}
        />
        <label
          htmlFor="imageInput"
          style={{
            fontSize: "100%",
            position: "absolute",
            left: "0",
            padding: "0.8em",
            marginLeft: "0.5em",
            pointerEvents: "none",
            transition: "all 0.3s ease",
            color: "#35487a",
          }}
        >
          Upload Image
        </label>
      </div>

      <Input
        id="buildingName"
        htmlFor="buildingName"
        placeholder=""
        value={buildingName}
        onChange={(e) => setBuildingName(e.target.value)}
        label="Building Name"
        type={"text"}
      />

      <Input
        id="numOfRooms"
        htmlFor="numOfRooms"
        placeholder=""
        value={numOfRooms}
        onChange={handleNumOfRoomsChange}
        label="Number of Rooms"
        type={"text"}
      />

      <Input
        id="numOfFloors"
        htmlFor="numOfFloors"
        placeholder=""
        value={numOfFloors}
        onChange={handleNumOfFloorsChange}
        label="Number of Floors"
        type={"text"}
      />

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <button
          onClick={() => navigate({ to: "/building" })}
          style={{
            border: "2px solid #d1d1d1",
            backgroundColor: "#f1f1f1",
            borderRadius: "0.9em",
            cursor: "pointer",
            padding: "0.8em 1.2em",
            fontSize: "16px",
            fontWeight: 500,
            color: "#333",
            transition: "background-color 0.2s ease-in-out",
            width: "100%", // Full width
            maxWidth: "100%", // Ensure it doesn't exceed the screen width
            textAlign: "center", // Center text inside the button
          }}
          // onMouseOver={(e) => (e.target.style.backgroundColor = "#e1e1e1")}
          // onMouseOut={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
        >
          Cancel
        </button>
        <button
          onClick={onHandleUpdate}
          style={{
            border: "2px solid #35487a",
            backgroundColor: "#6b92e5",
            borderRadius: "0.9em",
            cursor: "pointer",
            padding: "0.8em 1.2em",
            fontSize: "16px",
            fontWeight: 600,
            color: "#fff",
            transition: "background-color 0.2s ease-in-out",
            width: "100%", // Full width
            maxWidth: "100%", // Ensure it doesn't exceed the screen width
            textAlign: "center", // Center text inside the button
          }}
          // onMouseOver={(e) => (e.target.style.backgroundColor = "#35487a")}
          // onMouseOut={(e) => (e.target.style.backgroundColor = "#6b92e5")}
        >
          Create
        </button>
      </div>

      {/* Style for animation in Add Room Forms */}
      <style>
        {`
    .inputGroup input:focus ~ label,
    .inputGroup input:valid ~ label {
      transform: translateY(-50%) scale(0.9); /* Raised higher */
      margin-left: 1.3em;
      padding: 0.4em;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 5) 0%, rgba(255,255, 255, 3) 70%, transparent 100%);
      border-radius: 20px; /* Rounded corners */
    }

    .inputGroup input:focus,
    .inputGroup input:valid {
      border-color: rgb(150, 150, 200);
    }
  `}
      </style>
    </div>
  );
}
