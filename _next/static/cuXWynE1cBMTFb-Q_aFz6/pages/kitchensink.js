(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+ClR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitchensink",function(){return t("BtJl")}])},BtJl:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t("3B7e"),a=t("xS4D"),i=r.createElement;e.default=function(){return i(o.a,null,i(a.a,{code:"const schema = {\n  title: 'Demo of all available widgets',\n  type: 'object',\n  properties: {\n    input: { type: 'string' },\n    textarea: { type: 'string' },\n    date: { type: 'string' },\n    time: { type: 'string' },\n    password: { type: 'string' },\n    number: { type: 'number' },\n    rate: { type: 'number' },\n    slider: { type: 'integer', minimum: 0, maximum: 100 },\n    select: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    radioGroup: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    checkbox: { type: 'boolean',title: 'Accepted' },\n    switch: { type: 'boolean' },\n    checkboxGroup: {\n      type: 'array',\n      items: {\n        type: 'string',\n        enum: ['foo', 'bar', 'baz'],\n      },\n      uniqueItems: true,\n    },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    textarea: { component: 'TextArea' },\n    password: { component: 'Password' },\n    date: { component: 'DatePicker' },\n    time: { component: 'TimePicker' },\n    rate: { component: 'Rate' },\n    slider: { component: 'Slider' },\n    radioGroup: { component: 'RadioGroup' },\n    switch: { component: 'Switch' },\n  },\n};\n\nconst middlewares = [\n  SubmitButtonMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n\n  ...withName([\n    [ 'DatePicker', DatePickerMw ],\n    [ 'TimePicker', TimePickerMw ],\n    [ 'Rate', RateMw ],\n    [ 'Switch', SwitchMw ],\n    [ 'TextArea', TextAreaMw ],\n    [ 'Password', PasswordMw ],\n    [ 'RadioGroup', RadioGroupMw ],\n    [ 'Slider', SliderMw ],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  SelectMw,\n  InputMw,\n  InputNumberMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n"}))}}},[["+ClR",0,2,5,6,10,9,1,3,4,7,8]]]);