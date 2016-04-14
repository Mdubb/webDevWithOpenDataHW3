//For each temperature, how much ice cream is consumed in a household?
d3.csv('/Icecream.csv', function(data) {

  
  //organize the data according to party size
  var iceCreamConsumpDatabyTemp = _.groupBy(data, 'temp');
  var iceCreamConsumpDatabyTemp - _.groupBy(data,'temp');

  console.log(iceCreamConsumpDatabyTemp);
  console.log('hi');

//    var meanTipByPartySize = {};
  

// //take the associated tip amounts in each party size category, and just give me the tips, as numbers (not strings).
//    _.each(tippingDataByPartySize, function(tippingDataForOnePartySize, partySize) {
//      var tipsByPartySize = _.map(
//        _.pluck(tippingDataForOnePartySize, 'tip'), function(string) {
//         return Number(string);
//      });

// //add up all the tips in each party size
//      var tipsSum = tipsByPartySize.reduce(function(a,b) {
//       return a + b;
//      });

//     meanTipByPartySize[partySize] = tipsSum / tippingDataForOnePartySize.length;
  
//   });   

//    console.log(meanTipByPartySize);
  
//   _.each(meanTipByPartySize, function(meanTipAmount, partySize) {

//     var svgContainer = d3.select('#dataviz').append('svg')
//                                             .attr('width', 200)
//                                             .attr('height', 200);

//     svgContainer.append('text')
//                 .attr('x', 10)
//                 .attr('y', 15)
//                 .text('Party size: ' + partySize);

//     svgContainer.append('ellipse')
//                 .attr('cx', 50)
//                 .attr('cy', 55)
//                 .attr('rx', meanTipAmount*8)
//                 .attr('ry', meanTipAmount*6)
//                 .style('fill', 'green');

//   svgContainer.append('text')
//               .attr('x', 30)
//               .attr('y', 110)
//               .text('$' + meanTipAmount.toFixed(2));
//   });
});
