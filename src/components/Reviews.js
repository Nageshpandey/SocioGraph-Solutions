import React from 'react';
import './Review.css';
import StarRatingComponent from 'react-star-rating-component';
import Productdata from '../data/data.json';

export let productID=Productdata;
function Reviews( props ){
    let lb=props.ac-1;
    let ub=Productdata.length;
    productID=Productdata;

   if(props.ro=="high")
   {
    productID.sort(SortHightoLow("rating"));
   }
   if(props.no!="")
   {
    productID=Productdata.filter(Product=>Product.id==props.no);
    
   }
   if(props.ro=="low")
   {
    productID.sort(SortLowtoHigh("rating"));
   }
return(
    <div className="ViewSection">
        
         {productID.slice(lb*3,3*props.ac).map((ProductDetail, index)=>{
             if(props.no=="")
             {
                 
            return(            
                    <div> 
                        <Card title={ProductDetail.id} name={ProductDetail.productname} rate={ProductDetail.rating} desc={ProductDetail.description} 
                            reviewer={ProductDetail.reviewer} DateOfReview={ProductDetail.date}
                            dtime={ProductDetail.delivery_time}
                            service={ProductDetail.service}
                            discount={ProductDetail.discounts_and_offers}
                            inum={index}
                        />                
                    </div>
                );  
             }
        else if(props.no==ProductDetail.id){
        return(          
            <div>
               <Card title={ProductDetail.id} name={ProductDetail.productname} rate={ProductDetail.rating} desc={ProductDetail.description} 
                            reviewer={ProductDetail.reviewer} DateOfReview={ProductDetail.date}
                            dtime={ProductDetail.delivery_time}
                            service={ProductDetail.service}
                            discount={ProductDetail.discounts_and_offers}
                            inum={index}
                        />     
            </div>    
        );
    }
    else{
        
    }
 })}     
    </div>    
);

}


function SortLowtoHigh(property)
{
    return function(a,b){  
        if(a[property] > b[property])  
           return 1;  
        else if(a[property] < b[property])  
           return -1;  
    
        return 0;  
     }  
}

function SortHightoLow(property)
{
    return function(a,b){  
        if(a[property] < b[property])  
           return 1;  
        else if(a[property] > b[property])  
           return -1;  
    
        return 0;  
     }  
}

const checkid=()=>{
    var pp=document.getElementById("moreinfo")
    console.log(pp);
}



const Card =(props)=>{
    const showmore=()=>{

        var x=document.getElementById(props.inum);
        if(x.style.display==='none')
        {
            x.style.display='block';
        }
        else
        x.style.display='none';
    }
  return(  <div className="Card">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="card-title">
            <h1> {props.title}</h1>
            <h1>{props.name}</h1>
        </div>
        <h3>{props.reviewer}</h3>
        <div className="star">
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span className="fa fa-star"></span>}
          starCount={5}
          value={props.rate}
        />
        </div>
            
        <div className="Description">
            <p>{props.desc}</p>
            <input type="button" value="Show More" onClick={showmore} ></input>
            <div classname="moreinfo" id={props.inum} style={{ display: "none" }} >
               
               <p> Service : <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span className="fa fa-star"></span>}
                starCount={5}
                value={props.service}
                />
                </p>
                <p>Delivery Time : 
                <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span className="fa fa-star"></span>}
                starCount={5}
                value={props.dtime}
                />
               </p>
               <p>Discount and Offers :
                <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span className="fa fa-star"></span>}
                starCount={5}
                value={props.discount}
                />
                <hr />
                </p>
                <p>Date of Review : {props.DateOfReview}</p>
                
            </div>           
        </div>
    </div>
  );
}



export default Reviews;
