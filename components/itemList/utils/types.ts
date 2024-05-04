export type itemCardType = { img:string, title:string, mrp:number, discount:number, rating:number, reviews:number, link:string }
export type itemCardListType = itemCardType[]
export type itemListDataType = { header:string, data: itemCardListType }[]