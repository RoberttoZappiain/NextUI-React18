import React from 'react';
import { Container, Card, Row, Text, Grid, Spacer, Avatar, Button, css } from "@nextui-org/react";
import  Navbar  from "../src/navbar";
import {LockIcon} from '../src/icons/LockIcon';
import { Card5 } from './Card5';
import { Card4 } from './Card4';
import { Card2 } from './Card2';

export default function App() {
  return (
    <>
       <Navbar/>
       <Grid.Container  css={{marginLeft: '$0'}}>     
      <Grid css={{m:"$5", marginLeft:"$20", marginTop:"$15"}} xs={12} sm={2}>
        <Card2 />
      </Grid>   
      <Grid css={{m:"$5"}} xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid css={{m:"$5"}} xs={12} sm={4}>
        <Card5 />
      </Grid>
      <Grid css={{m:"$5",marginLeft:"$20" }} xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid css={{m:"$5", marginTop:"$15"}} xs={12} sm={2}>
        <Card2 />
      </Grid>   
      <Grid css={{m:"$5"}} xs={12} sm={4}>
        <Card4 />
      </Grid>
      </Grid.Container>
<Grid.Container>


</Grid.Container>
     
    </>
     
  );
}
