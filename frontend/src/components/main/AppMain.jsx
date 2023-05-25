import React from 'react'
import { Avatar, Input, List, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';



export const AppMain = () => {

  const [inputValue, setInputValue] = useState('');
  const [listData, setListData] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:8000/posts/')
      .then(response => {
        setListData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  

  const handleButtonClick = () => {
    if (inputValue) {
      axios.post('http://localhost:8000/posts/', { content: inputValue })
        .then(response => {
          setListData([...listData, response.data]);
          setInputValue('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };


  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding:'2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <Input placeholder="What's on your mind?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ marginRight: '1rem' }}/>
        <Button type="primary" onClick={handleButtonClick}>Add</Button>
      </div>
      <List
        dataSource={listData}
        renderItem={item => (
          <List.Item>
            {item.content}
          </List.Item>
        )}
      />
    </div>

  )
}
