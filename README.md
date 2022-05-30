# _react-easy-use-store_

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
import { setStore, connect } from "react-easy-use-store";

function Counter({count}) {

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
