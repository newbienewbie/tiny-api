import axios from 'axios';

const client=axios.create({
    withCredentials: true,
});

export function API(modelName){

    return {

        /**
         * 获取客户端
         */
        getTransport:function(){
            return client;
        },

        /**
         * create model
         */
        create:function(record){
            return client.post(
                    `/${modelName}/create`,
                    JSON.stringify(record),
                    {
                        headers:{ 'Content-Type':'application/json', }
                    },
                ).then(
                    resp=>resp.data,
                    (e)=>{throw e;}
                );
        },

        /**
         * remove model ,
         * 为了可以删除关联，不再仅仅只传递一个id了
         */
        remove:function(record){
            return client.post(
                    `/${modelName}/remove`,
                    JSON.stringify(record),
                    {
                        headers:{ 'Content-Type':'application/json', }
                    },
                ).then(
                    resp=>resp.data,
                    (e)=>{throw e;}
                );
        },

        /**
         * update model
         */
        update:function(id,record){
            record.id=id;
            return client.post(
                    `/${modelName}/update`,
                    JSON.stringify(record),
                    {
                        headers:{ 'Content-Type':'application/json', }
                    },
                ).then(
                    resp=>resp.data,
                    (e)=>{throw e;}
                );
        },


        /**
         * list all models by page ,size ,condition
         */
        list:function(page=1,size=10,condition={}){
            return client.post(
                    `/${modelName}/list`,
                    JSON.stringify({page,size,condition}),
                    {
                        headers:{ 'Content-Type':'application/json', },
                    }
                ).then(
                    resp=>resp.data,
                    e=>{throw e;}
                );
        }

    };
};


export default API;