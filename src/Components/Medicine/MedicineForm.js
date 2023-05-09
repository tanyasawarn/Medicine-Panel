 import classes from "./MedicineForm.module.css";
  import {MedicineProduct} from "./Products";
  import Product from "./Product";

 const MedicineForm = ()=>{
   
    return(
          <section className={classes.auth}>
             <div className={classes.control}>
            {MedicineProduct.map((product)=>(
                <Product data={product} />
            ))}
        </div>
          </section>
           
            
           
        
    );
 };

 export default MedicineForm;