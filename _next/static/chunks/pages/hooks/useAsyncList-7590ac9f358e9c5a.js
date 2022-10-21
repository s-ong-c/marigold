(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{4191:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useAsyncList",function(){return s(7725)}])},7725:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return r},title:function(){return o}});var t=s(5250),a=s(8570),r=!0,o="useAsyncListData";function i(e){var n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,a.ah)(),e.components),s=n.Toc,r=n.Preview,o=n.AsyncTable;return o||l("AsyncTable",!0),r||l("Preview",!0),s||l("Toc",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#examples","title":"Examples"},{"anchor":"#async-table","title":"Async Table"}]'}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"useAsyncListData"})," hook from ",(0,t.jsx)(n.a,{href:"https://github.com/adobe/react-spectrum/tree/main/packages/%40react-stately",children:(0,t.jsx)(n.code,{children:"react-spectrum stately package"})}),". It extends the ",(0,t.jsx)(n.code,{children:"useListData"})," which is also from ",(0,t.jsx)(n.code,{children:"react-spectrum"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It supports async loading, pagination, sorting and filtering.\nIt also manages loading and error states, supports abortable requests and works with any data fetchig library or the built-in browser fetch API."}),"\n",(0,t.jsxs)(n.p,{children:["More information can be found in the ",(0,t.jsx)(n.a,{href:"https://react-spectrum.adobe.com/react-stately/useAsyncList.html",children:"react-spectrum documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:(0,t.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,t.jsx)(n.h3,{id:"import",children:(0,t.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,t.jsx)(n.p,{children:"To import the hook you just have to use this code below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useAsyncListData, useListData } from '@marigold/components';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.h3,{id:"async-table",children:(0,t.jsx)(n.a,{href:"#async-table",children:"Async Table"})}),"\n",(0,t.jsxs)(n.p,{children:["This is an example from the ",(0,t.jsx)(n.a,{href:"/components/table/",children:(0,t.jsx)(n.code,{children:"<Table>"})})," component. The data will be loaded asynchronously."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(o,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Table, useAsyncList } from \'@marigold/components\';\n\nexport interface asyncData {\n  name: string;\n  height: string;\n  mass: string;\n  birth_year: string;\n}\n\nexport const AsyncTable = () => {\n  let list = useAsyncList<asyncData>({\n    async load({ signal }) {\n      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {\n        signal,\n      });\n      let json = await res.json();\n      return {\n        items: json.results,\n      };\n    },\n    async sort({ items, sortDescriptor }) {\n      return {\n        items: items.sort((a, b) => {\n          let first = a[sortDescriptor.column as keyof asyncData];\n          let second = b[sortDescriptor.column as keyof asyncData];\n          let cmp =\n            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;\n          if (sortDescriptor.direction === \'descending\') {\n            cmp *= -1;\n          }\n          return cmp;\n        }),\n      };\n    },\n  });\n\n  return (\n    <Table\n      aria-label="Example table with client side sorting"\n      sortDescriptor={list.sortDescriptor}\n      onSortChange={list.sort}\n    >\n      <Table.Header>\n        <Table.Column key="name" allowsSorting>\n          Name\n        </Table.Column>\n        <Table.Column key="height" allowsSorting>\n          Height\n        </Table.Column>\n        <Table.Column key="mass" allowsSorting>\n          Mass\n        </Table.Column>\n        <Table.Column key="birth_year" allowsSorting>\n          Birth Year\n        </Table.Column>\n      </Table.Header>\n      <Table.Body items={list.items}>\n        {item => (\n          <Table.Row key={(item as any).name}>\n            {columnKey => <Table.Cell>{(item as any)[columnKey]}</Table.Cell>}\n          </Table.Row>\n        )}\n      </Table.Body>\n    </Table>\n  );\n};\n'})})]})}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.ah)(),e.components),s=n.wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=4191,e(e.s=n);var n}));var n=e.O();_N_E=n}]);