class GiftModel{
    public giftId:number;
    public targetAudienceId:number;
    public name:string;
    public description:string;
    public price:number;
    public discount:number;

    //Extra field due server JOIN
    public targetAudienceName:string
}

export default GiftModel
