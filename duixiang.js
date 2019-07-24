let form = document.querySelector('#form');


let condition = {
    kon: function (Name, Text) {
        if (Name == '') {
            return Text;
        }
    },
    eng: function (Name, en, Text) {
        if (Name.length < en) {
            return Text;
        }
    },
    dianhua: function (Name, Text) {
        let dao = /^[1][2][3][5|2|8][0-9]{7}/;
        
        if (dao.test(Name) == false) {
            
            return Text;
        }
    }
};

function valdui() {
    this.valshuzu = [];
}
valdui.prototype.add = function (dom, reuls) {
    for (let i = 0; i < reuls.length; i++) {
        let trul = reuls[i];
        let fn = function () {
            let mimisr = trul.fangfa.split(":");
            let diyiwei = mimisr.shift();
            mimisr.push(trul.Text);
            mimisr.unshift(dom.value);
            return condition[diyiwei].apply(dom, mimisr);

        };
        this.valshuzu.push(fn);
    }
}
valdui.prototype.fanhui = function () {
    for (let i = 0; i < this.valshuzu.length; i++) {
        let pans = this.valshuzu[i]();
        if (pans) {
            return pans;
        }
    }
};

let val = new valdui();
val.add(form.zhanhao, [{
    fangfa: 'kon',
    Text: '用户名不能为空'
}, {
    fangfa: 'eng:8',
    Text: '用户名不能少于8位数'

}]);
val.add(form.mima, [{
    fangfa: 'kon',
    Text: '密码不能为空'
}, {
    fangfa: 'eng:6',
    Text: '密码不能少于6位数'

}]);
val.add(form.shoujihao, [{
    fangfa: 'kon',
    Text: '手机号不能为空'
}, {
    fangfa: 'dianhua',
    Text: '电话号码格式不对'
}]);

let but = document.querySelector('#button');
but.onclick = function (e) {
    let tishi = val.fanhui();
    if (tishi) {
        e.preventDefault();
        alert(tishi);
    };
};