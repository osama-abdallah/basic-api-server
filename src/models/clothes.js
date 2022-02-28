const Clothes = (seq ,types) => seq.define(
    'clothes' ,
    {
        brandName :{
            type :types.STRING,
            allowNull:false
        },
        type :{
            type :types.STRING,
            allowNull:false
        }
    }
);
module.exports =Clothes;