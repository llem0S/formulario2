import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1" color="primary">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
