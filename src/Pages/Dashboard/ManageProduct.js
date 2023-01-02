import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ManageProduct = () => {

    const { user } = useContext(AuthContext);
     const [product, setProduct] = useState([]);

    //   const fetchHomes = () =>
    //     getHomes(user?.email).then((data) => setHomes(data));

    return (
        <div>
            
        </div>
    );
};

export default ManageProduct;