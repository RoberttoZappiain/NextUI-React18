import react from 'react';
import { Container, Card, Row, Text, Grid, Spacer, Avatar, Button, css } from "@nextui-org/react";
import { FaCannabis } from "react-icons/fa";
import { BsFillBagFill,BsPersonCircle } from "react-icons/bs";

const Navbar = () =>{
    return (
        <Container fluid>
        <Card >
          <Row justify="center" align="center">
            <Grid.Container gap={1} justify="center" css={{ d: 'flex', flexWrap: 'nowrap' }}>
              <Grid xs={4}>
                <Button icon={<FaCannabis fill="purple" />} color="" flat>
                  <Text
                    h1
                    size={20}
                    css={{
                      textGradient: '45deg, $blue500 -20%, $pink500 50%'
                    }}
                    weight="bold"
                  >
                    Smoke Shope
                  </Text>
                </Button>
                <Spacer x={1} />
              </Grid>
              <Grid xs={4} >
                <Button light color="secondary" auto>
                  Bongs
                </Button>
                <Button light color="secondary" auto>
                  Pipas
                </Button>
                <Button light color="secondary" auto>
                  Rolling Papers
                </Button>
                <Button light color="secondary" auto>
                  Blunts
                </Button>
              </Grid>
              <Grid xs={4}>
                <Button
                css={{ marginLeft: '$80' }}
                
                  auto
                  color=""
                  icon={<BsPersonCircle fill="purple" filled />}
                />
                <Button
                  
                  auto
                  color=""
                  icon={<BsFillBagFill fill="purple" filled />}
                  holas
                />
              </Grid>
            </Grid.Container>
          </Row>
        </Card>
      </Container>
    );
}
export default Navbar;