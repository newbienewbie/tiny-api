import axios from 'axios';

const client=axios.create({
    withCredentials: true,
});

export function API(modelName){

    return {

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
         * remove model
         */
        remove:function(id){
            return client.post(
                    `/${modelName}/remove`,
                    JSON.stringify({id}),
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