import React from 'react';
import axios from 'axios';
import useToken from '../utils/useToken';

function Home() {
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState('');
  const { token } = useToken();

  React.useEffect(() => {
    async function getItem() {
      try {
        const res = await axios.get('http://18.141.178.15:8080/checklist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setItems(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getItem();
  }, [token]);

  async function refetch() {
    try {
      const res = await axios.get('http://18.141.178.15:8080/checklist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setItems(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleInput(e) {
    setNewItem(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://18.141.178.15:8080/checklist',
        {
          name: newItem,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.status === 200) {
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteItem(id) {
    try {
      const res = await axios.delete(
        `http://18.141.178.15:8080/checklist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.status === 200) {
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add</label>
        <input
          type="text"
          id="item"
          name="item"
          value={newItem}
          onChange={handleInput}
        />
        <button type="submit">Add Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.item === null ? 'kosong' : item.item}</td>
              <td>
                <button type="button" onClick={() => alert('add')}>Add Item</button>
              </td>
              <td>
                <button type="button" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
