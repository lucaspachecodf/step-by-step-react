import BreadcrumbsNavigation from "components/BreadcrumbsNavigation";
import Image from "components/Image";
import imageRegister from '../../assets/images/image_register.png'
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import { Grid } from "@mui/material";
import GridContainer from "components/GridContainer";
import Div from "components/Div";

const NewAccreditation = () => {

  return (
    <GridContainer item justifyContent="space-between" alignItems="center">
      <Grid item xs={12} sm={5}>
        <Div>
          <BreadcrumbsNavigation />
          <Image src={imageRegister} width={450} height={320} />
          <Title variant="h5">Seja um novo prestador CASSI</Title>
          <Paragraph>
            Para se credenciar à CASSI o primiero passo é registrar a sua proposta
            que será avaliada de acordo com a necessidade de ofeta dos serviços
            na localidade
          </Paragraph>
        </Div>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Div>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>

          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
          <Title variant="h5">Formulário</Title>
        </Div>
      </Grid>
    </GridContainer>
  );
};

export default NewAccreditation;