# PAMPA
Library of React components, cleaner and customizable. Focus in a clean layout and open spaces.

# Alert

A little popup alert box to display info to the user, like success actions or errors.

```javascript
<Alert variant='success'>
  <Alert.Message>¡Success message!</Alert.Message>
</Alert>
```
## Props
### <Alert />
Property | type | default | required | porpose
open | `boolean` | | true | If true the components shows up.
close | `function` | | false | The action to close the components, mostly it could set `false` to the `open` prop.
delay | `number` | 3000 | false | The time it takes to the alert dissapear.
variant | ['info', 'success', 'warning', 'error'] | 'info' | false | Change the color of the alert.
action | `component` | | false | Aditionally you can pass another component to do some action, like another button to dissmiss the action.
children | `component` | | false | Wrapps the `<Alert.Message/>` component.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*

### <Alert.Message>
Property | type | default | required | porpose
children | `string` | | false | display the text of the alert.
sx | `js object` | | false | You can pass custom styles to the component itself instead of use *element.style*