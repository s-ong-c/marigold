(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1288],{159:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts/themes-variants",function(){return r(767)}])},767:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return l},title:function(){return t}});var s=r(5250),i=r(8570),l=!0,t="Theme & Variants";function c(e){var n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components),r=n.Toc;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Toc",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{selector:"#toc",items:'[{"anchor":"#theme-object","title":"Theme Object"},{"anchor":"#spacings","title":"Spacings"},{"anchor":"#colors","title":"Colors"},{"anchor":"#typography","title":"Typography"},{"anchor":"#variants","title":"Variants"},{"anchor":"#api","title":"API"},{"anchor":"#themeprovider","title":"ThemeProvider"},{"anchor":"#access-theme-variables","title":"Access Theme Variables"},{"anchor":"#create-a-theme","title":"Create a Theme"},{"anchor":"#key-reference","title":"Key Reference"},{"anchor":"#examples","title":"Examples"}]'}),"\n",(0,s.jsx)(n.p,{children:"Marigold uses a theme for its base styles."}),"\n",(0,s.jsx)(n.h2,{id:"theme-object",children:(0,s.jsx)(n.a,{href:"#theme-object",children:"Theme Object"})}),"\n",(0,s.jsxs)(n.p,{children:["Theming is based on a ",(0,s.jsx)(n.code,{children:"theme object"})," that builds on the ",(0,s.jsx)(n.a,{href:"https://system-ui.com/theme/",children:"System UI Theme Specification"}),".\nThe theme object defines your application's spacings, colors, fonts and component styles. In the theme, you can define root styles that are applied globally."]}),"\n",(0,s.jsx)(n.h3,{id:"spacings",children:(0,s.jsx)(n.a,{href:"#spacings",children:"Spacings"})}),"\n",(0,s.jsx)(n.p,{children:"Using semantic values for spacings makes it easier to apply the variables within the theme consistently. Use CSS length units in a string to define the following keys."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"none"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"xxsmall"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"xsmall"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"small"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"medium"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"large"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"xlarge"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"xxlarge"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"colors",children:(0,s.jsx)(n.a,{href:"#colors",children:"Colors"})}),"\n",(0,s.jsx)(n.p,{children:"Add the following color keys to your theme in order to provide a base set of colors. These are re-used in the components."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primary"})," (brand color for links, buttons, etc.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secondary"})," (alternative styling for brand color)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"text"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"background"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"disabled"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warning"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"success"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"typography",children:(0,s.jsx)(n.a,{href:"#typography",children:"Typography"})}),"\n",(0,s.jsx)(n.p,{children:"Store the core typographic values in the following theme keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fonts"})," (font family)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fontSizes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fontWeights"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"lineHeights"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"variants",children:(0,s.jsx)(n.a,{href:"#variants",children:"Variants"})}),"\n",(0,s.jsx)(n.p,{children:"Marigold components extract styles from the theme induced by a ThemeProvider. You can define theme styles in scopes of variants for the components\nyou intend to use. By creating variant objects on the same level with the component prefix on the top level, you can access its values by using the\nvariant name in the component. If you want the same base styles applied to all the variants of one component, use a root object which you define outside the\ntheme. See an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Root styles\nconst message = {\n  root: {\n      borderStyle: 'solid',\n      borderWidth: '2px 2px 2px 0px',\n  },\n};\n\nconst theme: BaseTheme = {\n  breakpoints: ...,\n  space: ...,\n  ...,\n  message: { // Component prefix\n    error: { // First variant\n      ...message.root,\n      borderColor: 'error',\n    },\n    warning: { // Second variant\n      ...message.root,\n      borderColor: 'warning',\n    },\n  },\n};\n\n// Usage\n<Message variant=\"error\">Error message</Message>\n<Message variant=\"warning\">Warning message</Message>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:(0,s.jsx)(n.a,{href:"#api",children:"API"})}),"\n",(0,s.jsx)(n.h3,{id:"themeprovider",children:(0,s.jsx)(n.a,{href:"#themeprovider",children:"ThemeProvider"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ThemeProvider"})," is a wrapper around the component tree on the root level and applies the theme to the components."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { ThemeProvider } from '@marigold/system';\nimport b2bTheme from '@marigold/theme-b2b';\n\nexport const ThemeProvider: React.FC = ({ children }) => {\n  return <ThemeProvider theme={b2bTheme}>{children}</ThemeProvider>;\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"access-theme-variables",children:(0,s.jsx)(n.a,{href:"#access-theme-variables",children:"Access Theme Variables"})}),"\n",(0,s.jsx)(n.p,{children:"Theme variables are styles that are stored in key-value-pairs and defined as described above.\nIf you change the theme, the value for a certain variable can change because a different style is stored in the new theme.\nReuse theme variables within the theme while defining variants of a component. Like this, you create a unique theme that is applied in all the components:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const theme: BaseTheme = {\n  fonts: {\n    body: 'Inter',\n    heading: 'Inter Black',\n  },\n  fontSizes: {\n    xxsmall: '0.875rem',\n    xsmall: '1rem',\n    small: '1.125rem',\n    medium: '1.25rem',\n    large: '1.5rem',\n    xlarge: '2rem',\n  },\n  ...,\n  h1: {\n    font: 'body', // theme variable\n    fontSize: 'xlarge', // theme variable\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"These values can also be accessed in"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Box css={{ fontSize: 'small' }}>...</Box>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-theme",children:(0,s.jsx)(n.a,{href:"#create-a-theme",children:"Create a Theme"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a file, e.g. ",(0,s.jsx)(n.code,{children:"index.ts"})," in your theme folder and define your theme object.\nDefine the overall applied root styles in the theme aswell.\nImport and use the theme in the ",(0,s.jsx)(n.code,{children:"<ThemeProvider>"}),".\nSee a working example base theme here:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const theme: BaseTheme = {\n  styles: {\n    root: {\n      fontFamily: 'body',\n      margin: 0,\n      padding: 0,\n    },\n  },\n  breakpoints: ['768', '1200'],\n  space: {\n    none: 0,\n    xxsmall: 4,\n    xsmall: 8,\n    small: 16,\n    medium: 24,\n    large: 32,\n    xlarge: 40,\n    xxlarge: 48,\n  },\n  fonts: {\n    body: 'Inter',\n    heading: 'Inter Black',\n  },\n  fontSizes: {\n    xxsmall: '0.875rem',\n    xsmall: '1rem',\n    small: '1.125rem',\n    medium: '1.25rem',\n    large: '1.5rem',\n    xlarge: '2rem',\n  },\n  fontWeights: {\n    body: 400,\n    heading: 900,\n    bold: 700,\n  },\n  lineHeights: {\n    body: 1.5,\n    heading: 1.125,\n  },\n  colors: {\n    text: '#4b4b4b',\n    background: '#fafafa',\n    primary: '#fa8005',\n    secondary: '#4b4b4b',\n    disabled: '#e3e3e3',\n    error: '#dd4142',\n    warning: '#fa8005',\n    info: '#1d67b6',\n    success: '#44a112',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"key-reference",children:(0,s.jsx)(n.a,{href:"#key-reference",children:"Key Reference"})}),"\n",(0,s.jsx)(n.p,{children:"Different theme keys can be used as different CSS properties.\nSee the theme object keys and the corresponding CSS properties in the following table."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Theme Key"}),(0,s.jsx)(n.th,{align:"left",children:"CSS Properties"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"styles.root"})}),(0,s.jsx)(n.td,{align:"left",children:"CSSObject"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"space"})}),(0,s.jsxs)(n.td,{align:"left",children:[(0,s.jsx)(n.code,{children:"margin"}),", ",(0,s.jsx)(n.code,{children:"margin-top"}),", ",(0,s.jsx)(n.code,{children:"margin-right"}),", ",(0,s.jsx)(n.code,{children:"margin-bottom"}),", ",(0,s.jsx)(n.code,{children:"margin-left"}),", ",(0,s.jsx)(n.code,{children:"padding"}),", ",(0,s.jsx)(n.code,{children:"padding-top"}),", ",(0,s.jsx)(n.code,{children:"padding-right"}),", ",(0,s.jsx)(n.code,{children:"padding-bottom"}),", ",(0,s.jsx)(n.code,{children:"padding-left"}),", ",(0,s.jsx)(n.code,{children:"grid-gap"}),", ",(0,s.jsx)(n.code,{children:"grid-column-gap"}),", ",(0,s.jsx)(n.code,{children:"grid-row-gap"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"breakpoints"})}),(0,s.jsxs)(n.td,{align:"left",children:[(0,s.jsx)(n.code,{children:"min-width"})," (media query)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"fonts"})}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"font-family "})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"fontSizes"})}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"font-size"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"fontWeights"})}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"font-weight"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"lineHeights"})}),(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"line-height"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:(0,s.jsx)(n.code,{children:"colors"})}),(0,s.jsxs)(n.td,{align:"left",children:[(0,s.jsx)(n.code,{children:"color"}),", ",(0,s.jsx)(n.code,{children:"background-color"}),", ",(0,s.jsx)(n.code,{children:"border-color"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsxs)(n.p,{children:["See example themes under ",(0,s.jsx)(n.a,{href:"/themes/b2b",children:"Themes/B2B"})," and ",(0,s.jsx)(n.a,{href:"/themes/unicorn",children:"Themes/Unicorn"}),"."]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components),r=n.wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=159,e(e.s=n);var n}));var n=e.O();_N_E=n}]);