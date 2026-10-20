//old theme

// "use client";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ReactNode } from "react";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#38BDF8",
//     },
//     background: {
//       default: "#0F172A",
//       paper: "#1E293B",
//     },
//     text: {
//       primary: "#F8FAFC",
//       secondary: "#94A3B8",
//     },
//   },
//   typography: {
//     fontFamily: "Arial, sans-serif",
//   },
// });

// export default function ThemeRegistry({ children }: { children: ReactNode }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// }

//new theme

// "use client";

// import { ReactNode } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// const theme = createTheme({
//   palette: {
//     mode: "dark",

//     primary: {
//       main: "#A78BFA",
//       light: "#C4B5FD",
//       dark: "#7C3AED",
//       contrastText: "#09090F",
//     },

//     secondary: {
//       main: "#F472B6",
//       light: "#F9A8D4",
//       dark: "#DB2777",
//       contrastText: "#09090F",
//     },

//     background: {
//       default: "#09090F",
//       paper: "#151522",
//     },

//     text: {
//       primary: "#F5F3FF",
//       secondary: "#A1A1B5",
//     },

//     divider: "#2D2A40",

//     success: {
//       main: "#34D399",
//     },

//     error: {
//       main: "#FB7185",
//     },

//     warning: {
//       main: "#FBBF24",
//     },
//   },

//   typography: {
//     fontFamily: "Arial, Helvetica, sans-serif",

//     h1: {
//       fontWeight: 800,
//       letterSpacing: "-0.04em",
//     },

//     h2: {
//       fontWeight: 800,
//       letterSpacing: "-0.03em",
//     },

//     h3: {
//       fontWeight: 700,
//       letterSpacing: "-0.02em",
//     },

//     h4: {
//       fontWeight: 700,
//     },

//     h5: {
//       fontWeight: 700,
//     },

//     h6: {
//       fontWeight: 600,
//     },

//     button: {
//       fontWeight: 600,
//       textTransform: "none",
//     },
//   },

//   shape: {
//     borderRadius: 12,
//   },

//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundColor: "#09090F",
//         },

//         "::selection": {
//           backgroundColor: "#7C3AED",
//           color: "#FFFFFF",
//         },

//         "::-webkit-scrollbar": {
//           width: "8px",
//         },

//         "::-webkit-scrollbar-track": {
//           background: "#09090F",
//         },

//         "::-webkit-scrollbar-thumb": {
//           background: "#49405F",
//           borderRadius: "8px",
//         },
//       },
//     },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 10,
//           transition: "all 0.2s ease",

//           "&:hover": {
//             transform: "translateY(-2px)",
//           },
//         },

//         containedPrimary: {
//           boxShadow: "0 4px 20px rgba(167, 139, 250, 0.2)",

//           "&:hover": {
//             boxShadow: "0 6px 25px rgba(167, 139, 250, 0.35)",
//           },
//         },
//       },
//     },

//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundImage: "none",
//         },
//       },
//     },
//   },
// });

// export default function ThemeRegistry({ children }: { children: ReactNode }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// }

"use client";

import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#A78BFA",
      light: "#C4B5FD",
      dark: "#7C3AED",
      contrastText: "#09090F",
    },

    secondary: {
      main: "#F472B6",
      light: "#F9A8D4",
      dark: "#DB2777",
      contrastText: "#09090F",
    },

    background: {
      default: "#09090F",
      paper: "#151522",
    },

    text: {
      primary: "#F5F3FF",
      secondary: "#A1A1B5",
    },

    divider: "#2D2A40",

    success: {
      main: "#34D399",
    },

    error: {
      main: "#FB7185",
    },

    warning: {
      main: "#FBBF24",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    // MuiCssBaseline: {
    // styleOverrides: {
    //   body: {
    //     backgroundColor: "#09090F",
    //   },

    //   "::selection": {
    //     backgroundColor: "#7C3AED",
    //     color: "#FFFFFF",
    //   },

    //   "::-webkit-scrollbar": {
    //     width: "8px",
    //   },

    //   "::-webkit-scrollbar-track": {
    //     background: "#09090F",
    //   },

    //   "::-webkit-scrollbar-thumb": {
    //     background: "#49405F",
    //     borderRadius: "8px",
    //   },
    // },
    // },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#09090F",
          backgroundImage: `
        radial-gradient(
          ellipse at 15% 20%,
          rgba(124, 58, 237, 0.14),
          transparent 45%
        ),
        radial-gradient(
          ellipse at 85% 70%,
          rgba(219, 39, 119, 0.09),
          transparent 40%
        )
      `,
          backgroundSize: "200% 200%",
          animation: "gradientMove 18s ease-in-out infinite",
          minHeight: "100vh",

          "@keyframes gradientMove": {
            "0%": {
              backgroundPosition: "0% 0%",
            },
            "50%": {
              backgroundPosition: "100% 100%",
            },
            "100%": {
              backgroundPosition: "0% 0%",
            },
          },

          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },

          "::selection": {
            backgroundColor: "#7C3AED",
            color: "#FFFFFF",
          },

          "::-webkit-scrollbar": {
            width: "8px",
          },

          "::-webkit-scrollbar-track": {
            background: "#09090F",
          },

          "::-webkit-scrollbar-thumb": {
            background: "#49405F",
            borderRadius: "8px",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "all 0.2s ease",

          "&:hover": {
            transform: "translateY(-2px)",
          },
        },

        contained: {
          boxShadow: "0 4px 20px rgba(167, 139, 250, 0.2)",

          "&:hover": {
            boxShadow: "0 6px 25px rgba(167, 139, 250, 0.35)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
