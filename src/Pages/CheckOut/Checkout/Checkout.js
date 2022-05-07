import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Mehadi Hasan',
    //     email: 'mehadihasan.phy@gmail.com',
    //     address: 'Ghuinger hat, Bhola',
    //     phone: '01753442958'
    // });

    // const handleAddressChange = event =>{
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            // phone: event.target.phone.value
        }
        axios.post('https://murmuring-sands-18076.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!')
                event.target.reset();
            }
        })
    }

    return (
        <div className='register-form'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder} className='form'>
                <input type="text" value={user?.displayName} name="name" id="" placeholder='YourName' required readOnly disabled/>
                <input type="email" value={user?.email} name="email" id="" placeholder='Your Email Address' required readOnly disabled/>
                <input type="text" value={service.name} name="service" placeholder='service' id="" required readOnly/> 
                <input type="address" name="address" id="" placeholder='address' autoComplete='off' required/> 
                {/* <input type="phone number" name="phone number" id="" placeholder='phone number' required/>  */}
                <input
                 className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Place Order" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;