import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Button,
  Container,
  Text,
  Grid,
  Spacer,
} from '@nextui-org/react';

const HomeScreen = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            QuizMaster
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link as={Link} to="/">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/account">
            Account
          </Navbar.Link>
          <Navbar.Link as={Link} to="/create">
            Create a Quiz
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} to="/login">
              Login
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* Main Content */}
      <Container css={{ mt: '$15', textAlign: 'center' }}>
        <Text h1 size={50} weight="bold" css={{ mb: '$10' }}>
          Available Quizzes
        </Text>

        {/* Navigation Buttons */}
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={6}>
            <Button
              as={Link}
              to="/account"
              shadow
              color="primary"
              css={{ width: '100%' }}
            >
              Account
            </Button>
          </Grid>
          <Grid xs={12} sm={6}>
            <Button
              as={Link}
              to="/create"
              shadow
              color="secondary"
              css={{ width: '100%' }}
            >
              Create a Quiz
            </Button>
          </Grid>
        </Grid.Container>

        <Spacer y={2} />

        {/* Empty State Message */}
        <Text h3 css={{ color: '$accents7' }}>
          No quizzes available yet.
        </Text>
      </Container>
    </>
  );
};

export default HomeScreen;
