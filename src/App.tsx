import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './ts/components/pages/Home';
import { MenuOpenProvider } from './ts/provider/MenuOpenProvider';


export const App =()=> {
  return (
    <>
   <MenuOpenProvider>

    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>
  
   </MenuOpenProvider>
    </>
  );
}

