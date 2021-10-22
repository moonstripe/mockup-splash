import Routes from './Routes';
import './App.css';

import {
  ThemeProvider,
  createTheme
} from '@mui/material'

const theme = createTheme({
  background: 'white',
  spacing: 16,
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
