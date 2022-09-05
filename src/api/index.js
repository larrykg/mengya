import requests from "./request";

//获取产品信息 /evaluate/product/info
export const getProductInfo = (product_id) => {
    return requests({
        url: `/evaluate/product/info?product_id=${product_id}`,
        method: 'get'
    })
}

//获取跑马灯配置
export const getRotationInfo = (id) => {
    return requests({
        url: `/front/product/list`,
        method: 'post',
        data: {id}
    })
}