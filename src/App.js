import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormAutor from './paginas/FormAutor';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaAutor from './paginas/ListaAutor';
import ListaCategoria from './paginas/ListaCategoria';
import FormLogin from './paginas/FormLogin';
import PaginaSegura from './componentes/PaginaSegura';
import Api from './servico/Api';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Api.setTokenAxios();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/listacategoria' element={<PaginaSegura> <ListaCategoria /> </PaginaSegura>} />
            <Route path='/cadastrocategoria' element={<PaginaSegura> <FormCategoria /> </PaginaSegura>} />
            <Route path='/cadastrocategoria/:id' element={<PaginaSegura> <FormCategoria /> </PaginaSegura>} />

            <Route path='/listaautor' element={<PaginaSegura> <ListaAutor /> </PaginaSegura>} />
            <Route path='/cadastroautor' element={<PaginaSegura> <FormAutor /> </PaginaSegura>} />
            <Route path='/cadastroautor/:id' element={<PaginaSegura> <FormAutor /> </PaginaSegura>} />

            <Route path='/login' element={<FormLogin />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>




      </BrowserRouter>
    </>
  );
}

export default App;
