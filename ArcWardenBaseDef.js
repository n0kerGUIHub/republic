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

/***/ "./src/ArcWardenMoreDefenceBase.ts":
/*!*****************************************!*\
  !*** ./src/ArcWardenMoreDefenceBase.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let arcWardenMoreDefenceBase = {};
var ArcWardenMoreDefenceBase;
(function (ArcWardenMoreDefenceBase) {
    ArcWardenMoreDefenceBase.HERO_INDEX = 'npc_dota_hero_arc_warden';
    ArcWardenMoreDefenceBase.gameStart = false;
    ArcWardenMoreDefenceBase.ParticleIsCreate = false;
    ArcWardenMoreDefenceBase.ArcWardenMoreBaseDef = false;
    ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefSpamSpark = false;
    ArcWardenMoreDefenceBase.bindStatus = false;
    ArcWardenMoreDefenceBase.bindStatusThrone = false;
    ArcWardenMoreDefenceBase.FieldMap = false;
    ArcWardenMoreDefenceBase.MagneticDetect = false;
    ArcWardenMoreDefenceBase.FieldMapThrone = false;
    ArcWardenMoreDefenceBase.MagneticDetectThrone = false;
    ArcWardenMoreDefenceBase.myClone = null;
    ArcWardenMoreDefenceBase.font = Renderer.LoadFont('Arial', 15, Enum.FontWeight.BOLD);
    // [code: MSC] - Функция дефа
    // [code: SS] - спам спарков
    // [code: DT] - Деф трона
    ArcWardenMoreDefenceBase.sides = ['T3 - Mid', 'T3 - Top', 'T3 - Bot'];
    let ArcWardenMoreBaseDefStatus = Menu.AddToggle(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef'], 'Статус', false);
    ArcWardenMoreDefenceBase.keybindHandle = Menu.AddKeyBind(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef'], 'Кнопка активации', Enum.ButtonCode.KEY_NONE);
    ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefCombo = Menu.AddComboBox(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef'], 'Башня для защиты', ArcWardenMoreDefenceBase.sides, 0)
        .OnChange(state => (ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefCombo = state.newValue))
        .GetValue();
    let ArcWardenMoreBaseDefSSpark = Menu.AddToggle(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef', 'Spark'], 'SpamSpark', false);
    ArcWardenMoreDefenceBase.keybindHandleThrone = Menu.AddKeyBind(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef', 'ThroneDef'], 'Защита трона', Enum.ButtonCode.KEY_NONE);
    ArcWardenMoreBaseDefStatus.SetTip('Использует ну очень странные (но рабочие) места для MagneticField, дабы защитить вашу T3вышку');
    ArcWardenMoreBaseDefSSpark.SetTip('Ставит Spark Wraith в центр купола\nПолезно если вы не хотите чтобы враги зашли в MagneticField');
    ArcWardenMoreDefenceBase.keybindHandleThrone.SetTip('В центр трона ставится MagneticField\nТем самым мы получаем бессметрный трон\nНе ставить одну и ту же кнопку с активацией BaseDef\n(Не включать если уже используете BaseDef)');
    ArcWardenMoreDefenceBase.keybindHandle.SetTip('(Нажать 1 раз для активации)\nСкрипт начинает использовать MagneticField на `читерные` места\n(Не включать если уже используете BaseDef)');
    ArcWardenMoreBaseDefStatus.OnChange(state => {
        ArcWardenMoreDefenceBase.ArcWardenMoreBaseDef = state.newValue;
        ArcWardenMoreDefenceBase.bindStatus = false;
        ArcWardenMoreDefenceBase.FieldMap = false;
        ArcWardenMoreDefenceBase.MagneticDetect = false;
    });
    ArcWardenMoreBaseDefStatus.GetValue();
    ArcWardenMoreBaseDefSSpark.OnChange(state => {
        ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefSpamSpark = state.newValue;
        ArcWardenMoreDefenceBase.BetaSpamSpark = 0;
    });
    ArcWardenMoreBaseDefSSpark.GetValue();
    Menu.SetImage(['More', 'Heroes'], "~/menu/40x40/heroes.png");
    Menu.SetImage(['More', 'Heroes', 'Agility'], "~/menu/40x40/agillity.png");
    Menu.SetImage(['More', 'Heroes', 'Agility', 'Arc Warden'], "panorama/images/heroes/icons/npc_dota_hero_arc_warden_png.vtex_c");
    Menu.SetOrdering(['More', 'Heroes', 'Agility', 'Arc Warden', 'BaseDef'], 1);
    let Load;
    (function (Load) {
        function Init() {
            if (GameRules.IsActiveGame()) {
                ArcWardenMoreDefenceBase.gameStart = true;
                ArcWardenMoreDefenceBase.myHero = EntitySystem.GetLocalHero();
                ArcWardenMoreDefenceBase.myPlayer = EntitySystem.GetLocalPlayer();
                setTimeout(() => {
                    if (ArcWardenMoreDefenceBase.myHero.GetTeamNum() === 2) {
                        ArcWardenMoreDefenceBase.T3MidVector = new Vector(-4951, -4434, 384);
                        ArcWardenMoreDefenceBase.T3TopVector = new Vector(-6595, -3844, 384);
                        ArcWardenMoreDefenceBase.T3BotVector = new Vector(-4386, -6086, 384);
                        ArcWardenMoreDefenceBase.ThroneVector = new Vector(-5845, 5367, 384);
                    }
                    else {
                        ArcWardenMoreDefenceBase.T3MidVector = new Vector(4547, 4103, 384);
                        ArcWardenMoreDefenceBase.T3TopVector = new Vector(3990, 5790, 384);
                        ArcWardenMoreDefenceBase.T3BotVector = new Vector(6323, 3468, 384);
                        ArcWardenMoreDefenceBase.ThroneVector = new Vector(5529, 4992, 384);
                    }
                }, 500);
            }
            if (!ArcWardenMoreDefenceBase.myHero || !ArcWardenMoreDefenceBase.myHero.IsExist() || ArcWardenMoreDefenceBase.myHero.GetUnitName() !== ArcWardenMoreDefenceBase.HERO_INDEX) {
                ArcWardenMoreDefenceBase.gameStart = false;
                return;
            }
        }
        Load.Init = Init;
    })(Load = ArcWardenMoreDefenceBase.Load || (ArcWardenMoreDefenceBase.Load = {}));
})(ArcWardenMoreDefenceBase || (ArcWardenMoreDefenceBase = {}));
arcWardenMoreDefenceBase.OnDraw = () => {
    if (ArcWardenMoreDefenceBase.gameStart && ArcWardenMoreDefenceBase.ArcWardenMoreBaseDef) {
        let [x, y, isOnScreen] = Renderer.WorldToScreen(ArcWardenMoreDefenceBase.myHero.GetAbsOrigin().add(new Vector(0, 0, ArcWardenMoreDefenceBase.myHero.GetHealthBarOffset())));
        if (!isOnScreen) {
            return;
        }
        Renderer.SetDrawColor(255, 255, 255, 255);
        if (ArcWardenMoreDefenceBase.bindStatus) {
            Renderer.DrawTextCentered(ArcWardenMoreDefenceBase.font, x, y - 60, `[Defence base] ${ArcWardenMoreDefenceBase.sides[ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefCombo]}`);
            if (ArcWardenMoreDefenceBase.ArcWardenMoreBaseDefSpamSpark) {
                Renderer.DrawTextCentered(ArcWardenMoreDefenceBase.font, x, y - 50, `+SpamSpark`);
            }
        }
        if (ArcWardenMoreDefenceBase.bindStatusThrone) {
            Renderer.DrawTextCentered(ArcWardenMoreDefenceBase.font, x, y - 70, `[Defence Throne]`);
        }
    }
};
arcWardenMoreDefenceBase.OnUpdate = () => {
    let i = ArcWardenMoreDefenceBase;
    if (i.gameStart && i.ArcWardenMoreBaseDef) {
        if (Menu.IsKeyDownOnce(i.keybindHandle)) {
            if (i.bindStatus) {
                i.bindStatus = false;
                i.BetaSpamSpark = 0;
            }
            else
                i.bindStatus = true;
        }
        else if (Menu.IsKeyDownOnce(i.keybindHandleThrone)) {
            if (i.bindStatusThrone) {
                i.bindStatusThrone = false;
            }
            else
                i.bindStatusThrone = true;
        }
    }
    // Функция дефа (Магнетик, спарки(если вкл), клон) [code: MSC]
    if (i.gameStart && i.ArcWardenMoreBaseDef && i.bindStatus && !i.bindStatusThrone) {
        if (i.sides[i.ArcWardenMoreBaseDefCombo] === 'T3 - Mid') {
            let magneticfieldspell = i.myHero.GetAbilityByIndex(1);
            let createclone = i.myHero.GetAbility('arc_warden_tempest_double');
            let leftTime;
            if (!i.FieldMap) {
                if (!magneticfieldspell.GetCooldown()) {
                    if (i.myHero.GetMana() > magneticfieldspell.GetManaCost()) {
                        magneticfieldspell.CastPosition(i.T3MidVector);
                        setTimeout(() => {
                            if (!i.MagneticDetect) {
                                return;
                            }
                            else {
                                i.FieldDuration = magneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                i.FieldTime = GameRules.GetGameTime();
                                i.FieldMap = true;
                                i.MagneticDetect = false;
                                if (i.ArcWardenMoreBaseDefSpamSpark)
                                    i.BetaSpamSpark = 1;
                            }
                        }, 100);
                    }
                }
            }
            else {
                if (i.myClone) {
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.3); //Клон уже призван, убираем задержку призыва клона
                }
                else
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.65 - 0.3); //Клона нет, добавляем задержку на его появление
                if (leftTime > i.FieldDuration) {
                    if (i.myClone === null) {
                        createclone.CastNoTarget();
                        setTimeout(() => {
                            let clone = i.myClone.GetAbilityByIndex(1);
                            clone.CastPosition(i.T3MidVector);
                        }, 500);
                        i.FieldMap = false;
                    }
                    else {
                        let Clonemagneticfieldspell = i.myClone.GetAbilityByIndex(1);
                        if (!Clonemagneticfieldspell.GetCooldown()) {
                            if (i.myClone.GetMana() > Clonemagneticfieldspell.GetManaCost()) {
                                Clonemagneticfieldspell.CastPosition(i.T3MidVector);
                                setTimeout(() => {
                                    if (!i.MagneticDetect) {
                                        return;
                                    }
                                    else {
                                        i.FieldDuration = Clonemagneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                        i.FieldTime = GameRules.GetGameTime();
                                        i.FieldMap = false;
                                        i.MagneticDetect = false;
                                    }
                                }, 100);
                            }
                        }
                    }
                }
            }
        }
        if (i.sides[i.ArcWardenMoreBaseDefCombo] === 'T3 - Top') {
            let magneticfieldspell = i.myHero.GetAbilityByIndex(1);
            let createclone = i.myHero.GetAbility('arc_warden_tempest_double');
            let leftTime;
            if (!i.FieldMap) {
                if (!magneticfieldspell.GetCooldown()) {
                    if (i.myHero.GetMana() > magneticfieldspell.GetManaCost()) {
                        magneticfieldspell.CastPosition(i.T3TopVector);
                        setTimeout(() => {
                            if (!i.MagneticDetect) {
                                return;
                            }
                            else {
                                i.FieldDuration = magneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                i.FieldTime = GameRules.GetGameTime();
                                i.FieldMap = true;
                                i.MagneticDetect = false;
                                if (i.ArcWardenMoreBaseDefSpamSpark)
                                    i.BetaSpamSpark = 2;
                            }
                        }, 100);
                    }
                }
            }
            else {
                if (i.myClone) {
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.3); //Клон уже призван, убираем задержку призыва клона
                }
                else
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.65 - 0.3); //Клона нет, добавляем задержку на его появление
                if (leftTime > i.FieldDuration) {
                    if (i.myClone === null) {
                        createclone.CastNoTarget();
                        setTimeout(() => {
                            let clone = i.myClone.GetAbilityByIndex(1);
                            clone.CastPosition(i.T3TopVector);
                        }, 500);
                        i.FieldMap = false;
                    }
                    else {
                        let Clonemagneticfieldspell = i.myClone.GetAbilityByIndex(1);
                        if (!Clonemagneticfieldspell.GetCooldown()) {
                            if (i.myClone.GetMana() > Clonemagneticfieldspell.GetManaCost()) {
                                Clonemagneticfieldspell.CastPosition(i.T3TopVector);
                                setTimeout(() => {
                                    if (!i.MagneticDetect) {
                                        return;
                                    }
                                    else {
                                        i.FieldDuration = Clonemagneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                        i.FieldTime = GameRules.GetGameTime();
                                        i.FieldMap = false;
                                        i.MagneticDetect = false;
                                    }
                                }, 100);
                            }
                        }
                    }
                }
            }
        }
        if (i.sides[i.ArcWardenMoreBaseDefCombo] === 'T3 - Bot') {
            let magneticfieldspell = i.myHero.GetAbilityByIndex(1);
            let createclone = i.myHero.GetAbility('arc_warden_tempest_double');
            let leftTime;
            if (!i.FieldMap) {
                if (!magneticfieldspell.GetCooldown()) {
                    if (i.myHero.GetMana() > magneticfieldspell.GetManaCost()) {
                        magneticfieldspell.CastPosition(i.T3BotVector);
                        setTimeout(() => {
                            if (!i.MagneticDetect) {
                                return;
                            }
                            else {
                                i.FieldDuration = magneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                i.FieldTime = GameRules.GetGameTime();
                                i.FieldMap = true;
                                i.MagneticDetect = false;
                                if (i.ArcWardenMoreBaseDefSpamSpark)
                                    i.BetaSpamSpark = 3;
                            }
                        }, 100);
                    }
                }
            }
            else {
                if (i.myClone) {
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.3); //Клон уже призван, убираем задержку призыва клона
                }
                else
                    leftTime = GameRules.GetGameTime() - (i.FieldTime - 0.65 - 0.3); //Клона нет, добавляем задержку на его появление
                if (leftTime > i.FieldDuration) {
                    if (i.myClone === null) {
                        createclone.CastNoTarget();
                        setTimeout(() => {
                            let clone = i.myClone.GetAbilityByIndex(1);
                            clone.CastPosition(i.T3BotVector);
                        }, 500);
                        i.FieldMap = false;
                    }
                    else {
                        let Clonemagneticfieldspell = i.myClone.GetAbilityByIndex(1);
                        if (!Clonemagneticfieldspell.GetCooldown()) {
                            if (i.myClone.GetMana() > Clonemagneticfieldspell.GetManaCost()) {
                                Clonemagneticfieldspell.CastPosition(i.T3BotVector);
                                setTimeout(() => {
                                    if (!i.MagneticDetect) {
                                        return;
                                    }
                                    else {
                                        i.FieldDuration = Clonemagneticfieldspell.GetLevelSpecialValueForFloat("duration");
                                        i.FieldTime = GameRules.GetGameTime();
                                        i.FieldMap = false;
                                        i.MagneticDetect = false;
                                    }
                                }, 100);
                            }
                        }
                    }
                }
            }
        }
    }
    // Спам Спарков [code: SS]
    if (i.ArcWardenMoreBaseDefSpamSpark && i.bindStatus && !i.bindStatusThrone) {
        if (i.BetaSpamSpark === 1) {
            let spark = i.myHero.GetAbilityByIndex(2);
            if (!spark.GetCooldown()) {
                if (i.myHero.GetMana() > spark.GetManaCost()) {
                    spark.CastPosition(i.T3MidVector);
                }
            }
            if (i.myClone !== null) {
                setTimeout(() => {
                    let sparkClone = i.myClone.GetAbilityByIndex(2);
                    if (!spark.GetCooldown()) {
                        if (i.myClone.GetMana() > spark.GetManaCost()) {
                            sparkClone.CastPosition(i.T3MidVector);
                        }
                    }
                }, 500);
            }
        }
        else if (i.BetaSpamSpark === 2) {
            let spark = i.myHero.GetAbilityByIndex(2);
            if (!spark.GetCooldown()) {
                if (i.myHero.GetMana() > spark.GetManaCost()) {
                    spark.CastPosition(i.T3TopVector);
                }
            }
            if (i.myClone !== null) {
                setTimeout(() => {
                    let sparkClone = i.myClone.GetAbilityByIndex(2);
                    if (!spark.GetCooldown()) {
                        if (i.myClone.GetMana() > spark.GetManaCost()) {
                            sparkClone.CastPosition(i.T3TopVector);
                        }
                    }
                }, 500);
            }
        }
        else if (i.BetaSpamSpark === 3) {
            let spark = i.myHero.GetAbilityByIndex(2);
            if (!spark.GetCooldown()) {
                if (i.myHero.GetMana() > spark.GetManaCost()) {
                    spark.CastPosition(i.T3BotVector);
                }
            }
            if (i.myClone !== null) {
                setTimeout(() => {
                    let sparkClone = i.myClone.GetAbilityByIndex(2);
                    if (!sparkClone.GetCooldown()) {
                        if (i.myClone.GetMana() > sparkClone.GetManaCost()) {
                            sparkClone.CastPosition(i.T3BotVector);
                        }
                    }
                }, 500);
            }
        }
    }
    // Деф трона [code: DT]
    if (i.bindStatusThrone && i.gameStart && !i.bindStatus) {
        let magneticfieldspellThrone = i.myHero.GetAbilityByIndex(1);
        let createcloneThrone = i.myHero.GetAbility('arc_warden_tempest_double');
        let leftTime;
        if (!i.FieldMapThrone) {
            if (!magneticfieldspellThrone.GetCooldown()) {
                if (i.myHero.GetMana() > magneticfieldspellThrone.GetManaCost()) {
                    magneticfieldspellThrone.CastPosition(i.ThroneVector);
                    setTimeout(() => {
                        if (!i.MagneticDetectThrone) {
                            return;
                        }
                        else {
                            i.FieldDurationThrone = magneticfieldspellThrone.GetLevelSpecialValueForFloat("duration");
                            i.FieldTimeThrone = GameRules.GetGameTime();
                            i.FieldMapThrone = true;
                            i.MagneticDetectThrone = false;
                        }
                    }, 100);
                }
            }
        }
        else {
            if (i.myClone) {
                leftTime = GameRules.GetGameTime() - (i.FieldTimeThrone - 0.3); //Клон уже призван, убираем задержку призыва клона
            }
            else
                leftTime = GameRules.GetGameTime() - (i.FieldTimeThrone - 0.65 - 0.3); //Клона нет, добавляем задержку на его появление
            if (leftTime > i.FieldDurationThrone) {
                if (i.myClone === null) {
                    createcloneThrone.CastNoTarget();
                    setTimeout(() => {
                        let clone = i.myClone.GetAbilityByIndex(1);
                        clone.CastPosition(i.ThroneVector);
                    }, 500);
                    i.FieldMapThrone = false;
                }
                else {
                    let ClonemagneticfieldspellThrone = i.myClone.GetAbilityByIndex(1);
                    if (!ClonemagneticfieldspellThrone.GetCooldown()) {
                        if (i.myClone.GetMana() > ClonemagneticfieldspellThrone.GetManaCost()) {
                            ClonemagneticfieldspellThrone.CastPosition(i.ThroneVector);
                            setTimeout(() => {
                                if (!i.MagneticDetectThrone) {
                                    return;
                                }
                                else {
                                    i.FieldDuration = ClonemagneticfieldspellThrone.GetLevelSpecialValueForFloat("duration");
                                    i.FieldTime = GameRules.GetGameTime();
                                    i.FieldMapThrone = false;
                                    i.MagneticDetectThrone = false;
                                }
                            }, 100);
                        }
                    }
                }
            }
        }
    }
};
arcWardenMoreDefenceBase.OnModifierCreate = (entity) => {
    let i = ArcWardenMoreDefenceBase;
    // @ts-ignore
    if (entity.GetClassName() === 'CDOTA_Unit_Hero_ArcWarden' && entity !== i.myHero && entity.HasModifier('modifier_arc_warden_tempest_double') && (!i.myClone || !i.myClone.IsEntity() || !i.myClone.IsAlive())) {
        i.myClone = entity;
    }
};
arcWardenMoreDefenceBase.OnModifierDestroy = (entity) => {
    let i = ArcWardenMoreDefenceBase;
    // @ts-ignore
    if (entity.GetClassName() === 'CDOTA_Unit_Hero_ArcWarden' && entity !== i.myHero && entity.HasModifier('modifier_arc_warden_tempest_double') && (!i.myClone || !i.myClone.IsEntity() || !i.myClone.IsAlive())) {
        i.myClone = null;
    }
};
arcWardenMoreDefenceBase.OnParticleCreate = (particle) => {
    if (ArcWardenMoreDefenceBase.ArcWardenMoreBaseDef && ArcWardenMoreDefenceBase.gameStart) {
        if (ArcWardenMoreDefenceBase.bindStatus) {
            if (particle.fullName === 'particles/units/heroes/hero_arc_warden/arc_warden_magnetic.vpcf') {
                ArcWardenMoreDefenceBase.MagneticDetect = true;
            }
        }
        else if (ArcWardenMoreDefenceBase.bindStatusThrone) {
            if (particle.fullName === 'particles/units/heroes/hero_arc_warden/arc_warden_magnetic.vpcf') {
                ArcWardenMoreDefenceBase.MagneticDetectThrone = true;
            }
        }
    }
};
arcWardenMoreDefenceBase.OnGameEnd = () => {
    ArcWardenMoreDefenceBase.gameStart = false;
};
arcWardenMoreDefenceBase.OnScriptLoad = arcWardenMoreDefenceBase.OnGameStart = ArcWardenMoreDefenceBase.Load.Init;
ArcWardenMoreDefenceBase.bindStatus = false;
ArcWardenMoreDefenceBase.bindStatusThrone = false;
RegisterScript(arcWardenMoreDefenceBase);


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/ArcWardenMoreDefenceBase.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MayTo\AppData\Roaming\Minority\scripts\src\ArcWardenMoreDefenceBase.ts */"./src/ArcWardenMoreDefenceBase.ts");


/***/ })

/******/ });
