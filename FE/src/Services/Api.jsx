import axios from "axios";

export const instance =axios.create({
    baseURL:"http://localhost:3000"
});

// ======== services Storage.

export const get_LocalStorage = (_key)=>{
    const value = localStorage.getItem(_key);

    if(value){
        return JSON.parse(value);
    }

    return null;
};

export const set_LocalStorage = (_key, content)=>{
    if(!_key || !content){
        return null;
    }
    if(typeof content != "string"){
        return localStorage.setItem(_key, JSON.stringify(content));
    };

    return localStorage.setItem(_key, content);
};

export const get_SessionStorage = (_key)=>{
    const value = sessionStorage.getItem(_key);

    if(value){
        return JSON.parse(value);
    }

    return null;
};

export const set_SessionStorage = (_key, content)=>{
    if(!_key || !content){
        return null;
    }
    if(typeof content != "string"){
        return sessionStorage.setItem(_key, JSON.stringify(content));
    };

    return sessionStorage.setItem(_key, content);
};