import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

const ScrapCard = (props) => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="md">
    <Image
      objectFit="cover"
      maxW="150px"
      src={props.image}
      alt="Caffe Latte"
    />
    <Box>
    <Card.Body>
        <Card.Title mb="2">{props.title}</Card.Title>
        <Card.Description>
          Dodano: data
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button>Czytaj więcej</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)

export default ScrapCard;