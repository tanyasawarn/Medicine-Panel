import classes from "./MedicineForm.module.css";
import { MedicineProduct } from "./Products";
import Product from "./Product";

const MedicineForm = () => {
  return (
    <div>
      <div>
        <section className={classes.auth}>
          <div className={classes.control}>
            {MedicineProduct.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </section>
        <div>
          <section>
            <form>
              <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" />
                <label htmlFor="DESCRIPTION">Description:</label>
                <input type="text" />
                <label htmlFor="price">Price: Rs.</label>
                <input type="number" />
                <label htmlFor="qunatity">Quantiy:</label>
                <input type="number" />
                <button>Add</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MedicineForm;
