exports.failOnNull = (func, err) => {

    return async function(){
        let result = await func(...arguments);
        if(result == null) throw err;
        return result;
    }
    
}

exports.failOnFalsy = (func,err) => {
    return async function(){
        let result = await func(...arguments);
        if(!result) throw err;
        return result;
    }
}
