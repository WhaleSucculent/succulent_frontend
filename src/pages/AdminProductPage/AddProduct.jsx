import {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {GET_PRODUCTS} from '../../../queries/productQueries';

function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [rare, setRare] = useState('');
    const [status, setStatus] = useState('');

    const [addProduct] = useMutation(ADD_PRODUCT, {
        variables:{name, description, size, image, color, category, rare, status},
        update(cache, {data: {addProduct}}){
            const {products} = cache.readQuery({query: GET_PRODUCTS});
            cache.writeQuery({
                query: GET_PRODUCTS,
                data:{products: [...products, addProduct]}
            });
        }
    });
  return (
    <div>

    </div>
  )
}

export default AddProduct