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

/***/ "./src/antimageDodge.ts":
/*!******************************!*\
  !*** ./src/antimageDodge.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let antiMageAbuse = {};
var AntiMageAbuse;
(function (AntiMageAbuse) {
    AntiMageAbuse.gameStart = false;
    AntiMageAbuse.antiMageFunStat = false;
    AntiMageAbuse.itemMana = [
        'item_guardian_greaves',
        'item_arcane_boots',
        'item_soul_ring',
        'item_arcane_ring',
        'item_magic_stick',
        'item_magic_wand',
        'item_enchanted_mango'
    ];
    AntiMageAbuse.itemManaImage = [
        'panorama/images/items/guardian_greaves_png.vtex_c',
        'panorama/images/items/arcane_boots_png.vtex_c',
        'panorama/images/items/soul_ring_png.vtex_c',
        'panorama/images/items/arcane_ring_png.vtex_c',
        'panorama/images/items/magic_stick_png.vtex_c',
        'panorama/images/items/magic_wand_png.vtex_c',
        'panorama/images/items/enchanted_mango_png.vtex_c'
    ];
    AntiMageAbuse.itemManaBool = [true, true, true, true, true, true, true];
    AntiMageAbuse.antiMageAbuseMenuStatus = Menu.AddToggle(['Abuse', 'Anti-AntiMage'], 'Статус работы', false);
    AntiMageAbuse.antiMageAbuseMenuPrecent = Menu.AddSlider(['Abuse', 'Anti-AntiMage'], 'Процент маны для срабатывания', 10, 95, 50, 5);
    AntiMageAbuse.activePrecent = AntiMageAbuse.antiMageAbuseMenuPrecent.GetValue();
    AntiMageAbuse.antiMageAbuseMenuItems = Menu.AddMultiSelect(['Abuse', 'Anti-AntiMage'], 'Предметы', AntiMageAbuse.itemManaImage, AntiMageAbuse.itemManaBool)
        .OnChange(state => {
        AntiMageAbuse.antiMageAbuseMenuItems = state.newValue;
    })
        .GetValue();
    AntiMageAbuse.antiMageAbuseMenuStatus.SetTip('Данный скрипт будет использовать все возможные расходники для пополнения маны\nТак же будут изменяться состояния PT&Vambrace');
    AntiMageAbuse.antiMageAbuseMenuPrecent.SetTip('Какой должен быть процент вашей маны, для активации скрипта');
    AntiMageAbuse.antiMageAbuseMenuStatus.OnChange(state => {
        AntiMageAbuse.antiMageFunStat = state.newValue;
    });
    AntiMageAbuse.antiMageAbuseMenuStatus.GetValue();
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                AntiMageAbuse.gameStart = true;
                AntiMageAbuse.myHero = EntitySystem.GetLocalHero();
                AntiMageAbuse.myPlayer = EntitySystem.GetLocalPlayer();
            }
            if (!AntiMageAbuse.myHero ||
                !AntiMageAbuse.myHero.IsExist() ||
                AntiMageAbuse.myHero.GetUnitName() == null) {
                AntiMageAbuse.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = AntiMageAbuse.Load || (AntiMageAbuse.Load = {}));
})(AntiMageAbuse || (AntiMageAbuse = {}));
antiMageAbuse.OnUpdate = () => {
    if (Engine.OnceAt(1)) {
        AntiMageAbuse.activePrecent = AntiMageAbuse.antiMageAbuseMenuPrecent.GetValue();
        /*for (let i = 0; i < AntiMageAbuse.antiMageAbuseMenuItems.length; i++) {
            if (AntiMageAbuse.antiMageAbuseMenuItems[i]) {
                console.log('1')
                console.log('---------------------------')
            } else {
                console.log('0')
                console.log('---------------------------')
            }
        }*/
    }
};
antiMageAbuse.OnPrepareUnitOrders = (order) => {
    if (AntiMageAbuse.antiMageFunStat) {
        if (order.ability) {
            if (order.target === null) {
                return;
            }
            if (order.target.GetUnitName() === AntiMageAbuse.myHero.GetUnitName()) {
                let percentMana = AntiMageAbuse.myHero.GetMana() / AntiMageAbuse.myHero.GetMaxMana() * 100;
                if (percentMana <= AntiMageAbuse.activePrecent) {
                    for (let itemName of AntiMageAbuse.itemMana) {
                        let item = AntiMageAbuse.myHero.GetItem(itemName, false);
                        if (item) {
                            for (let i = 0; i < AntiMageAbuse.antiMageAbuseMenuItems.length; i++) {
                                if (AntiMageAbuse.antiMageAbuseMenuItems[i]) {
                                    item.CastNoTarget();
                                }
                            }
                        }
                    }
                }
            }
            //console.log(RuneOfAmplification.myHero.GetUnitName())
            //console.log(order.abilityIndex)
            //console.log(order.target.GetUnitName())
        }
    }
};
antiMageAbuse.OnGameEnd = () => {
    AntiMageAbuse.gameStart = false;
};
antiMageAbuse.OnScriptLoad = antiMageAbuse.OnGameStart = AntiMageAbuse.Load.Init;
RegisterScript(antiMageAbuse);
/***/ }),
/******/ });
