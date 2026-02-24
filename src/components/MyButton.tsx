import Button from "@mui/material/Button";

type Props = {
  label: string;
};

export const MyButton = ({ label }: Props) => {
  return <Button variant="contained">{label}</Button>;
};
