function guess() {
    let date = document.getElementById("birthday").value;
    let arr = date.split("-");
    let y = count(arr[0]);
    let m = count(arr[1]);
    let d = count(arr[2]);
    let ans = y+m+d;

    if(ans >= 10){
        ans=count(ans.toString());
    }

    let data = {
        1: ["r_uno.png", "r_dos.png", "r_tres.png"],
        2: ["n_uno.png", "n_dos.png", "n_tres.png"],
        3: ["a_uno.png", "a_dos.png", "a_tres.png"],
        4: ["v_uno.png", "v_dos.png", "v_tres.png"],
        5: ["b_uno.png", "b_dos.png", "b_tres.png"],
        6: ["i_uno.png", "i_dos.png", "i_tres.png"],
        7: ["m_uno.png", "m_dos.png", "m_tres.png"],
        8: ["p_uno.png", "p_dos.png", "p_tres.png"],
        9: ["o_uno.png", "o_dos.png", "o_tres.png"]
    };

    var rand = Math.floor(Math.random()*3);
    var img_sel = data[ans][rand];
    document.getElementById("imagen").src="images/"+img_sel;
    switch(ans){
        case 1:
            document.body.style.backgroundColor = "#f2555b";
            break;
        case 2:
            document.body.style.backgroundColor = "#ff914d";
            break;
        case 3:
            document.body.style.backgroundColor = "#ffffb1";
            break;
        case 4:
            document.body.style.backgroundColor = "#7ed957";
            break;
        case 5:
            document.body.style.backgroundColor = "#c0f0f7";
            break;
        case 6:
            document.body.style.backgroundColor = "#330099";
            break;
        case 7:
            document.body.style.backgroundColor = "#8c52ff";
            break;
        case 8:
            document.body.style.backgroundColor = "#fcb0b7";
            break;
        case 9:
            document.body.style.backgroundColor = "#f2cc5c";
            break;
        default:
            break;
    }
    
}

function count(str) {
    let res = 0;
    str.split("").forEach(str => res += parseInt(str));
    return res;
}