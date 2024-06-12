function calculateMoney(ticketSale){
    if (ticketSale<=0) {
        return "Invalid Number";
    }else{


let ticketPrice = 120;
let security= 500;
let lunch = 50*8;

totalsale= ticketSale*ticketPrice;
let cost= security+lunch;
let profit=totalsale-cost;
return profit;

    }


}


console.log(calculateMoney(-93));