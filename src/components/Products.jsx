import { Outlet } from 'react-router-dom';

const Products = () => {
   return (
      <>
         <h1 title='Products page' className="invisible">Products page</h1>
         <Outlet />
      </>
   );
}

export default Products;