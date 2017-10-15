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
        create:function(record,context={}){
            return client.post(
                    `/${modelName}/create`,
                    JSON.stringify(record,context),
                    {
                        headers:{ 'Content-Type':'application/json', }
                    },
                ).then(
                    resp=>resp.data,
                    (e)=>{throw e;}
                );
        },

        /**
         * remove model 
         */
        remove:function(id,context={}){
            return client.post(
                    `/${modelName}/remove`,
                    JSON.stringify({id,context}),
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
        update:function(id,record,context={}){
            record.id=id;
            return client.post(
                    `/${modelName}/update`,
                    JSON.stringify({record,context}),
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
        list:function(page=1,size=10,condition={},context={}){
            return client.post(
                    `/${modelName}/list`,
                    JSON.stringify({page,size,condition,context}),
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