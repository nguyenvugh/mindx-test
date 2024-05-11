import {
  Avatar,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Task } from "./types";

type TaskCardProps = {
  task: Task;
};
function TaskCard({ task }: TaskCardProps) {
  const bgColor = ["#FFF1D6", "#D3E6FF", "#FFD9D9"];

  function randomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <Card
      w={"300px"}
      cursor={"pointer"}
      bg={bgColor[randomRange(0, bgColor.length)]}
    >
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{task.name}</Heading>
          <Text>{task.description}</Text>
          <HStack>
            <Avatar
              name={task.name}
              src={`https://picsum.photos/200?v=${randomRange(0, 100)}`}
            />
            <Avatar
              name={task.name}
              src={`https://picsum.photos/200?v=${randomRange(0, 100)}`}
            />
            <Avatar
              name={task.name}
              src={`https://picsum.photos/200?v=${randomRange(0, 100)}`}
            />
          </HStack>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}

export { TaskCard };
