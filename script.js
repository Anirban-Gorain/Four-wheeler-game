/* Project date 2020, Starting-Fabruary:1, Ending-Fabruary:28 */
/*Java script code on here */
/*
01)Key identyfyer section.
02)Car move.
03)Background music.
04)Coin.
05)Enemy car section.
06)Call needable funciton.
07)Speed increaser.
08)Score section.
*/
//-------------------------------------------------------01-----------------------------------------------------------------------
// Key identyfyer section. It is a object, Used for  assign first time false.
let _proof_Of_Score_Section_Height_Is_0 = false;
let _background_Volume;
// Take bottom of enemy car.
let _top_Of_Enemy_Car;
// Take bottom of coin.
let _top_Of_Enemy_Coin;
let KEY = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};
// Key down event on document, Used for when any key will press by user on this this time assign true on the top object.
document.addEventListener("keydown", () => {
    KEY[event.key] = true;
    //Call functions;
    // The down ward conditional statement uses is after aollide enemy car and my car stop some activitys.
    if (_after_Collide_car_Set_Enemy_In_Correct_Position <= 1 && _proof_Of_Score_Section_Height_Is_0 == true) {
        _car_Mover();
    }
    // After click any key from keybord then will start this down ward function one time only.
});
// Key up event on document, Used for when any key will up by user on this this time assign false on the top object.
document.addEventListener("keyup", () => {
    KEY[event.key] = false;
});
//-------------------------------------------------------02-----------------------------------------------------------------------
// Needable  variable.
let _left = 0;
let _top = 0;
const _car_Mover_Using_Padding = document.querySelector(".My_Car_Section");
// Dfination of function.
function _car_Mover() {
    document.querySelector(".fa-arrow-left").style.color = "rgba(255, 255, 255, 1)";
    document.querySelector(".fa-arrow-right").style.color = "rgba(255, 255, 255, 1)";
    if (KEY.ArrowRight == true) {
        if (_left <= 255) {
            _left = _left + _store_Range;
            _car_Mover_Using_Padding.style.left = _left + "px";
            document.querySelector(".fa-arrow-right").style.color = "rgb(166, 255, 0)";
            document.querySelector(".fa-arrow-left").style.color = "rgba(255, 255, 255, 1)";
        }

    }
    if (KEY.ArrowLeft == true) {
        if (_left >= -255) {
            _left = _left - _store_Range;
            _car_Mover_Using_Padding.style.left = _left + "px";
            document.querySelector(".fa-arrow-left").style.color = "rgb(166, 255, 0)";
            document.querySelector(".fa-arrow-right").style.color = "rgba(255, 255, 255, 1)";
        }

    }
    if (KEY.ArrowUp == true) {
        if (_top >= -20) {
            _top = _top - _store_Range;
            _car_Mover_Using_Padding.style.top = _top + "px";
        }

    }
    if (KEY.ArrowDown == true) {
        if (_top <= 80) {
            _top = _top + _store_Range;
            _car_Mover_Using_Padding.style.top = _top + "px";
        }

    }
}
//-------------------------------------------------------03----------------------------------------------------------------------- 
// Background music.
let _background_Music_Condition_Satisfyr = 0;
let _after_Collide_car_Set_Enemy_In_Correct_Position = 1
_background_Sound = new Audio;
_background_Sound.src = '/_audios/_background_Music.mp3';
_background_Sound.loop = true;

function _backgrond_Music() {

    if (_background_Music_Condition_Satisfyr == 0 && _background_Volume >= 0.1) {
        _background_Sound.volume = parseFloat(_background_Volume);
        _background_Sound.play();
        _background_Music_Condition_Satisfyr++;
    }
}

//-------------------------------------------------------04-----------------------------------------------------------------------

// Coin section.
//Needable variables.
let _offset_Of_Coin;
let _get_The_Offset_Of_My_Car;
let _score = 0;
let _car_And_Coin_Collide_Sound = new Audio;
_car_And_Coin_Collide_Sound.src = '/_audios/_coin.wav'

function _coin_Touch_Detector_With_My_Car() {
    //Coin offsets.
    _offset_Of_Coin = document.querySelector("._coin").getBoundingClientRect();
    //My car offsets.
    _get_The_Offset_Of_My_Car = document.querySelector("._my_Car").getBoundingClientRect();
    //Touch detection
    if (!((_get_The_Offset_Of_My_Car.top > _offset_Of_Coin.bottom) || (_get_The_Offset_Of_My_Car.bottom < _offset_Of_Coin.top) || (_get_The_Offset_Of_My_Car.left > _offset_Of_Coin.right) || (_get_The_Offset_Of_My_Car.right < _offset_Of_Coin.left))) {
        if (_after_Collide_car_Set_Enemy_In_Correct_Position != 2) {
            _car_And_Coin_Collide_Sound.play();
            _car_And_Coin_Collide_Sound.volume = 1;
            _score = _score + 0.1;
        }
    }
    //Using of requestanimationframe this function becomed infinaite.
    requestAnimationFrame(_coin_Touch_Detector_With_My_Car);
}
// Calling function.


//Diffrent position genrator.
function diffrent_Position_genrator() {
    //Genrate random number between 0 to 5.
    let _random_Number_Between_0_To_5 = Math.trunc(Math.random() * 6);
    //Access style sheet.
    const _stylesheet = document.styleSheets[1];
    // console.log(_random_Number_Between_0_To_5);
    if (_random_Number_Between_0_To_5 == 0) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 40%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 0%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    } else if (_random_Number_Between_0_To_5 == 1) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 40%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 10%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    } else if (_random_Number_Between_0_To_5 == 2) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 45%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 25%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    } else if (_random_Number_Between_0_To_5 == 3) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 52%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 55%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    } else if (_random_Number_Between_0_To_5 == 4) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 55%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 70%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    } else if (_random_Number_Between_0_To_5 == 5) {
        _stylesheet.insertRule(`
                    @keyframes _animation_For_coin_Element_Target {
                        from {
                            width: 0px;
                            height: 0px;
                            margin: 0px 0px 0px 55%;
                        }
                    
                        to {
                            width: 150px;
                            height: 150px;
                            margin: 40% 0px 0px 80%;
                        }
                    }
                    `, _stylesheet.cssRules.length);
    }
}
//-------------------------------------------------------05-----------------------------------------------------------------------
// Enemy car section.
//Maked a block for enemy car.
let _car = document.createElement("div");
_car.setAttribute("class", `_styles_For_Enemy_Car`);
let _target = document.querySelector("._enemy_Car_Section");
_target.appendChild(_car);
//Detect cor touch with my car.
//Needable variables.
//Enemy car.
let _width_Of_Enemy;
let _height_Of_Enemy;
let _margin_Left_Of_Enemy;
let _margin_Top_Of_Enemy;
//Coin
let _width_Of_Coin;
let _height_Of_Coin;
let _margin_Left_Of_Coin;
let _margin_Top_Of_Coin;

function _car_Touch_Detector_With_My_Car() {


    //Enemy car offsets.
    _offset_Of_Enemy_Car = document.querySelector("._styles_For_Enemy_Car").getBoundingClientRect();
    //My car offsets.
    _get_The_Offset_Of_My_Car = document.querySelector("._my_Car").getBoundingClientRect();
    if (!((_get_The_Offset_Of_My_Car.top > _offset_Of_Enemy_Car.bottom) || (_get_The_Offset_Of_My_Car.bottom < _offset_Of_Enemy_Car.top) || (_get_The_Offset_Of_My_Car.left > _offset_Of_Enemy_Car.right) || (_get_The_Offset_Of_My_Car.right < _offset_Of_Enemy_Car.left))) {
        //When the two car collide then stop all animations and show score.
        // Function interval clear.
        cancelAnimationFrame(_infinite);
        _road_Element_Animation_Speed = 0;
        _animation_Speed_Of_Coin = 0
        clearInterval(_clear_Interval_Of_Enemy);
        clearInterval(_second_Ten_Second);
        clearInterval(_animation_Speed_Of_Coin);
        //Middle line of the road.
        document.querySelector("._under_Of_The_Road_Middle_Street_Line").style.animationDuration = '0s';
        // Side lies of the road.
        document.querySelector("._right_Side_Zebra_Line").style.animationDuration = '0s';
        document.querySelector("._left_Side_Zebra_Line").style.animationDuration = '0s';
        //Lamp posts of my road.
        document.querySelector("._lamp_Post_Of_Left_Side").style.animationDuration = '0s';
        document.querySelector("._lamp_Post_Of_Right_Side").style.animationDuration = '0s';
        //Coin.
        document.querySelector("._coin").style.animationDuration = "0s";
        //Enemy car.
        if (_after_Collide_car_Set_Enemy_In_Correct_Position <= 1) {
            _after_Collide_car_Set_Enemy_In_Correct_Position++;
            _collision_Audio = new Audio;
            _collision_Audio.src = '/_audios/_collision_Music.wav';
            _collision_Audio.play();
            console.log(_score);
            // After collison show score section
            const _score_Section_Height_Become_One_Hundred = setInterval(()=>{
                document.querySelector("._score_Section").style.height = "100vh";
                clearInterval(_score_Section_Height_Become_One_Hundred);
            }, 3000);
            document.querySelector("._play").style.visibility = "hidden";
            document.querySelector("._score_Bord").innerHTML =`${Math.trunc(_score)}<br>Hey, ${_input_Name} If you play again then <strong>refresh</strong> this page`;
            document.querySelector("footer").style.marginTop = '-10px';
            cancelAnimationFrame(_car_Touch_Detector_With_My_Car);
        }
        document.querySelector("._styles_For_Enemy_Car").style.animationDuration = '0s';
        let _enemy_Car = document.querySelector("._styles_For_Enemy_Car");
        _enemy_Car.style.marginLeft = _margin_Left_Of_Enemy + "px";
        _enemy_Car.style.marginTop = _margin_Top_Of_Enemy + "px";
        _enemy_Car.style.width = _width_Of_Enemy + "px";
        _enemy_Car.style.height = _height_Of_Enemy + "px";
        //Coin
        let Coin = document.querySelector("._coin");
        Coin.style.marginLeft = _margin_Left_Of_Coin + "px";
        Coin.style.marginTop = _margin_Top_Of_Coin + "px";
        Coin.style.width = _width_Of_Coin + "px";
        Coin.style.height = _height_Of_Coin + "px";
    } else {
        //After collide set coorect position of enemy car and coin.
        //Enemy car.
        let _position_Of_Enemy_Car_get = document.querySelector("._styles_For_Enemy_Car").getBoundingClientRect();
        let _enemy_Car = document.querySelector("._styles_For_Enemy_Car");
        //Coin.
        let _position_Of_Coin_get = document.querySelector("._coin").getBoundingClientRect();
        let Coin = document.querySelector("._coin");
        if (_after_Collide_car_Set_Enemy_In_Correct_Position == 1) {
            //Enemy car.
            _width_Of_Enemy = _position_Of_Enemy_Car_get.width;
            _height_Of_Enemy = _position_Of_Enemy_Car_get.height;
            _margin_Left_Of_Enemy = _enemy_Car.offsetLeft;
            _margin_Top_Of_Enemy = _enemy_Car.offsetTop;
            //Coin.
            _width_Of_Coin = _position_Of_Coin_get.width;
            _height_Of_Coin = _position_Of_Coin_get.height;
            _margin_Left_Of_Coin = Coin.offsetLeft;
            _margin_Top_Of_Coin = Coin.offsetTop;

        }
    }
    // When two car will be collide background music will be stop similarly coin.
    if (_after_Collide_car_Set_Enemy_In_Correct_Position == 2) {
        _background_Sound.pause();
        _car_And_Coin_Collide_Sound.pause();
    }
    requestAnimationFrame(_car_Touch_Detector_With_My_Car);
}

//Enemy car diffrent position.
const _car_Of_Enemy = document.querySelector("._styles_For_Enemy_Car");

function _enemy_Car_Diffrent_Position(_interval_Gap_Reciver) {
    let _random_Number = Math.trunc(Math.random() * (10));
    // console.log(_random_Number);
    const _stylesheet = document.styleSheets[0];

    //Combination no 0
    if (_random_Number == 0) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car1.png)';
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
        from {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 565px;
            }
        
            to {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px -500px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 1) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car2.png)';
        //Combination no 1
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            from {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 565px;
            }
        
            to {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px -200px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 2) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car3.png)';
        //Combination no 2.
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 565px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px 300px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 3) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car4.png)';
        //Combination no 3
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 680px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px -200px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 4) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car5.png)';
        //Combination no 4
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 670px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px 280px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 5) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car6.png)';
        //Combination no 5
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 670px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px 900px;
            }
        }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 6) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car7.png)';
        //Combination no 6
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 670px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px 1000px;
            }
        }
            `, _stylesheet.cssRules.length)
    } else if (_random_Number == 7) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car1.png)';
        //Combination no 0 repet.
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            from {
                    width: 0px;
                    height: 0px;
                    margin: 0px 0px 0px 565px;
                }
            
                to {
                    width: 690px;
                    height: 500px;
                    margin: 530px 0px 0px -500px;
                }
            }
            `, _stylesheet.cssRules.length);
    } else if (_random_Number == 8) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car2.png)';
        //Combination no 1 repet.
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            from {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 565px;
            }
        
            to {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px -200px;
            }
        }
            `, _stylesheet.cssRules.length);

    } else if (_random_Number == 9) {
        _car_Of_Enemy.style.backgroundImage = 'url(/_images/_enemy_Car3.png)';
        //Combination no 2 repet.
        _stylesheet.insertRule(`
        @keyframes _enmy_Car_Mover {
            0% {
                width: 0px;
                height: 0px;
                margin: 0px 0px 0px 565px;
            }
            100% {
                width: 690px;
                height: 500px;
                margin: 530px 0px 0px 300px;
            }
        }
            `, _stylesheet.cssRules.length);
    }
}
//-------------------------------------------------------06-----------------------------------------------------------------------
// Call needable function after press any key on keypord function.

//-------------------------------------------------------07-----------------------------------------------------------------------
// Speed controler.
let _road_Element_Animation_Speed = "0s";
// All elements wich neaded to crontrol their speed.
let _under_Of_The_Road_Middle_Street_Line = document.querySelector("._under_Of_The_Road_Middle_Street_Line");
let _right_Side_Zebra_Line = document.querySelector("._right_Side_Zebra_Line");
let _left_Side_Zebra_Line = document.querySelector("._left_Side_Zebra_Line");
let _lamp_Post_Of_Left_Side = document.querySelector("._lamp_Post_Of_Left_Side");
let _lamp_Post_Of_Right_Side = document.querySelector("._lamp_Post_Of_Right_Side");
let _coin_Animation_Duration = document.querySelector("._coin");
// Set duration.


function _infinite() {
    _under_Of_The_Road_Middle_Street_Line.style.animationDuration = _road_Element_Animation_Speed + "s";
    _right_Side_Zebra_Line.style.animationDuration = _road_Element_Animation_Speed + "s";
    _left_Side_Zebra_Line.style.animationDuration = _road_Element_Animation_Speed + "s";
    _lamp_Post_Of_Left_Side.style.animationDuration = _road_Element_Animation_Speed + "s";
    _lamp_Post_Of_Right_Side.style.animationDuration = _road_Element_Animation_Speed + "s";
    // When Increase car speed multiple time animation make some problem for fix it .
    _top_Of_Enemy_Car = document.querySelector("body ._enemy_Car_Section ._styles_For_Enemy_Car").getBoundingClientRect();
    if (_top_Of_Enemy_Car.bottom >= 1260 && _top_Of_Enemy_Car.bottom <= 1275) {
        _enemy_Car_Animation_Duration.style.animation = "X  ease-in-out";
    }
    // When Increase car speed multiple time animation make some problem for fix it .
    _top_Of_Enemy_Coin = document.querySelector("._coin").getBoundingClientRect();
    if (_top_Of_Enemy_Coin.bottom >= 695 && _top_Of_Enemy_Coin.bottom <= 700) {
        _coin_Animation_Duration.style.animation = "X  ease-in-out";
    }
    _top_Of_Enemy_Car = document.querySelector("body ._enemy_Car_Section ._styles_For_Enemy_Car").getBoundingClientRect();

    requestAnimationFrame(_infinite);
}
_infinite();
// First 3 second all road element animation duration will be 0.5s.
let _first_Ten_Second = setInterval(() => {
    if (_proof_Of_Score_Section_Height_Is_0 == true) {
        _road_Element_Animation_Speed = 0.8;
        _backgrond_Music();
    }
}, 3 * 1000);
// Second 10 second all road element animation duration will be 0.5s.
let _second_Ten_Second = setInterval(() => {

    if (_road_Element_Animation_Speed >= 0.2 && _proof_Of_Score_Section_Height_Is_0 == true) {
        clearInterval(_first_Ten_Second);
        _road_Element_Animation_Speed = _road_Element_Animation_Speed - 0.1;
    }
}, 10 * 1000);
// Enemy car speed controlar.
let _enemy_Car_Animation_Duration = document.querySelector("._styles_For_Enemy_Car");
let _interval_Gap_Sender_And_Animation_Speed_Controlor = 10;
_car_Touch_Detector_With_My_Car();

let _clear_Interval_Of_Enemy = setInterval(() => {
    if (_proof_Of_Score_Section_Height_Is_0 == true) {
        _enemy_Car_Animation_Duration.style.animation = "_enmy_Car_Mover  ease-in-out";
        _enemy_Car_Animation_Duration.style.animationDuration = _interval_Gap_Sender_And_Animation_Speed_Controlor + "s";
        _enemy_Car_Diffrent_Position(_interval_Gap_Sender_And_Animation_Speed_Controlor);
        if (_interval_Gap_Sender_And_Animation_Speed_Controlor != 2.4) {
            _interval_Gap_Sender_And_Animation_Speed_Controlor = _interval_Gap_Sender_And_Animation_Speed_Controlor - 0.80;
        }
    }
}, 1000 * _interval_Gap_Sender_And_Animation_Speed_Controlor);
// Coin speed controlar.
let _animation_Speed_Of_Coin = 8;
_coin_Touch_Detector_With_My_Car();
let _clear_Interval_Of_Coin = setInterval(() => {
    if (_proof_Of_Score_Section_Height_Is_0 == true) {
        _coin_Animation_Duration.style.animation = "_animation_For_coin_Element_Target ease-in-out";
        _coin_Animation_Duration.style.animationDuration = _animation_Speed_Of_Coin + "s";
        diffrent_Position_genrator();
        if (_animation_Speed_Of_Coin != 4) {
            _animation_Speed_Of_Coin = _animation_Speed_Of_Coin - 1;
        }
    }
}, 1000 * _animation_Speed_Of_Coin);
//-------------------------------------------------------08-----------------------------------------------------------------------
// Read more section.
let _read_More_Content = "on this time game will be over. You can use Arrow-Keys' on your keybord for control your car and you can adjust sensevity of 'Arrow-Keys' using of downard slider. Enter your name and click play button to play this game.";
document.querySelector("body ._score_Section ._score_Container h5 span").addEventListener("click", () => {
    document.querySelector("body ._score_Section ._score_Container h5").innerHTML = "It is a four wheeler game, The rule of the game is always you must be make distence with enemy car, By any chance if you do collide with enemy car on this time game will be over. You can use Arrow-Keys' on your keybord for control your car and you can adjust sensevity of 'Arrow-Keys' using of downard slider. Enter your name and click play button to play this game.";
});
// Range slider for sensivity of arrow keys.
let _store_Range = Math.trunc(document.querySelector("body ._score_Section ._score_Container input").value / 4.5);
document.querySelector("body ._score_Section ._score_Container ._range").oninput = () => {
    _store_Range = Math.trunc(document.querySelector("body ._score_Section ._score_Container input").value / 4.5);

    document.querySelector("body ._score_Section ._score_Container ._renge_Value").innerHTML = document.querySelector("body ._score_Section ._score_Container input").value + "%";
}
// Range slider for volume of backgrond music.
let _store_Background_Volume = document.querySelector("._range_For_Background_Music");
_store_Background_Volume.oninput = () => {
    document.querySelector("._Background_Music_Volume_Range_Value").innerHTML = _store_Background_Volume.value + "%";
    _background_Volume = _store_Background_Volume.value / 100;
}
// Name.
let _input_Name = document.querySelector("._name");
_input_Name.addEventListener("keyup", () => {
    _input_Name = document.querySelector("._name").value;
    document.querySelector("._payer_Name").innerHTML = _input_Name;
    if ((_input_Name.length) <= 20 && (_input_Name.length) >= 5) {
        document.querySelector("._Eroor").innerHTML = " ";

    } else {
        document.querySelector("._Eroor").innerHTML = "<i>Must be user name less then 21 chracter & grater then 5 chracter.</i>";
    }
});
// Play button
document.querySelector("._play").addEventListener("click", () => {
    if (_input_Name.value != "" && !(_store_Range <= 0) && (_input_Name.length) >= 5) {
        document.querySelector("._score_Section").style.height = "0px";
        _proof_Of_Score_Section_Height_Is_0 = true;
    } else {
        document.querySelector("._Eroor").innerHTML = "<i>SOORY, User name is must be impotemnt, Without user name you do't play this game.</i>";
        document.querySelector("._slider_Eroor").innerHTML = "<i>Choose minimum 5% outherwise you do not move your car. Recomended 90%.</i>";
        document.querySelector("._Eroor").innerHTML = "<i>Must be user name less then 21 chracter & grater then 5 chracter.</i>";
    }

});