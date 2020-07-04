(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"02sP":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculated-field",function(){return a("U7tY")}])},U7tY:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),s=a("3B7e"),l=a("xS4D"),r=t.createElement;e.default=function(){return r(s.a,null,r(l.a,{code:"const fullNameSchema = {\n  type: 'string',\n  title: 'Full Name',\n};\n\nconst ExampleCalculatedFieldMw = (props) => {\n  const { schema, next, data, MiddlewareComponent, onChange } = props;\n  if (typeof schema === 'boolean' || schema.type !== 'object') return next(props);\n\n  const handleChange = (value) => {\n    const { firstName, lastName } = data || {};\n    if (typeof value !== 'string') {\n      onChange({ ...data, firstName: null, lastName: null });\n    } else if (value.startsWith(firstName + ' ')) {\n      onChange({ ...data, lastName: value.slice(firstName.length + 1) });\n    } else if (value.endsWith(' ' + lastName)) {\n      onChange({ ...data, firstName: value.slice(0, -lastName.length - 1) });\n    } else {\n      const [newFirstName, ...newLastName] = value.split(' ');\n      onChange({ ...data, firstName: newFirstName, lastName: newLastName.length ? newLastName.join(' ') : null });\n    }\n  };\n\n  return (\n    <>\n      {next(props)}\n      <MiddlewareComponent\n        {...props}\n        parent={props}\n        schema={fullNameSchema}\n        next={() => null}\n        data={data && [data.firstName, data.lastName].filter((s) => typeof s === 'string').join(' ')}\n        onChange={handleChange}\n      />\n    </>\n  );\n};\n\nconst schema = {\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string',\n      title: 'First name',\n      default: 'Chuck',\n    },\n    lastName: {\n      type: 'string',\n      title: 'Last name',\n    },\n  },\n};\n\nconst middlewares = [\n  ExtraPropsMw,\n  ExampleCalculatedFieldMw,\n  FieldsetTemplateMw,\n  FormItemTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n"}))}}},[["02sP",0,2,5,8,11,10,9,1,3,4,6,7]]]);