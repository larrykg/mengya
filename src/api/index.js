import requests from "./request";

//获取产品信息 /evaluate/product/info
export const getProductInfo = (product_id) => {
    return requests({
        url: `/evaluate/product/info/${product_id}`,
        method: 'get'
    })
}