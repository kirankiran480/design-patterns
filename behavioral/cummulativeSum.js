class CumulativeSum{
   sum= 0;
   add(number)
   {
   this.sum = this.sum + number;
    return this;
   }
}

const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum);