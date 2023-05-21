import { useDispatch } from 'react-redux';

import { filter } from 'store/filter/filterSlice';


export const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(filter(event.currentTarget.value));
    };

    return (
        <label style={{ fontSize: '24px' }}>
            Find contacts by name
            <input
                type="text"
                name="filter iput"
                style={{ display: 'block' }}
                onChange={handleFilterChange}
            />
        </label>
    );
};
