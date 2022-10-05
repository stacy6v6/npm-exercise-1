let qrcode = require('qrcode-terminal');

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;'));

console.log(qrcode.generate('BEGIN:VCARD\nN:Stacy;Pelito\nTEL:09177882783\nEMAIL:stacy.pelito@siteminder.com\nEND:VCARD'));
