import React from 'react';
import Swal from "sweetalert2";


const AddCoffe = () => {
    const handleAddCoffe= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const photo = form.photo.value;
const newCoffee ={name,category,quantity,supplier,details,photo,taste} 
console.log(newCoffee);

fetch("http://localhost:5000/coffee",{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newCoffee)
})
.then(res => res.json())
.then(data =>{
  console.log(data);
  if(data.insertedID){
    Swal.fire({
      title: "user added succesfully",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    });
  }
})
}
    return (
      <div className='bg-[#F4F3F0] p-24'>
        <h2 className='text-center text-3xl font-extrabold'>Add a Coffe</h2>
        <form onSubmit={handleAddCoffe}>
          <div className='md:flex gap-2 mb-8 '>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffe Name</span>
              </label>
              <label className="input-group">
                <input name='name'
                  type="text"
                  placeholder="Coffe name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Avaiable Quantity</span>
              </label>
              <label className="input-group">
                <input name='quantity'
                  type="number"
                  placeholder="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <div className='md:flex gap-2 mb-8 '>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input name='supplier'
                  type="text"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Taste</span>
              </label>
              <label className="input-group">
                <input name='taste'
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <div className='md:flex gap-2 mb-8 '>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category </span>
              </label>
              <label className="input-group">
                <input name='category'
                  type="text"
                  placeholder="Category "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Details</span>
              </label>
              <label className="input-group">
                <input name='details'
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          <div >
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input name='photo'
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>
<input type="submit" value="Add Coffee" className='btn btn-block' />
        </form>
        
      </div>
    );
};

export default AddCoffe;