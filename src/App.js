import { Grid, Card, Text, Avatar, css, Container, Spacer, Button } from "@nextui-org/react";
import { MdShoppingBag } from "react-icons/md";
import { FaCannabis } from "react-icons/fa";

export default function App() {
  const MockItem = ({ text }) => {
    return (
      <Card color="secondary" css={{ h: "$20" }}>
        <Text h6 size={25} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card>
    );
  };
  return (
    <>

      <Grid.Container gap={2} justify="center">
        <Grid xs={6} sm={3} css={{ px: '$4' }} >
          <Card css={{ px: '$4' }}>
            <Container gap={0} css={{ d: 'flex', flexWrap: 'nowrap' }}>
              <Avatar css={{
                marginTop: '$10',
                color: '$purple500',
              }} squared icon={<FaCannabis size={"35"} />} />
              <Spacer x={2} />
              <Text
                h1
                size={25}
                css={{
                  textGradient: '45deg, $blue500 -20%, $pink500 50%'
                }}
                weight="bold"
              >
                Smoke Weed Shop
              </Text>
            </Container>
          </Card>
        </Grid>
        <Grid xs={0} sm="6" css={{ px: '$4' }} >
          <Card css={{ px: '$4', marginTop:'$10' }}>
            <Button.Group shadow color="secondary" light>
              <Button>Bongs</Button>
              <Button>Pipas</Button>
              <Button>Rolling Papers</Button>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
             
            </Button.Group>
          </Card>
        </Grid>
        <Grid xs={3}  >
          <Avatar css={{
            marginLeft: '$10',
            marginTop: '$10',
            color: '$purple700',
          }} squared icon={<MdShoppingBag size={"45"} />} />


          <Avatar
            css={{
              marginLeft: '$5',
              marginTop: '$10'
            }}
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
          />
        </Grid>
      </Grid.Container>
    </>
  );
}
