import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import Footer from '../common/footer';
export default function Home() { 
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        setTodos(json);
        });
  }, []);
  return (
    <View>
      <FlatList data={todos}
      ListFooterComponent={()=>(
        <Footer />
      )}
       renderItem={({item}) => <Text style={{padding:10,backgroundColor:'white',elevation:10,marginBottom:2}}>{item.title}</Text>} />
    </View>
  );
}
