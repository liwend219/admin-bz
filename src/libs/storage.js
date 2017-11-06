const storage = {};

storage.set = (key, val) => {
  if(typeof(key)!="string"){
    return console.error('the type of "key" can only be "string"')
  }
  let data = {
    'type': typeof(val), 'val': val
  };
  localStorage.setItem(key,JSON.stringify(data));
}

storage.get = (key) =>{
  if(typeof(key)!="string"){
    return console.error('the type of "key" can only be "string"')
  }
  let data = localStorage.getItem(key)||"";
  return data=="" ? 0 : JSON.parse(data).val;
}

storage.del = (key) => {
  if(typeof(key)!="string"){
    return console.error('the type of "key" can only be "string"')
  }
  localStorage.removeItem(key);
}

export default storage;
