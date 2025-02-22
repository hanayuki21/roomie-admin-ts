import { Select } from "@radix-ui/themes";

type Props = {
  setBuilding: (v: any) => void;
};

const BuildingSelect = ({ setBuilding }: Props) => {
  const handleChange = (value: any) => {
    console.log("Selected Building ID:", value); // Debug statement
    setBuilding(value);
  };

  return (
    <Select.Root defaultValue="Mother Rita" onValueChange={handleChange}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Choose Building Location</Select.Label>
          <Select.Item value="Mother Rita">Mother Rita</Select.Item>
          <Select.Item value="Saint Agustine">Saint Agustine</Select.Item>
          <Select.Item value="Padre Pio">Padre Pio</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default BuildingSelect;
