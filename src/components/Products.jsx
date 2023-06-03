import { Outlet } from 'react-router-dom';

const Products = () => {
   return (
      <main>
         <h1 title='Products page' className="invisible">Products page</h1>
         <Outlet />
      </main>
   );
}

export default Products;