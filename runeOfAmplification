/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exampleScript.ts":
/*!******************************!*\
  !*** ./src/exampleScript.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let runeOfAmplification = {};
var RuneOfAmplification;
(function (RuneOfAmplification) {
    RuneOfAmplification.gameStart = false;
    RuneOfAmplification.FunctionStatus = false;
    //Вектора верхней и нижний руны усиления
    let runeTop = new Vector(-1640, 984, 176);
    // let runeBot = new Vector(1180, 1248, 192);
    //Пункты в меню
    RuneOfAmplification.runeVisionMenuStatus = Menu.AddToggle(['Information', 'RuneVision'], 'Статус работы', false);
    //Таймер для сообщения в чате
    RuneOfAmplification.runeVisionMenuTimer = Menu.AddSlider(['Information', 'RuneVision'], 'Оповещение каждые ... сек', 1, 10, 5, 1);
    RuneOfAmplification.timer = RuneOfAmplification.runeVisionMenuTimer.GetValue();
    //Описания пунктов меню
    RuneOfAmplification.runeVisionMenuTimer.SetTip('Через сколько секунд будет появлятся повтороное сообщение об руне\n(Изменения вступают через 1 секунду)');
    RuneOfAmplification.runeVisionMenuStatus.SetTip('После как в поле зрения вашей команды появляется любая руна усиления(хоть на 0.000001с)\nвы сразу получите всю информацию о ней.\nЕсли вы не подбирали руну и не прошло 2 минуты после её спавна,\nто скорее всего её взяли противники');
    //Проверка состояния кнопки
    RuneOfAmplification.runeVisionMenuStatus.OnChange(state => {
        RuneOfAmplification.FunctionStatus = state.newValue;
    });
    RuneOfAmplification.runeVisionMenuStatus.GetValue();
    //Названия рун
    let runesName = ['[NotInf]', 'Двойной Урон', 'Ускорение', 'Иллюзии', 'Невидимость', 'Регенерация', 'Баунти', 'Волшебство'];
    //Обнаружение (Спасибо Madaspe)
    function detect() {
        for (let i of EntitySystem.GetRunesList()) {
            let posRune = i.GetAbsOrigin();
            if (i.GetRuneType() !== Enum.RuneType.DOTA_RUNE_BOUNTY) {
                if (runeTop.Distance(posRune) < 100) {
                    Chat.Print('ConsoleChat', 'Обнаружена руна усиления: <font color="#7B68EE">Сверху(top)</font>' + "  " + '<font color="#FF8C00" >' + " " + runesName[i.GetRuneType().valueOf() + 1]);
                }
                else {
                    Chat.Print('ConsoleChat', 'Обнаружена руна усиления: <font color="#7B68EE">Снизу(bot)</font>' + "  " + '<font color="#FF8C00" >' + " " + runesName[i.GetRuneType().valueOf() + 1]);
                }
            }
        }
    }
    RuneOfAmplification.detect = detect;
    //Проверка активная игра или нет (Спасибо Madaspe)
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                RuneOfAmplification.gameStart = true;
                RuneOfAmplification.myHero = EntitySystem.GetLocalHero();
                RuneOfAmplification.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!RuneOfAmplification.myHero ||
                !RuneOfAmplification.myHero.IsExist() ||
                RuneOfAmplification.myHero.GetUnitName() == null) {
                RuneOfAmplification.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = RuneOfAmplification.Load || (RuneOfAmplification.Load = {}));
})(RuneOfAmplification || (RuneOfAmplification = {}));
runeOfAmplification.OnUpdate = () => {
    //Каждую секунду проверяем значение runeVisionMenuTimer
    if (Engine.OnceAt(1))
        RuneOfAmplification.timer = RuneOfAmplification.runeVisionMenuTimer.GetValue();
    //Если игра активна и RuneVision = Вкл
    if (RuneOfAmplification.gameStart && RuneOfAmplification.FunctionStatus) {
        //Каждые N секунд, получаем информацию об рунах усилений (N - runeVisionMenuTimer)
        if (Engine.OnceAt(RuneOfAmplification.timer)) {
            RuneOfAmplification.detect();
        }
    }
};
//Когда матч закончился, говорит что игра не активна
runeOfAmplification.OnGameEnd = () => {
    RuneOfAmplification.gameStart = false;
};
runeOfAmplification.OnScriptLoad = runeOfAmplification.OnGameStart = RuneOfAmplification.Load.Init;
RegisterScript(runeOfAmplification);


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/exampleScript.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\exampleScript.ts */"./src/exampleScript.ts");


/***/ })

/******/ });
