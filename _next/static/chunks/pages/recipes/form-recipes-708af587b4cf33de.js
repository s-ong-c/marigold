(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1110],{7730:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recipes/form-recipes",function(){return t(716)}])},716:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},title:function(){return a}});var o=t(5250),l=t(8570),i=!0,a="Forms";function r(e){var n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,l.ah)(),e.components),t=n.Toc,i=n.Message,a=n.Preview,r=n.OrganizationSearch,s=n.BookingForm;return s||c("BookingForm",!0),i||c("Message",!0),r||c("OrganizationSearch",!0),a||c("Preview",!0),t||c("Toc",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{selector:"#toc",items:'[{"anchor":"#organization-search-form","title":"Organization Search Form"},{"anchor":"#bookings-formular","title":"Bookings Formular"}]'}),"\n",(0,o.jsxs)(n.p,{children:["We used for these examples form components like ",(0,o.jsx)(n.code,{children:"<FieldGroup>"}),", ",(0,o.jsx)(n.a,{href:"/components/text-field/",children:(0,o.jsx)(n.code,{children:"<TextField>"})}),",",(0,o.jsx)(n.a,{href:"/components/select/",children:(0,o.jsx)(n.code,{children:"<Select>"})}),", ",(0,o.jsx)(n.a,{href:"/components/checkbox/",children:(0,o.jsx)(n.code,{children:"<Checkbox>"})})," and ",(0,o.jsx)(n.a,{href:"/components/radio/",children:(0,o.jsx)(n.code,{children:"<Radio>"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<FieldGroup>"})," is wrapped around the other components as you can see in the examples below. With its prop ",(0,o.jsx)(n.code,{children:"labelWidth"})," we set the width of the label to a certain amount, so it has a clean look."]}),"\n",(0,o.jsx)(i,{messageTitle:"Note",variant:"info",children:(0,o.jsx)(n.p,{children:"Please note that the form components need to have a label prop."})}),"\n",(0,o.jsx)(n.h2,{id:"organization-search-form",children:(0,o.jsx)(n.a,{href:"#organization-search-form",children:"Organization Search Form"})}),"\n",(0,o.jsx)(n.p,{children:"Example from the typical Search Form from the Core."}),"\n",(0,o.jsx)(a,{children:(0,o.jsx)(r,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import {\n  Checkbox,\n  FieldGroup,\n  Stack,\n  Select,\n  TextField,\n  ThemeProvider,\n  CheckboxGroup,\n  Button,\n} from \'@marigold/components\';\n\nimport coreTheme from \'@marigold/theme-core\';\n\nexport const OrganizationSearch = () => {\n  return (\n    <ThemeProvider theme={coreTheme}>\n      <Stack space="large" alignX="center">\n        <Stack space="xsmall">\n          <FieldGroup labelWidth="300px">\n            <TextField label="Suche in Veranstaltername / Kontaktadresse" />\n            <TextField type="tel" label="Telefon" />\n            <TextField label="PLZ" />\n            <Select label="Status">\n              <Select.Option key={1}>alle</Select.Option>\n              <Select.Option key={2}>produktiv</Select.Option>\n              <Select.Option key={3}>freigeschaltet</Select.Option>\n              <Select.Option key={4}>inaktiv</Select.Option>\n              <Select.Option key={5}>gesperrt</Select.Option>\n            </Select>\n            <Select label="Zahlart">\n              <Select.Option key={1}>alle</Select.Option>\n              <Select.Option key={2}>Lastschrift</Select.Option>\n              <Select.Option key={3}>Auszahlung gesperrt</Select.Option>\n              <Select.Option key={4}>\n                produktiv / Bankverbindung fehlt\n              </Select.Option>\n            </Select>\n            <CheckboxGroup label>\n              <Checkbox value="1">nur Eigene anzeigen</Checkbox>\n              <Checkbox value="2">bilateral anzeigen</Checkbox>\n            </CheckboxGroup>\n          </FieldGroup>\n        </Stack>\n        <Button variant="primary" type="submit">\n          Suchen\n        </Button>\n      </Stack>\n    </ThemeProvider>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"bookings-formular",children:(0,o.jsx)(n.a,{href:"#bookings-formular",children:"Bookings Formular"})}),"\n",(0,o.jsx)(n.p,{children:"This Example shows the Bookings Formular from an Organization under Administration."}),"\n",(0,o.jsx)(a,{children:(0,o.jsx)(s,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import {\n  Button,\n  FieldGroup,\n  Inline,\n  Radio,\n  TextField,\n  ThemeProvider,\n  Stack,\n  FieldBase,\n  Input,\n  Select,\n  TextArea,\n} from \'@marigold/components\';\n\nimport coreTheme from \'@marigold/theme-core\';\n\nexport const BookingForm = () => (\n  <ThemeProvider theme={coreTheme}>\n    <Stack space="large">\n      <FieldGroup labelWidth="250px">\n        <Stack space="xsmall">\n          <Radio.Group label="Anrede" defaultValue="3" orientation="horizontal">\n            <Radio value="1">Herr</Radio>\n            <Radio value="2">Frau</Radio>\n            <Radio value="3">keine</Radio>\n          </Radio.Group>\n          <TextField label="Titel" />\n          <TextField label="Vorname" />\n          <TextField label="Nachname" />\n          <TextField label="Firma" />\n        </Stack>\n        <Stack space="xsmall">\n          <TextField label="Stra\xdfe" />\n          {/* This shouldn\'t be used, we need to fix it */}\n          <FieldBase label="PLZ / Ort">\n            <Inline space="xsmall">\n              <Input width="50px" />\n              <Input />\n            </Inline>\n          </FieldBase>\n          <TextField label="Adresszusatz" />\n          <Select label="Land">\n            <Select.Option key={1}>Deutschland</Select.Option>\n            <Select.Option key={2}>Schweiz</Select.Option>\n            <Select.Option key={3}>\xd6sterreich</Select.Option>\n          </Select>\n        </Stack>\n        <Stack space="xsmall">\n          <TextField type="tel" label="Telefon" />\n          <TextField label="Fax" />\n          <TextField type="email" label="E-Mail" />\n        </Stack>\n        <Stack space="xsmall">\n          {/* This shouldn\'t be used, we need to fix it */}\n          <FieldBase label="nach Kundennummern suchen">\n            <Inline space="xsmall">\n              <Input type="search" width="150px" />\n              <Button variant="secondary" size="small">\n                Suchen\n              </Button>\n              <Button variant="secondary" size="small">\n                Felder leeren\n              </Button>\n            </Inline>\n          </FieldBase>\n          <TextArea\n            label="Interne Info zum Kunden"\n            description="noch 1000 Zeichen"\n          />\n        </Stack>\n        <Stack space="xsmall">\n          <TextField label="Buchungszeichen" />\n          <TextArea label="Bestellbemerkung" description="noch 1000 Zeichen" />\n        </Stack>\n        <Inline space="small" alignX="center">\n          <Button variant="primary" type="submit">\n            Speichern\n          </Button>\n          <Button variant="link">| Zur\xfcck</Button>\n        </Inline>\n      </FieldGroup>\n    </Stack>\n  </ThemeProvider>\n);\n'})})]})}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components),t=n.wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=7730,e(e.s=n);var n}));var n=e.O();_N_E=n}]);