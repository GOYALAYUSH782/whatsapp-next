import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(() => {
        router.replace("/");
      })
      .catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/whatsapp.ico" />
      </Head>

      <LoginContainer>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button variant="outlined" onClick={signIn}>
          Sign in With Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: whitesmoke;
  height: 100vh;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
