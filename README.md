# _react-easy-use-store_

扁平化管理你的数据

## install

> npm i react-easy-use-store or yarn add react-easy-use-store

## easy use

### Provider

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, createStore } from "react-easy-use-store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### setStore connect

```js
import React,{useEffect} from "react";
import { useSetStorer, connect } from "react-easy-use-store";

function Counter({count}) {

  const setStore = useSetStorer()

  useEffect(()=>{
      console.log(count)
  },[count])

  useEffect(()=>{
      setStore('count',10)
  },[])

  return (
    <div>
      <div>
        {count}
      </div>
    </div>
  );
}

export connect('count')(Counter)
```
