import { Button, Badge } from "react-bootstrap";

const MyBadge = ({ text, color, className }) => {
  return (
    <Button variant={color} className={className}>
      <Badge variant="dark">{text}</Badge>
    </Button>
  );
};

export default MyBadge;
