(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2679],{2937:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/number-field",function(){return n(1685)}])},1685:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return t},title:function(){return a}});var i=n(5250),l=n(8570),t=!0,a="NumberField";function d(e){var r=Object.assign({p:"p",code:"code",pre:"pre",h2:"h2",a:"a",h3:"h3"},(0,l.ah)(),e.components),n=r.Toc,t=r.Preview,a=r.NumberField,d=r.PropsTable,o=r.BasicNumberField,c=r.DisabledNumberField,u=r.RequiredNumberField,m=r.ErrorNumberField,p=r.ValuesNumberField,h=r.AmountNumberField,b=r.HideNumberField,x=r.DecimalNumberField,f=r.CurrencyNumberField,N=r.PercentageNumberField,j=r.UnitNumberField;return h||s("AmountNumberField",!0),o||s("BasicNumberField",!0),f||s("CurrencyNumberField",!0),x||s("DecimalNumberField",!0),c||s("DisabledNumberField",!0),m||s("ErrorNumberField",!0),b||s("HideNumberField",!0),a||s("NumberField",!0),N||s("PercentageNumberField",!0),t||s("Preview",!0),d||s("PropsTable",!0),u||s("RequiredNumberField",!0),n||s("Toc",!0),j||s("UnitNumberField",!0),p||s("ValuesNumberField",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{selector:"#toc",items:'[{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#simple-number-field","title":"Simple Number Field"},{"anchor":"#disabled-number-field","title":"Disabled Number Field"},{"anchor":"#required-number-field","title":"Required Number Field"},{"anchor":"#number-field-with-an-error","title":"Number Field with an Error"},{"anchor":"#min-and-max-values","title":"Min and max Values"},{"anchor":"#step-amount","title":"Step Amount"},{"anchor":"#hide-stepper","title":"Hide Stepper"},{"anchor":"#diplay-a-decimals","title":"Diplay a Decimals"},{"anchor":"#diplay-a-currency","title":"Diplay a Currency"},{"anchor":"#diplay-a-percentage","title":"Diplay a Percentage"},{"anchor":"#display-a-unit","title":"Display a Unit"}]'}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"NumberField"})," components allows users to enter numbers with a keyboard. This includes plain numbers as well as percentages, decimals and sums of money. It consists of a label, an input field and a help text. The later also includes error messages."]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(a,{label:"Try me",description:"You should really try this!",defaultValue:9.99,formatOptions:{style:"currency",currency:"EUR"}})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n"})}),"\n",(0,i.jsx)(r.h2,{id:"props",children:(0,i.jsx)(r.a,{href:"#props",children:"Props"})}),"\n",(0,i.jsx)(d,{props:[{property:"label",type:"ReactNode",description:"The label text. ",default:"none"},{property:"description",type:"ReactNode",description:"\tA helpful text.",default:"none"},{property:"errorMessage",type:"ReactNode",description:"An error message.",default:"none"},{property:"error",type:"boolean",description:"If `true`, the field is considered invalid and if set the errorMessage is shown instead of the `description`.",default:"false"},{property:"value",type:"number",description:"The value of the input field.",default:"none"},{property:"disabled",type:"boolean",description:"If `true`, the input is disabled.",default:"false"},{property:"required",type:"boolean",description:"If `true`, the input is required.",default:"false"},{property:"readOnly",type:"boolean",description:"If `true`, the input is readOnly.",default:"false"},{property:"onChange",type:"function",description:"A callback function that is called with the input's current value when the input value changes.",default:""},{property:"formatOptions",type:"Intl.NumberFormatOptions",description:"Apply formatting. See `Intl.NumberFormatOptions` for available options.",default:""},{property:"width",type:"string",description:"Control the width of the field.",default:"100%"},{property:"...",type:"",description:"Yes you can use all regular attributes of input!",default:""}]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:(0,i.jsx)(r.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(r.h3,{id:"simple-number-field",children:(0,i.jsx)(r.a,{href:"#simple-number-field",children:"Simple Number Field"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(o,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const BasicNumberField = () => <NumberField label=\"Numbers\" />;\n"})}),"\n",(0,i.jsx)(r.h3,{id:"disabled-number-field",children:(0,i.jsx)(r.a,{href:"#disabled-number-field",children:"Disabled Number Field"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(c,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const DisabledNumberField = () => (\n  <NumberField label=\"Field disabled\" disabled />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"required-number-field",children:(0,i.jsx)(r.a,{href:"#required-number-field",children:"Required Number Field"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(u,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const RequiredNumberField = () => (\n  <NumberField label=\"Numbers\" required />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"number-field-with-an-error",children:(0,i.jsx)(r.a,{href:"#number-field-with-an-error",children:"Number Field with an Error"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(m,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:'import { NumberField } from \'@marigold/components\';\n\nexport const ErrorNumberField = () => (\n  <NumberField label="Amount" error errorMessage="Something went wrong!" />\n);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"min-and-max-values",children:(0,i.jsx)(r.a,{href:"#min-and-max-values",children:"Min and max Values"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(p,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const ValuesNumberField = () => (\n  <NumberField label=\"Length\" defaultValue={55} minValue={0} maxValue={100} />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"step-amount",children:(0,i.jsx)(r.a,{href:"#step-amount",children:"Step Amount"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(h,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const AmountNumberField = () => (\n  <NumberField label=\"Length\" defaultValue={10} step={10} />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"hide-stepper",children:(0,i.jsx)(r.a,{href:"#hide-stepper",children:"Hide Stepper"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(b,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const HideNumberField = () => (\n  <NumberField label=\"Numbers\" hideStepper />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"diplay-a-decimals",children:(0,i.jsx)(r.a,{href:"#diplay-a-decimals",children:"Diplay a Decimals"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(x,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const DecimalNumberField = () => (\n  <NumberField\n    label=\"Decimals\"\n    formatOptions={{\n      signDisplay: 'exceptZero',\n      minimumFractionDigits: 1,\n      maximumFractionDigits: 2,\n    }}\n    defaultValue={0}\n  />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"diplay-a-currency",children:(0,i.jsx)(r.a,{href:"#diplay-a-currency",children:"Diplay a Currency"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(f,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const CurrencyNumberField = () => (\n  <NumberField\n    label=\"Amount\"\n    defaultValue={19.99}\n    formatOptions={{\n      style: 'currency',\n      currency: 'USD',\n    }}\n  />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"diplay-a-percentage",children:(0,i.jsx)(r.a,{href:"#diplay-a-percentage",children:"Diplay a Percentage"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(N,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const PercentageNumberField = () => (\n  <NumberField\n    label=\"Percentage\"\n    defaultValue={0.42}\n    formatOptions={{\n      style: 'percent',\n    }}\n  />\n);\n"})}),"\n",(0,i.jsx)(r.h3,{id:"display-a-unit",children:(0,i.jsx)(r.a,{href:"#display-a-unit",children:"Display a Unit"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(j,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { NumberField } from '@marigold/components';\n\nexport const UnitNumberField = () => (\n  <NumberField\n    label=\"Length\"\n    defaultValue={150}\n    minValue={0}\n    formatOptions={{\n      style: 'unit',\n      unit: 'centimeter',\n      unitDisplay: 'short',\n    }}\n  />\n);\n"})})]})}function s(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.ah)(),e.components),n=r.wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return r=2937,e(e.s=r);var r}));var r=e.O();_N_E=r}]);