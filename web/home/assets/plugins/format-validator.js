define(function(){return{isEmail:function(t){return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(t)},isTelNumber:function(t){return 0==t.indexOf("+86")?/^\+86[1][0-9]{10}$/.test(t):/^[1+][0-9]{10}$/.test(t)},isAlphabet:function(t,e,n){return/^[a-zA-Z]+$/.test(t)?e?t.length>=e&&t.length<=n:!0:!1},isNumber:function(t,e,n){return/^[-+]{0,1}(\d+)[\.]{0,1}(\d+)$/.test(t)?e?t>=e&&n>=t:!0:!1},isInteger:function(t,e,n){return/^[-]{0,1}\d+$/.test(t)?e?t>=e&&n>=t:!0:!1},isPositiveInteger:function(t,e,n){return/^\d+$/.test(t)?e?t>=e&&n>=t:!0:!1},isAlphabeticCharacters:function(t,e,n){return/^[0-9a-zA-Z]+$/.test(t)?e?t.length>=e&&t.length<=n:!0:!1},isAlphabeticCharactersAndUnderline:function(t,e,n){return/^[0-9a-zA-Z_]+$/.test(t)?e?t.length>=e&&t.length<=n:!0:!1},isUrl:function(t){return/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.\-\&\?\=]*)*\/?$/.test(t)},isAllChinese:function(t,e,n){return/^[\u4e00-\u9fa5]+$/.test(t)?e?t.length>=e&&t.length<=n:!0:!1}}});