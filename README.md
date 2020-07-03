# @gravel-form/antd

A flexible middlewares driven json schema form. The only limitation is your imagination.

## Quick start

```bash
npm install @gravel-form/antd
```

``` jsx
import React from 'React';
import 'antd/dist/antd.css';
import { Form, presetMws } from "@gravel-form/antd";

const MyFirstForm = () => {
  const schema = {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
  };

  const extraProps = {
    properties: {
      password: { component: 'Password' },
    },
  };

  const [data, setData] = React.useState();

  return (
    <Form
      layout="vertical"
      middlewares={presetMws}
      schema={schema}
      extraProps={extraProps}
      data={data}
      onChange={setData}
      onSubmit={(data) => {
        alert(JSON.stringify(data, null, 2));
      }}
    />
  );
};
```

## Playground
More examples can be found on the [playground](https://gravel-form.github.io/antd-form/basic).

## Props
### Form
| Name        | Description                                                                                                                                                                                         | Type                                                 | Default   |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|-----------|
| schema      | A v7 json schema                                                                                                                                                                                    | JSONSchema7                                          | -         |
| middlewares | A list of middlewares                                                                                                                                                                               | React.ComponentType&lt;AntdFormMiddlewareProps&gt;[] | presetMws |
| data        | Form data, if not provided initially, the data will be managed as internal state                                                                                                                    | any                                                  | -         |
| defaultData | Default form data if it's uncontrolled, will be ignored if data props is provieded                                                                                                                  | any                                                  | -         |
| onChange    | Trigger when form data updated                                                                                                                                                                      | (data:any) =&gt; void                                | -         |
| onSubmit    | Trigger when submit button clicked, consumed by `SubmitButtonMw` or `SubmitButtonWithValidationMw`                                                                                                  | (data:any) =&gt; void                                | -         |
| extraProps  | Processed by `ExtraPropsMw` in order to provide additional props to templates or form controls. Should match the structure of the schema, or customize it by replacing the middleware with your own | any                                                  | -         |

Following from props are directly forwarded to the antd from component.
| Name             | Description                                                                                                                                                  | Type                                     | Default    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------|
| colon            | Configure the default value of colon for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) | boolean                                  | true       |
| hideRequiredMark | Hide required mark for all form items                                                                                                                        | boolean                                  | false      |
| labelAlign       | text align of label of all items                                                                                                                             | left                                     | right      |
| labelCol         | label layout, like &lt;Col&gt; component. Set span offset value like {span: 3, offset: 12} or sm: {span: 3, offset: 12}                                      | object                                   | -          |
| layout           | Form layout                                                                                                                                                  | horizontal &#124; vertical &#124; inline | horizontal |
| name             | Form name. Will be the prefix of Field id                                                                                                                    | string                                   | -          |
| size             | Set field component size (antd components only)                                                                                                              | small &#124; middle &#124; large         | -          |


### Middleware
If you want to define you own middlewares, following props are you can consume or provide the if you are using the built-in middlewares.

| Name                | Description                                                                                                                                | Type                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| schema              | Json schema                                                                                                                                | JSONSchema7Definition                                                         |
| parent              | The middleware props of the parent node                                                                                                    | AntdFormMiddlewareProps                                                       |
| data                | The form data at the current node                                                                                                          | any                                                                           |
| onChange            | Callback when form data updated                                                                                                            | (string &#124; number)[]                                                      |
| schemaPath          | A array of string or number indecating the current location in the root schema                                                             | (string &#124; number)[]                                                      |
| schemaPath          | A array of string or number indecating the current location in the root form data                                                          | (string &#124; number)[]                                                      |
| MiddlewareComponent | A composed react component of the `formProps.middlewares`, you may want to invoke it when designing a custom object/array middleware.      | React.ComponentType&lt;AntdFormMiddlewareProps&gt;                            |
| formProps           | The root form props.                                                                                                                       | AntdFormProps                                                                 |
| errors              | A list of json schema validation erros. Provided by `LiveValidationMw` or `SubmitButtonWithValidationMw`, consumed by `FormItemTemplateMw` | Ajv.ErrorObject[]                                                             |
| extraProps          | See following section for details                                                                                                          | any                                                                           |

where `JSONSchema7Definition` is `JSONSchema7 | boolean` see [here](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/29026#issuecomment-422923016) for the reason.

Practically speaking, you can add any props you in you custom middlewares base on your need.

### extraProps
The shap of the `extraProps` depends on the middlewares consuming it. If you are using `ExtraPropsMw` then the `formProps.extraProps` should match the structure of the schema so that `ExtraPropsMw` is able to retreat the related node base on the current schema path. Following is a list of props that you can set if you are using the built-in middlewares.
| properties | Consumer                                      | Description                                                                                                 |
|------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| component  | Middlewares wraped by the `withName`          | multiple middlewares may support the same schema, so that you can use this property to pick the desired one |
| row        | `RowMw`                                       | props forwared to ant design `Row` component                                                                |
| col        | `ColMw`                                       | props forwared to ant design `Col` component                                                                |
| labels     | `SelectMw`, `RadioGroupMw`, `CheckboxGroupMw` | to display a different text on the UI instead of the enum value                                             |
| formItem   | `FormItemTemplateMw`                          | props forwared to ant design `Form.Item` component                                                          |
| props      | Any form controls                             | props forwared to ant design `Col` component                                                                |

<details>
  <summary>Click to Show the example.</summary>
  <p>
```jsx
import {
  ColMw,
  Form,
  FormItemTemplateMw,
  RadioGroupMw,
  RowMw,
  SelectMw,
  schemaMws,
  withName,
} = '@gravel-form/antd'

const schema = {
  type: 'object',
  properties: {
    radio: {
      type: 'string',
      enum: ['op1', 'op2']
    },
    select: {
      type: 'string',
      enum: ['op1', 'op2']
    }
  }
}

const extraProps = {
  properties: {
    radio: {
      component: 'RadioGroup',
      labels: ['Option 1', 'Option 2'],
      col: { span: 12 },
    },
    select: {
      col: { span: 12 },
    }
  }
}

<Form
  middlewares={[
    ExtraPropsMw,
    CowMw,
    ...schemaMws,
    RowMw,
    FormItemTemplateMw,
    ...withName([['RadioGroup', RadioGroupMw]]),
    SelectMw,
  ]}
  schema={schema}
  extraProps={extraProps}
/>
```
</p>
</details>

## The order of the middlewares
Because the previous middlewares can intercept the following, so ordering them correctly is also important.

Usually, you may want to place the middlewares which handle more specific situaltions in the front. For example, `InputMw` can handle any `string` type whether `enum` props is given while `SelectMw` can only handle the situation when `enum` props is given. In this case, you may want to place `SelectMw` in the front so that when `enum` is present, `SelectMw` will be rendered otherwise it will fallback to `InputMw`. If placing `InputMw` in the front, then it is always intercepting.

Also, the order may depend on the hierarchy of the elements. For example, if you want the fieldset to be wrapped by `Col` and to wrap all the fieldset content into `Row`, then you may order it as `ColMw`, `FormFieldTemplateMw`, `RowMw`.

In the preset middleware list `presetMws`, the middlewares are ordered as
- Root middlewares. Middlewares only apply on the root node, such as validation, submit button.
- Node preprocess middlewares. `ExtraPropsMw`, `LocalRefMw`
- Template middlewares. `ColMw`, `FieldsetTemplateMw`, `RowMw`, `FormItemTemplateMw`,
- Schema middlewares. middlewares that process the `object` and `array` type.
- Form contontrols. `InputMw`, `DateTimeMw`, `SelectMw` etc.
- Default fallback. A middleware without any conditions, for display a error message if none of the form control middlewares can handle the current node.
