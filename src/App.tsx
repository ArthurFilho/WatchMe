import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/context';
import { Router } from './Router';

export function App() {
    return(
      <>
    <BrowserRouter>
        <ContextProvider>
          <Router />
        </ContextProvider>      
    </BrowserRouter>
   </>
  )
}