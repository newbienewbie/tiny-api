# tiny-api

a tiny api library for generate api

## usage

```js
import {API} from 'tiny-api';

const api=API('role');

/*
the shape of api is {
    create:(record)=>{},
    remove:(record)=>{},
    update:(id,record)=>{},
    list:(page,size,condition)=>{},
}
*/
```
