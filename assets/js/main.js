/**
 * Created by Sanchez 
 */
'use strict';
/*var config = {
    width: '100',
    height: '100',
    renderer: Phaser.AUTO,
    parent: 'canvas-wrapper',
    resolution: window.devicePixelRatio,
    transparent: true
}
window.game = new Phaser.Game(config);
window.game.state.add('Boot', require('./states/boot'));
window.game.state.add('Preloader', require('./states/preloader'));
window.game.state.start('Boot');
*/
//Can Use ES6 
const use_e6 = true;
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
window.onload = function() {
    const CoinMarketCap = require('coinmarketcap-api')

    const client = new CoinMarketCap()

    client.getTicker().then( v => {
        var XLMPrice = v.data[512].quotes["USD"].price
        var XLMMarket = v.data[512].quotes["USD"].market_cap
        var XRPPrice = v.data[52].quotes["USD"].price
        var XRPMarket = v.data[52].quotes["USD"].market_cap
        
        var flippening = XLMMarket / XRPMarket;
    

        var html= 
        '<div id="OuterBox">' +
        '    <h1 id="RippeningLabel" class="display-4">RIPPENING</h1>' +
        '    <h1 id="RippeningPercent" class="display-4">'+parseFloat(Math.round(XLMMarket / XRPMarket * 100 * 100) / 100).toFixed(2)+'<span id="PSign">%</span></h1>' +
        '</div>' +
        '<table class="table table-dark">' +
            '<thead>' + 
            '    <tr>' + 
            '    <th scope="col">Currency</th>' + 
            '    <th scope="col">Market Cap</th>' + 
            '    <th scope="col">Price</th>' + 
            '    </tr>' + 
            '</thead>' + 
            '<tbody>' + 
            '    <tr>' + 
            '    <th scope="row">XLM</th>' + 
            '    <td>$'+numberWithCommas(XLMMarket)+'</td>' + 
            '    <td>$'+parseFloat(Math.round(XLMPrice * 100) / 100).toFixed(2)+'</td>' + 
            '    </tr>' + 
            '    <tr>' + 
            '    <th scope="row">XRP</th>' + 
            '    <td>$'+numberWithCommas(XRPMarket)+'</td>' + 
            '    <td>$'+parseFloat(Math.round(XRPPrice * 100) / 100).toFixed(2)+'</td>' + 
            '    </tr>' + 
            '</tbody>' + 
        '</table>'+
        '<div id="Donate">'+
        '   <div id="DonateTitle">Donate</div>'+
        '   <div id="DomateAddress">GAZGZJHYHL4HQN3FNK2FM7P6VGQF7W2Q4YA43ARTTSSA4LS7VSYBARSH</div>'+
        '</div>' 

        document.getElementById("container-main").innerHTML = html;
        console.log(v)
    }
      
    ).catch(console.error)
    

};

