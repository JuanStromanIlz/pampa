import { useState } from 'react';
import trabajos from './trabajos.json';
import ThemeProvider from 'lib/components/utilities/ThemeProvider';
import Button from 'lib/components/elements/Button';
import Alert from 'lib/components/elements/Alert';
import Card from 'lib/components/elements/Card';
import Tag from 'lib/components/elements/Tag';
import List, { Item } from 'lib/components/elements/List'; 
import Image, { LazyLoad } from 'lib/components/elements/Image';
import Box from 'lib/components/elements/Box';
import Input from 'lib/components/elements/Input';
import Modal from 'lib/components/elements/Modal';
import Text from 'lib/components/elements/Text';
import Gallery from 'lib/components/elements/Gallery';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <div>
        <Text type='100'>Nuevo texto 1</Text>
        <Text type='200'>Nuevo texto 2</Text>
        <Text type='300'>Nuevo texto 3</Text>
        <Text type='400'>Nuevo texto 4</Text>
        <Text type='500'>Nuevo texto 5</Text>
        <Text type='600'>Nuevo texto 6</Text>
        <Text type='700'>Nuevo texto 7</Text>
        <Text type='800'>Nuevo texto 8</Text>
        <Text type='900'>Nuevo texto 9</Text>
        <Modal open={open} close={() => setOpen(!open)}>
            <Modal.Title>Eliminar dato from db eliminar eliminar eliminiar</Modal.Title>
            <Modal.Content>Esta accion no se puede deshacer</Modal.Content>
            <Modal.Actions>
              <Button filled onClick={() => setOpen(!open)}>Close</Button>
              <Button filled variant='success'>Aceptar</Button>
            </Modal.Actions>
        </Modal>
        <Button filled variant='warning' onClick={() => setOpen(!open)}>Nuevo boton</Button>
        {/* <Gallery open={open} images={trabajos[1].images} index={0}>
          <Gallery.Close onClick={() => setOpen(!open)} />
          <Gallery.Slider>
            {trabajos[1].images.map((img, index) => 
              <Gallery.Slide key={index} slide={index}>
                <Image src={img} />
              </Gallery.Slide>
            )}
          </Gallery.Slider>
          <Gallery.Info>
            <Gallery.Prev>arrow_back</Gallery.Prev>
            <Gallery.Next>arrow_forward</Gallery.Next>
          </Gallery.Info>
        </Gallery> */}
        <Text type='300'><a href="/">nuevo link</a></Text>
        <Input.Container error={open}>
          <Input id='nombre' name='nombre' placeholder='Inserta tu nombre' />
          <Input.Message show={open}>El nombre es requerido</Input.Message>
        </Input.Container>
        <Input.Container valid={open}>
          <Input id='apellido' name='apellido' placeholder='Inserta tu apellido' />
          <Input.Message show={open}>El apellido es requerido</Input.Message>
        </Input.Container>
        <Card>
          <Card.Media src='https://assets.arteba.org/web/final/artists/artworks/2021/09/fd90c7d96525c5eece2d18516e7c8774.jpg?11' />
          <Card.Header>
            <Text component='h4' type='500'>Card Title</Text>
            <Text component='h5' type='400'>Card Subtitle</Text>
            <Tag><Text type='300'>React</Text></Tag>
            <Tag><Text type='300'>styled-components</Text></Tag>
            <Tag><Text type='300'>Next.js</Text></Tag>
          </Card.Header>
          <Card.Content>
            <Text component='p'>Tempor sunt cupidatat aliquip mollit mollit velit Lorem ex ex quis cillum reprehenderit. Eu consequat est excepteur labore culpa ullamco nisi deserunt. Eu labore labore cupidatat veniam dolore esse labore ut.</Text>
          </Card.Content>
          <Card.Actions>
            <Button disabled>Action 1</Button>
            <Button>Action 2</Button>
          </Card.Actions>
        </Card>
        <Box>
          <Card>
            <Card.Media src='https://assets.arteba.org/web/final/artists/artworks/2021/09/d4a27c77d5c1b9fa15ca930487b2cf30.jpg?11' />
            <Card.Header>
              <Text component='h4' type='500'>Card Title</Text>
              <Text component='h5' type='400'>Card Subtitle</Text>
              <Tag><Text type='300'>React</Text></Tag>
              <Tag><Text type='300'>styled-components</Text></Tag>
              <Tag><Text type='300'>Next.js</Text></Tag>
            </Card.Header>
            <Card.Content>
              <Text component='p'>Tempor sunt cupidatat aliquip mollit mollit velit Lorem ex ex quis cillum reprehenderit. Eu consequat est excepteur labore culpa ullamco nisi deserunt. Eu labore labore cupidatat veniam dolore esse labore ut.</Text>
            </Card.Content>
            <Card.Actions>
              <Button filled>votar</Button>
              <Button>Action 2</Button>
            </Card.Actions>
          </Card>
        </Box>
        <Box>
          <List>
            <Item>
              <Item.Label><Text type={300}>Algun Artista</Text></Item.Label>
              <Item.Content><Text type={600}>Juan Stroman Ilz</Text></Item.Content>
            </Item>
            <Item>
              <Item.Label>Algun Artista</Item.Label>
              <Item.Content>Juan Stroman Ilz</Item.Content>
            </Item>
            <Item>
              <Item.Label>Algun Artista</Item.Label>
              <Item.Content>Juan Stroman Ilz</Item.Content>
            </Item>
          </List>
        </Box>
        <Alert open={open} close={()=> setOpen(!open)} variant='info'>
          <Alert.Message>Mensaje de testeo</Alert.Message>
        </Alert>
      </div>
    </ThemeProvider>
  );
}

export default App;
