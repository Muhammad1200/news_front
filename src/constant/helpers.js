import { fileUrl } from "../Netwrok/api";
import moment from "moment";

export const chunks = (array, length) => {
    const perChunk = length // items per chunk
    const result = array.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    // console.log(result)
    return result;
}

export const filePreviewer = (file) => {
    return fileUrl + file
}

export const onInputChangeHandler = (e, setState) => {
    let { name, value } = e.target;
    setState((preVal) => {
        return {
            ...preVal,
            [name]: value
        }
    })
}

export const onDirectChangeHandler = (name, value, setState) => {
    setState((preVal) => {
        return {
            ...preVal,
            [name]: value
        }
    })
}

export const onImageChangeHandler = (e, setState) => {
    let { name } = e.target;
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {

        setState((preVal) => {
            return {
                ...preVal,
                [name]: file
            }
        });

    };
    reader.readAsDataURL(file);
};


export const changeElementValueInArray = (id, data, name, value) => {
    let x = [...data];
    let indexNo = x.findIndex((val) => parseInt(val?.id) === parseInt(id));
    if (indexNo >= 0) {
        x[indexNo] = {
            ...x[indexNo],
            [name]: value
        }
    }
    return x;
}

export const objectToQueryString = (obj) => {
    let q = '?';
    Object.keys(obj).forEach(function(key, index) {
        q += (obj[key])?`${key}=${obj[key]}&` : '';
    });
    return q;
}
