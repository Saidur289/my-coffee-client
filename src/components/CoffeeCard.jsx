import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees  }) => {
  const {_id, name, details, photo, price, supplier, taste } = coffee;
  const handleDelete = (_id) => {
    console.log('delete', _id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.deletedCount>0){
                 Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
           });
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id)
            setCoffees(remaining)
            
        })
        }
      });
     
  }

  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-md p-4">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={photo}
          alt={name}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 px-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Details:</strong> {details}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Supplier:</strong> {supplier}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Taste:</strong> {taste}
        </p>
        <p className="text-lg text-gray-800 font-semibold">
          <strong>Price:</strong> {price} Taka
        </p>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          <FaEye />
        </button>
       <Link to = {`/update/${_id}`}> <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          <FaEdit />
        </button></Link>
        <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
