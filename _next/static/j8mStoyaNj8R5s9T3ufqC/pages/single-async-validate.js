(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2AqN":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t("3B7e"),s=t("xS4D"),o=a.createElement;e.default=function(){return o(r.a,null,o(s.a,{code:"const Promise= Bluebird;\nconst { useAsync } = ReactAsyncHook;\nconst { Form: AntdForm } = Antd;\nconst ajv = new Ajv({\n  errorDataPath: 'property',\n  allErrors: true,\n  multipleOfPrecision: 8,\n  schemaId: 'auto',\n  unknownFormats: 'ignore',\n});\n\nasync function waitForStopTyping(data, focused) {\n  if (!focused) return null;\n  await Promise.delay(500);\n  return data;\n}\n\nasync function asyncValidate(dataToSend, schema) {\n  if (!dataToSend) return null;\n  await Promise.delay(2000);\n  ajv.validate(schema, dataToSend);\n  return ajv.errors;\n}\n\nconst ExampleSignleAsyncValidateMw = (props) => {\n  const { schema, data, parent, dataPath, next, extraProps } = props;\n  const touched = React.useRef(false);\n  const focused = React.useRef(false);\n\n  const { loading: typing, result: dataToSend } = useAsync(\n    waitForStopTyping,\n    [data, focused.current],\n    { executeOnUpdate: true }\n  );\n\n  const { loading: validating, result: errors } = useAsync(\n    asyncValidate,\n    [dataToSend, schema],\n    { executeOnUpdate: true }\n  );\n\n  if (\n    typeof schema === 'boolean' ||\n    schema.type === 'object' ||\n    schema.type === 'array' ||\n    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')\n  )\n    return next(props);\n\n  const error = errors && errors[0];\n\n  const onFocus = () => (touched.current = focused.current = true);\n  const onBlur = () => (focused.current = false);\n  const status = (validating && 'validating') || (error && 'error') || (!typing && touched.current && 'success') || '';\n\n  return (\n    <AntdForm.Item\n      label={`${schema.title || dataPath[dataPath.length - 1]}${typing ? ' typing' : ''} `}\n      extra={schema.description}\n      hasFeedback\n      {...(error && { help: error.message })}\n      validateStatus={status}\n    >\n      {next({\n        ...props,\n        extraProps: {\n          ...extraProps,\n          props: {\n            ...(extraProps || {}).props,\n            onFocus,\n            onBlur,\n          },\n        },\n      })}\n    </AntdForm.Item>\n  );\n};\n\nconst middlewares = [\n  ...schemaMws,\n  ExampleSignleAsyncValidateMw,\n  InputMw,\n  NotSupportedMw,\n];\n\nconst schema = {\n  type: 'object',\n  title: 'Form',\n  properties: {\n    number_1: {\n      type: 'string',\n      description: 'Max length 5',\n      title: 'String 1',\n      maxLength: 5,\n    },\n    number_2: {\n      type: 'string',\n      description: 'Min length 5',\n      title: 'String 2',\n      minLength: 5,\n    },\n  },\n};\n\nrender(\n  <Form\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n"}))}},ncfz:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-async-validate",function(){return t("2AqN")}])}},[["ncfz",0,2,5,6,10,9,1,3,4,7,8]]]);