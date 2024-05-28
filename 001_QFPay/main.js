  var sha256 = require('js-sha256');  

  let origin = 'https//:openapi-int.qfapi.com/checkstand/#/?'
  let obj = {
      appcode: "CC6FB660837E49F7A675D2**********",
      goods_name: "remotfpay_checkout_names",
      out_trade_no: "13322916216626239614",
      paysource: "remotepay_checkout",
      return_url: "https://www.baidu.com",
      failed_url: "https://www.baidu.com",
      notify_url: "https://www.baidu.com",
      sign_type: "sha256",
      txamt: "1",
      txcurrcd: "HKD",
      txdtm: "2020-06-28 18:33:20"
  }

  let api_key = "B3D4CCFD4AB049DCA82C25**********";
  let params = paramStringify(obj)
  let sign = sha256(`${params}${api_key}`)
  console.log(`${origin}${paramStringify(obj,true)}&sign=${sign}`)

  function paramStringify(json, flag) {
      let str = "";
      let keysArr = Object.keys(json);
      keysArr.sort().forEach(val => {
          if (!json[val]) return;
          str += `${val}=${flag ? encodeURIComponent(json[val]) : json[val]}&`;
      });
      return str.slice(0, -1);
  }
