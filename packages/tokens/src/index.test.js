import * as Token from '.';
test('smoketest', () => {
  expect(Token).toMatchInlineSnapshot(`
    {
      "aspect": {
        "golden": "1.6180/1",
        "landscape": "4/3",
        "portrait": "3/4",
        "square": "1",
        "ultrawide": "18/5",
        "widescreen": "16/9",
      },
      "border": {
        "radius": {
          "large-1": "4rem",
          "large-2": "8rem",
          "medium-1": "1rem",
          "medium-2": "2rem",
          "none": 0,
          "round": "1e5px",
          "small-1": "2px",
          "small-2": "5px",
        },
        "width": {
          "large-1": "5px",
          "large-2": "10px",
          "large-3": "25px",
          "medium-1": "2px",
          "none": 0,
          "small-1": "1px",
        },
      },
      "color": {
        "blue": {
          "00": "#e7f5ff",
          "10": "#d0ebff",
          "20": "#a5d8ff",
          "30": "#74c0fc",
          "40": "#4dabf7",
          "50": "#339af0",
          "60": "#228be6",
          "70": "#1c7ed6",
          "80": "#1971c2",
          "90": "#1864ab",
        },
        "brand": {
          "primary": "#fa8005",
        },
        "cyan": {
          "00": "#e3fafc",
          "10": "#c5f6fa",
          "20": "#99e9f2",
          "30": "#66d9e8",
          "40": "#3bc9db",
          "50": "#22b8cf",
          "60": "#15aabf",
          "70": "#1098ad",
          "80": "#0c8599",
          "90": "#0b7285",
        },
        "grape": {
          "00": "#f8f0fc",
          "10": "#f3d9fa",
          "20": "#eebefa",
          "30": "#e599f7",
          "40": "#da77f2",
          "50": "#cc5de8",
          "60": "#be4bdb",
          "70": "#ae3ec9",
          "80": "#9c36b5",
          "90": "#862e9c",
        },
        "gray": {
          "00": "#f8f9fa",
          "10": "#f1f3f5",
          "20": "#e9ecef",
          "30": "#dee2e6",
          "40": "#ced4da",
          "50": "#adb5bd",
          "60": "#868e96",
          "70": "#495057",
          "80": "#343a40",
          "90": "#212529",
        },
        "green": {
          "00": "#ebfbee",
          "10": "#d3f9d8",
          "20": "#b2f2bb",
          "30": "#8ce99a",
          "40": "#69db7c",
          "50": "#51cf66",
          "60": "#40c057",
          "70": "#37b24d",
          "80": "#2f9e44",
          "90": "#2b8a3e",
        },
        "indigo": {
          "00": "#edf2ff",
          "10": "#dbe4ff",
          "20": "#bac8ff",
          "30": "#91a7ff",
          "40": "#748ffc",
          "50": "#5c7cfa",
          "60": "#4c6ef5",
          "70": "#4263eb",
          "80": "#3b5bdb",
          "90": "#364fc7",
        },
        "lime": {
          "00": "#f4fce3",
          "10": "#e9fac8",
          "20": "#d8f5a2",
          "30": "#c0eb75",
          "40": "#a9e34b",
          "50": "#94d82d",
          "60": "#82c91e",
          "70": "#74b816",
          "80": "#66a80f",
          "90": "#5c940d",
        },
        "orange": {
          "00": "#fff4e6",
          "10": "#ffe8cc",
          "20": "#ffd8a8",
          "30": "#ffc078",
          "40": "#ffa94d",
          "50": "#ff922b",
          "60": "#fd7e14",
          "70": "#f76707",
          "80": "#e8590c",
          "90": "#d9480f",
        },
        "pink": {
          "00": "#fff0f6",
          "10": "#ffdeeb",
          "20": "#fcc2d7",
          "30": "#faa2c1",
          "40": "#f783ac",
          "50": "#f06595",
          "60": "#e64980",
          "70": "#d6336c",
          "80": "#c2255c",
          "90": "#a61e4d",
        },
        "red": {
          "00": "#fff5f5",
          "10": "#ffe3e3",
          "20": "#ffc9c9",
          "30": "#ffa8a8",
          "40": "#ff8787",
          "50": "#ff6b6b",
          "60": "#fa5252",
          "70": "#f03e3e",
          "80": "#e03131",
          "90": "#c92a2a",
        },
        "teal": {
          "00": "#e6fcf5",
          "10": "#c3fae8",
          "20": "#96f2d7",
          "30": "#63e6be",
          "40": "#38d9a9",
          "50": "#20c997",
          "60": "#12b886",
          "70": "#0ca678",
          "80": "#099268",
          "90": "#087f5b",
        },
        "violet": {
          "00": "#f3f0ff",
          "10": "#e5dbff",
          "20": "#d0bfff",
          "30": "#b197fc",
          "40": "#9775fa",
          "50": "#845ef7",
          "60": "#7950f2",
          "70": "#7048e8",
          "80": "#6741d9",
          "90": "#5f3dc4",
        },
        "yellow": {
          "00": "#fff9db",
          "10": "#fff3bf",
          "20": "#ffec99",
          "30": "#ffe066",
          "40": "#ffd43b",
          "50": "#fcc419",
          "60": "#fab005",
          "70": "#f59f00",
          "80": "#f08c00",
          "90": "#e67700",
        },
      },
      "layer": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "important": 2147483647,
      },
      "opacity": {
        "dimmed": 0.5,
        "faded": 0.75,
        "ghost": 0.25,
        "solid": 1,
        "transparent": 0,
      },
      "shadow": {
        "large-1": "
        0 -1px 2px 0 hsl(220 3% 15% / calc(1% + 2%)),
        0 2px 1px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 5px 5px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 10px 10px -2px hsl(220 3% 15% / calc(1% + 4%)),
        0 20px 20px -2px hsl(220 3% 15% / calc(1% + 5%)),
        0 40px 40px -2px hsl(220 3% 15% / calc(1% + 7%))",
        "large-2": "
        0 -1px 2px 0 hsl(220 3% 15% / calc(1% + 2%)),
        0 3px 2px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 7px 5px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 12px 10px -2px hsl(220 3% 15% / calc(1% + 4%)),
        0 22px 18px -2px hsl(220 3% 15% / calc(1% + 5%)),
        0 41px 33px -2px hsl(220 3% 15% / calc(1% + 6%)),
        0 100px 80px -2px hsl(220 3% 15% / calc(1% + 7%))",
        "medium-1": "
        0 -1px 3px 0 hsl(220 3% 15% / calc(1% + 2%)),
        0 1px 2px -5px hsl(220 3% 15% / calc(1% + 2%)),
        0 2px 5px -5px hsl(220 3% 15% / calc(1% + 4%)),
        0 4px 12px -5px hsl(220 3% 15% / calc(1% + 5%)),
        0 12px 15px -5px hsl(220 3% 15% / calc(1% + 7%))",
        "medium-2": "
        0 -2px 5px 0 hsl(220 3% 15% / calc(1% + 2%)),
        0 1px 1px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 2px 2px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 5px 5px -2px hsl(220 3% 15% / calc(1% + 4%)),
        0 9px 9px -2px hsl(220 3% 15% / calc(1% + 5%)),
        0 16px 16px -2px hsl(220 3% 15% / calc(1% + 6%))",
        "small-1": "0 1px 2px -1px hsl(220 3% 15% / calc(1% + 9%))",
        "small-2": "
        0 3px 5px -2px hsl(220 3% 15% / calc(1% + 3%)),
        0 7px 14px -5px hsl(220 3% 15% / calc(1% + 5%))",
      },
      "size": {
        "content": {
          "large": "60ch",
          "medium": "45ch",
          "small": "20ch",
        },
        "fixed": {
          "large-1": "7.5rem",
          "large-2": "10rem",
          "large-3": "15rem",
          "large-4": "20rem",
          "large-5": "30rem",
          "medium-1": "2rem",
          "medium-2": "3rem",
          "medium-3": "4rem",
          "medium-4": "5rem",
          "none": 0,
          "small-1": "1rem",
          "small-2": "1.25rem",
          "small-3": "1.5rem",
          "small-4": "1.75rem",
        },
        "fluid": {
          "large-1": "clamp(10rem, 20vw, 15rem)",
          "large-2": "clamp(15rem, 30vw, 20rem)",
          "large-3": "clamp(20rem, 40vw, 30rem)",
          "medium-1": "clamp(4rem, 5vw, 5rem)",
          "medium-2": "clamp(5rem, 7vw, 7.5rem)",
          "medium-3": "clamp(7.5rem, 10vw, 10rem)",
          "none": 0,
          "small-1": "clamp(1rem, 2vw, 1.5rem)",
          "small-2": "clamp(1.5rem, 3vw, 2rem)",
          "small-3": "clamp(2rem, 4vw, 3rem)",
        },
        "header": {
          "large": "35ch",
          "medium": "25ch",
          "small": "20ch",
        },
      },
      "space": {
        "fixed": {
          "large-1": "2rem",
          "large-2": "3rem",
          "large-3": "4rem",
          "large-4": "5rem",
          "medium-1": "1.25rem",
          "medium-2": "1.5rem",
          "medium-3": "1.75rem",
          "none": 0,
          "small-1": ".25rem",
          "small-2": ".5rem",
          "small-3": "1rem",
        },
        "fluid": {
          "large-1": "clamp(2rem, 4vw, 3rem)",
          "large-2": "clamp(4rem, 5vw, 5rem)",
          "large-3": "clamp(5rem, 7vw, 7.5rem)",
          "medium-1": "clamp(1rem, 2vw, 1.5rem)",
          "medium-2": "clamp(1.5rem, 3vw, 2rem)",
          "none": 0,
          "small-1": "clamp(.5rem, 1vw, 1rem)",
        },
      },
      "typography": {
        "font": {
          "mono": "Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace",
          "sans": "system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif",
          "serif": "ui-serif,serif",
        },
        "letterSpacing": {
          "large-1": ".750em",
          "large-2": "1em",
          "medium-1": ".075em",
          "medium-2": ".150em",
          "medium-3": ".500em",
          "none": "normal",
          "small-1": "-.05em",
          "small-2": ".025em",
          "small-3": ".050em",
        },
        "lineHeight": {
          "large-1": 1.75,
          "large-2": 2,
          "medium-1": 1.375,
          "medium-2": 1.5,
          "small-1": 0.95,
          "small-2": 1.1,
          "small-3": 1.25,
        },
        "size": {
          "fixed": {
            "large-1": "2.5rem",
            "large-2": "3rem",
            "large-3": "3.5rem",
            "medium-1": "1.1rem",
            "medium-2": "1.25rem",
            "medium-3": "1.5rem",
            "medium-4": "2rem",
            "small-1": ".5rem",
            "small-2": ".75rem",
            "small-3": "1rem",
          },
          "fluid": {
            "large-1": "clamp(2rem, 9vw, 3.5rem)",
            "medium-1": "clamp(1rem, 4vw, 1.5rem)",
            "medium-2": "clamp(1.5rem, 6vw, 2.5rem)",
            "small-1": "clamp(.75rem, 2vw, 1rem)",
          },
        },
        "weight": {
          "bold": 700,
          "heavy": 900,
          "light": 300,
          "medium": 500,
          "regular": 400,
          "thin": 200,
        },
      },
    }
  `);
});
//# sourceMappingURL=index.test.js.map