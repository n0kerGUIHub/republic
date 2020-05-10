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

/***/ "./src/goodenemyForAntiMage.ts":
/*!*************************************!*\
  !*** ./src/goodenemyForAntiMage.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let goodEnemyForAntiMage = {};
var GoodEnemyForAntiMage;
(function (GoodEnemyForAntiMage) {
    GoodEnemyForAntiMage.gameStart = false;
    GoodEnemyForAntiMage.GoodEnemyAntiMageStat = false;
    GoodEnemyForAntiMage.HERO_INDEX = 'npc_dota_hero_antimage';
    GoodEnemyForAntiMage.font = Renderer.LoadFont('Arial', 27, Enum.FontWeight.BOLD);
    GoodEnemyForAntiMage.goodEnemyForAntiMageStatus = Menu.AddToggle(['More', 'Heroes', 'Agility', 'AntiMage'], 'Статус работы', false);
    GoodEnemyForAntiMage.goodtargetMessage = Menu.AddSlider(['More', 'Heroes', 'Agility', 'AntiMage'], 'Частота оповещений в чат(сек)', 1, 120, 30, 1);
    GoodEnemyForAntiMage.goodtargetPing = Menu.AddSlider(['More', 'Heroes', 'Agility', 'AntiMage'], 'Частота пингов(сек)', 1, 120, 30, 1);
    GoodEnemyForAntiMage.goodEnemyForAntiMageStatus.SetTip('Данный скрипт будет отмечать и информировать вас о том герое врага,\nкоторого будет лучше всего зафокусить и убить');
    GoodEnemyForAntiMage.goodEnemyForAntiMageStatus.OnChange(state => {
        GoodEnemyForAntiMage.GoodEnemyAntiMageStat = state.newValue;
    });
    GoodEnemyForAntiMage.goodEnemyForAntiMageStatus.GetValue();
    Menu.SetImage(['More', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['More', 'Heroes', 'Agility'], "~/menu/40x40/agillity.png");
    Menu.SetImage(['More', 'Heroes', 'Agility', 'AntiMage'], "panorama/images/heroes/icons/npc_dota_hero_antimage_png.vtex_c");
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                GoodEnemyForAntiMage.gameStart = true;
                GoodEnemyForAntiMage.myHero = EntitySystem.GetLocalHero();
                GoodEnemyForAntiMage.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!GoodEnemyForAntiMage.myHero || !GoodEnemyForAntiMage.myHero.IsExist() || GoodEnemyForAntiMage.myHero.GetUnitName() !== GoodEnemyForAntiMage.HERO_INDEX) {
                GoodEnemyForAntiMage.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = GoodEnemyForAntiMage.Load || (GoodEnemyForAntiMage.Load = {}));
    let BigText;
    (function (BigText) {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        BigText.capitalizeFirstLetter = capitalizeFirstLetter;
    })(BigText = GoodEnemyForAntiMage.BigText || (GoodEnemyForAntiMage.BigText = {}));
})(GoodEnemyForAntiMage || (GoodEnemyForAntiMage = {}));
goodEnemyForAntiMage.OnDraw = () => {
    if (GoodEnemyForAntiMage.GoodEnemyAntiMageStat && GoodEnemyForAntiMage.gameStart) {
        let enemy = null;
        for (let i = 4; i > -1; i--) {
            let tempEnemy = GoodEnemyForAntiMage.enemypriority[i][0];
            if (!tempEnemy.IsDormant()) {
                enemy = GoodEnemyForAntiMage.enemypriority[i];
                break;
            }
        }
        if (enemy && enemy[0].IsAlive() && !enemy[0].IsDormant()) {
            let [x, y, isOnScreen] = Renderer.WorldToScreen(GoodEnemyForAntiMage.enemypriority[4][0].GetAbsOrigin().add(new Vector(0, 0, GoodEnemyForAntiMage.enemypriority[4][0].GetHealthBarOffset())));
            if (!isOnScreen) {
                return;
            }
            Renderer.SetDrawColor(255, 255, 255, 255);
            Renderer.DrawText(GoodEnemyForAntiMage.font, x - 85, y - 75, 'ЛУЧШАЯ ЦЕЛЬ');
        }
    }
};
goodEnemyForAntiMage.OnUpdate = () => {
    if (Engine.OnceAt(0.33)) {
        GoodEnemyForAntiMage.goodtargetMessageTime = GoodEnemyForAntiMage.goodtargetMessage.GetValue();
        GoodEnemyForAntiMage.goodtargerPingTime = GoodEnemyForAntiMage.goodtargetPing.GetValue();
        if (GoodEnemyForAntiMage.GoodEnemyAntiMageStat && GoodEnemyForAntiMage.gameStart) {
            GoodEnemyForAntiMage.enemypriority = [];
            for (let i of EntitySystem.GetHeroesList()) {
                if (!i.IsSameTeam(GoodEnemyForAntiMage.myHero))
                    GoodEnemyForAntiMage.enemypriority.push([i, i.GetMaxMana()]);
            }
            GoodEnemyForAntiMage.enemypriority.sort((a, b) => {
                return (a[1] - b[1]);
            });
            for (let i of GoodEnemyForAntiMage.enemypriority) {
                console.log(i[0].GetUnitName(), i[1]);
            }
            let enemy = null;
            for (let i = 4; i > -1; i--) {
                let tempEnemy = GoodEnemyForAntiMage.enemypriority[i][0];
                if (!tempEnemy.IsDormant()) {
                    enemy = GoodEnemyForAntiMage.enemypriority[i];
                    break;
                }
            }
            if (Engine.OnceAt(GoodEnemyForAntiMage.goodtargerPingTime - 0.33) && GoodEnemyForAntiMage.enemypriority[4]) {
                if (enemy && enemy[0].IsAlive() && !enemy[0].IsDormant()) {
                    MiniMap.Ping(GoodEnemyForAntiMage.enemypriority[4][0].GetAbsOrigin(), Enum.PingType.NORMAL, true);
                }
            }
            if (Engine.OnceAt(GoodEnemyForAntiMage.goodtargetMessageTime - 0.33) && GoodEnemyForAntiMage.enemypriority[4]) {
                if (enemy && enemy[0].IsAlive() && !enemy[0].IsDormant()) {
                    let finalNameH = GoodEnemyForAntiMage.enemypriority[4][0].GetUnitName().replace('npc_dota_hero_', '').split('_');
                    let target = '';
                    for (let k = 0; k < finalNameH.length; k++) {
                        target += GoodEnemyForAntiMage.BigText.capitalizeFirstLetter(finalNameH[k]) + " ";
                    }
                    Chat.Print('ConsoleChat', '<font color="#FFFFFF">Лучшая цель: </font><font color="#A52A2A">' + " " + target);
                }
                else {
                    Chat.Print('ConsoleChat', 'Цель не обнаружена');
                }
            }
        }
    }
};
goodEnemyForAntiMage.OnGameEnd = () => {
    GoodEnemyForAntiMage.gameStart = false;
};
goodEnemyForAntiMage.OnScriptLoad = goodEnemyForAntiMage.OnGameStart = GoodEnemyForAntiMage.Load.Init;
RegisterScript(goodEnemyForAntiMage);


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/goodenemyForAntiMage.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\goodenemyForAntiMage.ts */"./src/goodenemyForAntiMage.ts");


/***/ })

/******/ });
