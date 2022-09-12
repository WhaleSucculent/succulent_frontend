import { grey, orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const breakpoints = createBreakpoints({})

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
      '"Alumni Sans Inline One"',
      '"Dancing Script"',
      '"Pacifico"',
    ].join(','),
    h4: {
      [breakpoints.up('xs')]: {
        fontSize: '1.5rem',
      },
      [breakpoints.up('sm')]: {
        fontSize: '2rem',
      },

      [breakpoints.up('lg')]: {
        fontSize: '2.5rem',
      },
    },
    h5: {
      [breakpoints.up('xs')]: {
        fontSize: '1.2rem',
      },
      [breakpoints.up('sm')]: {
        fontSize: '1.3rem',
      },
      [breakpoints.up('lg')]: {
        fontSize: '1.5rem',
      },
    }

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
          backgroundColor: '#111827',
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
    MuiTooltip: {
      styleOverrides: {
        arrow: true
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(45deg, #ffb2cc 30%, #8AD8FF 90%)',
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 40,
            padding: '0 30px',
            borderRadius: 20,

          },
          [breakpoints.up('xs')]: {
            fontSize: '0.8rem',
            height: 32,
          },
          [breakpoints.up('sm')]: {
            fontSize: '0.9rem',
            height: 40,
          },

          [breakpoints.up('lg')]: {
            fontSize: '1rem',
          },
        }
      ],
      styleOverrides: {
        root: {
          "&:hover": {
            background: 'linear-gradient(45deg, #ffb2cc 30%, #8AD8FF 90%)',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
          "&:active": {
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
          [breakpoints.up('xs')]: {
            fontSize: '0.8rem'
          },
          [breakpoints.up('sm')]: {
            fontSize: '0.9rem',
          },

          [breakpoints.up('lg')]: {
            fontSize: '1rem',
          },
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 3,
          ":last-child": {
            paddingBottom: 0
          }
        }
      }
    },
    MuiImageList:{
      styleOverrides: {
        root: {
          marginTop: 0,
        }
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          overflowWrap: 'anywhere',
          height: '100%',
          textOverflow: 'unset',
          lineHeight: '2.2rem',
          whiteSpace: 'normal',
          [breakpoints.up('xs')]: {
            fontSize: '1.4rem',
          },
          [breakpoints.up('sm')]: {
            fontSize: '1.8rem',
            height: 40,
          },

          [breakpoints.up('lg')]: {
            fontSize: '2.2rem',
          },
        },
        

      }
    },
    // This one is to fix the problem of card size. 
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "300px"
        }
      }
    }

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
