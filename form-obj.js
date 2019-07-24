//方法
let forms = document.querySelector('form');
let form = {
    vacancy: function (val, text) {
        if (val == '') {
            return alert(text);
        }
    },
    place: function (val, len, text) {
        if (val.length < len) {
            return alert(text);
        }
    },
};
//执行方法
function state() {
    this.catena = [];
};
state.prototype.syntony = function (dom, par) {
    for (let i = 0; i < par.length; i++) {
        let vas = par[i];

        function fn() {
            let array = pan.way.split(':');
            let ways = array.shift();
            array.push(vas.Text);
            array.unshift(dom.value);
            return form[ways].apply(dom, array);
        };
        this.catena.push(fn);
    };

};
state.prototype.returned = function () {
    for (let i = 0; i < catena.length; i++) {
        let arr = this.catena[i]();
        if (arr) {
            return arr;
        }
    }
};

let sta = new state();
sta.syntony(form.name, [{
    way: 'vacancy',
    Text: '用户名不能为空',
}, {
    way: 'place:8',
    Text: '用户名长度不能少于8位',
}]);
//执行点击事件
let btn = document.querySelector('#button');
btn.onclick = function (e) {
    let result = sta.returned();
    if (result) {
        e.preventDefault();
        alert(result);
    }
}