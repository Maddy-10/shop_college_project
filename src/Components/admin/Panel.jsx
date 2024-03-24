import React from "react";
import AdminPanel from "./AdminPanel";
import { ProductList } from "../admin/assets/data/ProductList";

export default function Panel() {
  return (
    <>
      <h2 className="display-3">AdminPanel</h2>
      {/* <div className="d-flex flex-wrap justify-content-center">
        {ProductList.map((product) => (
          <AdminPanel {...product} />
        ))}
      </div> */}
      <div className='d-flex flex-wrap justify-content-center'>
         <AdminPanel />
     </div>
    </>
  );
}
