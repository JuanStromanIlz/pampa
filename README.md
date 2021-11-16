# PAMPA
Library of React components, cleaner and customizable. Focus in a clean layout and open spaces.
All components use [styled-components](https://styled-components.com/) so you can use all them tools.

# Alert

A little pop-up alert box to display info to the user, like success actions or errors.

```javascript
const [alert, setAlert] = useState(true);

<Alert open={alert} close={() => setAlert(!alert)} delay={5000} variant='success'>
  <Alert.Message>¡Success message!</Alert.Message>
</Alert>
```

### <Alert />
Property | type | default | required | porpose
--- | --- | --- | --- | ---
open | `boolean` | | true | If true the components shows up.
close | `function` | | false | The action to close the components, mostly it could set `false` to the `open` prop.
delay | `number` | 3000 | false | The time it takes to the alert dissapear.
variant | `'info', 'success', 'warning', 'error'` | 'info' | false | Change the color of the alert.
action | `component` | | false | Aditionally you can pass another component to do some action, like another button to dissmiss the action.
children | `component` | | false | Wrapps the `<Alert.Message/>` component.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Alert.Message>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | `string` | | false | display the text of the alert.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Box

A frame with a border, you can use it for cards, list or any component that you want to have a border in line with the other styles.

```javascript
<Box>
  {children}
</Box>
```

### <Box/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | | | false | Add a border to any component.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Button

There is a bounch of diferent buttons in the package, here is a little example.

```javascript
/* Common type */
<Button>Do Something</Button>

/* Filled variant */
<Button filled>Filled</Button>

/* Like the Alert, you can use a variant */
<Button variant='warning' filled>Delete Item</Button>

/* There is a option for icons (you need to add the icons link from google fonts), so you can style all the icons in the app in the same way */
<Button.Icon>arrow_back</Button.Icon>
```

### <Button/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
filled | `boolean` | false | false | Make the button filled.
variant | `'info', 'success', 'warning', 'error'` | 'info' | false | Change the variant of the button.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Card

Simple card component with the posibility of customize the content.

```javascript
<Card>
  <Card.Media src='imgs/some-img.jpg' />
  <Card.Header>
    <Text component='h4' type={500}>Card Title</Text>
    <Text component='h5'>Card Subtitle</Text>
  </Card.Header>
  <Card.Content>
    <Text component='p'>Some description</Text>
  </Card.Content>
  <Card.Actions>
    <Button>See Detail</Button>
    <Button variant='error'>Delete from cart</Button>
  </Card.Actions>
</Card>
```

### <Card/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | | | false | Container for all card children components.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Card.Media/>
Display a img in the component.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
src | `string` | | true | Set the img displayed in the component.
children | `component` | | false | This component is a `figure` HTML tag, so you cand pass a *string* to be the `figcaption`.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Card.Header/>
This is a wrapper `div` to determinate a section in a card.

### <Card.Content/>
This is a wrapper `div` to determinate a section in a card.

### <Card.Actions/>
This is a wrapper `div` to determinate a section in a card.

## Gallery

A full screen gallery to see imgs or any other content in detail. The component create a new [portal](https://es.reactjs.org/docs/portals.html) to mount this.

```javascript
const [gallery, setGallery] = useState(true);

<Gallery open={gallery} items={5} index={0}>
  <Gallery.Close onClick={() => setGallery(!gallery)}>close</Gallery.Close>
  <Gallery.Slider>
    {arrayOfImages.map((img, index) => 
      <Gallery.Slide key={index} slide={index}>
        <Image src={img} />
      </Gallery.Slide>
    )}
  </Gallery.Slider>
  <Gallery.Info>
    <Gallery.Prev>arrow_back</Gallery.Prev>
    <Gallery.Next>arrow_forward</Gallery.Next>
  </Gallery.Info>
</Gallery>
```

### <Gallery/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
open | `boolean` | | true | If `true` opens the gallery.
items | `number` | 0 | true | The exact number of items in the gallery.
index | `number` | 0 | false | You can pass the index when opens the component, so you can start from any `<Slice/>`.
children | | | true | Wrapper all gallery components to access to the Context.

### <Gallery.Slider/>
This is a wrapper for all the Slide.

### <Gallery.Slide/>
This component wrap all the info that you wanna show in any card.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
slide | `number` | | true | The index for the component to use the pagination.

### <Gallery.Info/>
Display the position and the total of slides.

### <Gallery.Close/>
With this button you can trigger the close of the gallery.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | `string` | | true | Set a icon to display from google icons.

### <Gallery.Prev/>
With this button you can trigger the prev slide of the gallery.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | `string` | | true | Set a icon to display from google icons.

### <Gallery.Next/>
With this button you can trigger the next slide of the gallery.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
children | `string` | | true | Set a icon to display from google icons.

## Image

A component for imgs to use in any component and have matching styles. It have the same props that any `<img/>` HTML tag

Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

Alternatively you can import `LazyLoad` from the Image file, to use a lazy-load image.

## Input 

A input component with styles for validation.

```javascript
/* You can use the input tag alone or with the container to use the custom styles for add in validations */

let error = false;
let valid = true;
let errorMessage = false;

<Input.Container error={error} valid={valid}>
  <Input id='name' name='name' placeholder='insert your name' />
  <Input.Message show={errorMessage}>The name is requerided</Input.Message>
</Input.Container>

<Input id='name' name='name' placeholder='insert your name' />
```

### <Input.Container/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
error | `boolean` | | | false | Set to true to display the error styles.
valid | `boolean` | | false | Set to true to display the valid style.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Input.Message/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
show | `boolean` | | | true | Show the message from the input.
variant | `'info', 'success', 'warning', 'error'` | 'info' | false | Change the color of the message.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## List

A big list to display content.

```javascript
<List>
  <Item>
    <Item.Label>
      <Text type={300}>Package creator</Text>
    </Item.Label>
    <Item.Content>
      <Text type={600}>Juan Stroman Ilz</Text>
    </Item.Content>
  </Item>
  <Item>
    <Item.Label>
      <Text type={300}>First version release</Text>
    </Item.Label>
    <Item.Content>
      <Text type={600}>2021</Text>
    </Item.Content>
  </Item>
  <Item>
    <Item.Label>
      <Text type={300}>Framework</Text>
    </Item.Label>
    <Item.Content>
      <Text type={600}>React.js</Text>
    </Item.Content>
  </Item>
</List>

/* Here in combination with Box */

<Box>
  <List>
    <Item>
      <Item.Label>
        <Text type={300}>Package creator</Text>
      </Item.Label>
      <Item.Content>
        <Text type={600}>Juan Stroman Ilz</Text>
      </Item.Content>
    </Item>
    <Item>
      <Item.Label>
        <Text type={300}>First version release</Text>
      </Item.Label>
      <Item.Content>
        <Text type={600}>2021</Text>
      </Item.Content>
    </Item>
    <Item>
      <Item.Label>
        <Text type={300}>Framework</Text>
      </Item.Label>
      <Item.Content>
        <Text type={600}>React.js</Text>
      </Item.Content>
    </Item>
  </List>
</Box>
```

### <List/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Item/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Item.Label/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Item.Content/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Modal

Create a modal pop-up. The component create a new [portal](https://es.reactjs.org/docs/portals.html) to mount this.

```javascript
const [open, setOpen] = useState(true);

<Modal open={open} close={() => setOpen(!open)}>
  <Modal.Title>Delete item</Modal.Title>
  <Modal.Content>This action can't be undone.</Modal.Content>
  <Modal.Actions>
    <Button filled onClick={() => setOpen(!open)}>Close</Button>
    <Button filled variant='error' onClick={deleteItem}>Delete</Button>
  </Modal.Actions>
</Modal>
```

### <Modal/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
open | `boolean` | | false | Tell the component to open the pop-up.
close | `function` | false | Actions to close the modal, mostly it will set to false the `open` property.
id | `string` | 'modal-view' | false | Pass a custom name to the modal id.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Modal.Title/>
The title of the modal.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Modal.Content/>
The content of the modal.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

### <Modal.Actions/>
The wrapper for the actions of the modal.

Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Tag 

A component to list details or hashtags.

```javascript
<Tag>
  <Text type={300}>React</Text>
</Tag>

/* or */

<Tag>
  <a href='/somewhere'>external detail</a>
</Tag>
```

### <Tag/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## Text

A component to control typography and match styles in the app.

```javascript
<Text type={700}>Title</Text>
```

### <Text/>
Property | type | default | required | porpose
--- | --- | --- | --- | ---
component | `HTML tag` | 'span' | false | Change the semantic tag of the component.
type | `100, 200, 300, 400, 500, 600, 700, 800, 900` | 400 | false | Change the style of font.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*.

## ThemeProvider

You need to wrap the app root with this theme provider, to access to the default theme. This is extension of the styled-components ThemeProvider, if you want to overrite the defaul theme pass a `theme` to the component.