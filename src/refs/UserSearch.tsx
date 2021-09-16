import React from 'react';
import { useState , useRef, useEffect} from 'react';


const users = [{ name: 'Sara', age: 20 }, { name: 'Alex', age: 19 }, { name: 'Michael', age: 34 }];





const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    
    console.log(foundUser);
    setUser(foundUser)
  }
  const [user, setUser] = useState < {name: string, age: number} | undefined>();
  const [name, setName] = useState('');

  useEffect(() => {
   
    inputRef.current?.focus()
  }, [])
  return <div>User Search
    <input ref={ inputRef} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user?.name}
      {user?.age}
    </div>

  </div>
};

export default UserSearch;