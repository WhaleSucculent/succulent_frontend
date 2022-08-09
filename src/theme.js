import { grey, orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6dc9f7',
      light: '#8AD8FF',
      dark: '#3A85AB',

    },
    secondary: {
      main: '#E897DB',
      light: '#ffb2cc',
      dark: '#A26999'
    },
  },
  typography: {
    fontFamily: [
      '"Inter var"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Montserrat"',
    ].join(','),

  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          ":hover": {
            color: '#3A85AB'
          },
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: grey[200],

        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          borderBottom: "none"
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: '#fafafa'
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor:'#111827',
        },
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#3A85AB",
          ":hover": {
            color: "#8AD8FF"
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#3A85AB",
          ":hover": {
            color: "#8AD8FF"
          }
        }
      }
    },

  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  }
})
