(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-live-stream-live-stream-module~pages-live-streaming-l~872d64db"],{

/***/ "./src/app/pages/nutrition/nutrition-calculator.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition-calculator.ts ***!
  \*********************************************************/
/*! exports provided: NutritionCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionCalculator", function() { return NutritionCalculator; });
/* harmony import */ var _nutrition_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nutrition-values */ "./src/app/pages/nutrition/nutrition-values.ts");
/* harmony import */ var _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/onboarding/onboarding.service */ "./src/app/services/onboarding/onboarding.service.ts");


var NutritionCalculator = /** @class */ (function () {
    function NutritionCalculator(transphormer, weight, numberOfMeals) {
        if (numberOfMeals === void 0) { numberOfMeals = null; }
        this.transphormer = transphormer;
        this.weight = weight;
        this.numberOfMeals = numberOfMeals;
        this.index = [];
        this.sex = this.transphormer.sex === _services_onboarding_onboarding_service__WEBPACK_IMPORTED_MODULE_1__["Sex"].Male ? 'male' : 'female';
        var baseProfile = this.getBaseProfile(this.sex, this.weight);
        this.userProfile = this.getModifiedProfile(baseProfile, this.transphormer.transphormation_goal, this.sex);
        for (var type in _nutrition_values__WEBPACK_IMPORTED_MODULE_0__["choices"]) {
            if (_nutrition_values__WEBPACK_IMPORTED_MODULE_0__["choices"][type] instanceof Array) {
                this.index[type] = _nutrition_values__WEBPACK_IMPORTED_MODULE_0__["choices"][type].map(function (i) {
                    return i.name;
                });
            }
        }
    }
    NutritionCalculator.prototype.getModifiedProfile = function (base, goal, sex) {
        if (goal === 'Primarily lose bodyfat') {
            return Math.max(0, base - 1);
        }
        else if (goal === 'Gain lean muscle') {
            var maxColumn = (sex === 'male' ? NutritionCalculator.MAX_MALE_PROFILE : NutritionCalculator.MAX_FEMALE_PROFILE);
            return Math.min(maxColumn, base + 1);
        }
        return base;
    };
    NutritionCalculator.prototype.getBaseProfile = function (sex, weight) {
        if (sex === 'male') {
            if (weight >= 260) {
                return 6;
            }
            else if (weight >= 220) {
                return 5;
            }
            else if (weight >= 200) {
                return 4;
            }
            else if (weight >= 185) {
                return 3;
            }
            else if (weight >= 160) {
                return 2;
            }
            else if (weight >= 145) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            if (weight >= 200) {
                return 7;
            }
            else if (weight >= 180) {
                return 6;
            }
            else if (weight >= 160) {
                return 5;
            }
            else if (weight >= 150) {
                return 4;
            }
            else if (weight >= 140) {
                return 3;
            }
            else if (weight >= 130) {
                return 2;
            }
            else if (weight >= 120) {
                return 1;
            }
            else {
                return 0;
            }
        }
    };
    NutritionCalculator.prototype.getMacros = function () {
        var userMacros = _nutrition_values__WEBPACK_IMPORTED_MODULE_0__["macros"][this.sex][this.userProfile];
        userMacros.percentProtein = Math.round(((userMacros.protein * 4) / userMacros.calories) * 100);
        userMacros.percentCarbs = Math.round(((userMacros.carbs * 4) / userMacros.calories) * 100);
        userMacros.percentFats = Math.round(((userMacros.fats * 9) / userMacros.calories) * 100);
        var totalPercents = userMacros.percentProtein + userMacros.percentCarbs + userMacros.percentFats;
        if (totalPercents !== 100) {
            userMacros.percentProtein += 100 - totalPercents;
        }
        return userMacros;
    };
    NutritionCalculator.prototype.nutritionValue = function (category, name) {
        var data = _nutrition_values__WEBPACK_IMPORTED_MODULE_0__["values"][this.numberOfMeals][this.sex][category];
        var itemNo = this.index[category].findIndex(function (item) {
            return item === name;
        });
        return data[itemNo][this.userProfile];
    };
    NutritionCalculator.MAX_MALE_PROFILE = 6;
    NutritionCalculator.MAX_FEMALE_PROFILE = 7;
    return NutritionCalculator;
}());



/***/ }),

/***/ "./src/app/pages/nutrition/nutrition-values.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/nutrition/nutrition-values.ts ***!
  \*****************************************************/
/*! exports provided: values, choices, macros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choices", function() { return choices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
var choices = {
    protein: [
        { name: '90%+ Lean Ground Beef', unit: 'grams' },
        { name: 'Round Steak', unit: 'grams' },
        { name: 'Sirloin', unit: 'grams' },
        { name: 'Boneless Chicken Breast', unit: 'grams' },
        { name: 'Chicken Tenderloin', unit: 'grams' },
        { name: 'Large Egg whites', unit: 'count' },
        { name: 'Boneless Turkey Breast', unit: 'grams' },
        { name: '99% lean Ground Turkey', unit: 'grams' },
        { name: 'Level-1', unit: 'scoop' },
        { name: 'Cod', unit: 'grams' },
        { name: 'Tilapia', unit: 'grams' },
        { name: 'Haddock', unit: 'grams' },
        { name: 'Halibut', unit: 'grams' },
        { name: 'Tuna in water drained', unit: 'grams' },
        { name: 'Shrimp', unit: 'grams' },
        { name: '2% Cottage Cheese', unit: 'grams' },
        { name: 'Plain Greek Yogurt', unit: 'grams' },
        { name: 'Pork Tenderloin', unit: 'grams' },
        { name: 'Pork Chop', unit: 'grams' },
        { name: 'Bison', unit: 'grams' }
    ],
    carb: [
        { name: 'Quick Oats Dry', unit: 'grams' },
        { name: 'Brown Rice', unit: 'grams' },
        { name: 'White Rice', unit: 'grams' },
        { name: 'Wild Rice', unit: 'grams' },
        { name: 'Quinoa', unit: 'grams' },
        { name: 'Pasta', unit: 'grams' },
        { name: 'Whole Wheat Pasta', unit: 'grams' },
        { name: 'Whole Wheat bread', unit: 'slice' },
        { name: 'Strawberries', unit: 'grams' },
        { name: 'Blueberries', unit: 'grams' },
        { name: 'Raspberries', unit: 'grams' },
        { name: 'Apple (medium)', unit: 'count' },
        { name: 'Banana', unit: 'count' },
        { name: 'Rice Cake', unit: 'count' },
        { name: 'Sweet Potato baked', unit: 'grams' },
        { name: 'Red Potato', unit: 'grams' },
        { name: 'White Potato', unit: 'grams' },
        { name: 'Cream of wheat', unit: 'grams' },
        { name: 'Grits', unit: 'grams' },
        { name: 'Baked Tostitos', unit: 'grams' },
        { name: 'Baked Lays', unit: 'grams' },
        { name: 'Chex Cereal', unit: 'grams' },
        { name: 'Cheerios', unit: 'grams' },
        { name: 'Low Fat Ice Cream', unit: 'grams' },
        { name: 'Pancake Mix', unit: 'grams' },
        { name: 'Frozen Hashbrowns', unit: 'grams' },
        { name: 'Pretzels', unit: 'grams' },
        { name: 'Saltine Crackers', unit: 'grams' },
        { name: 'Sweet Peas (canned)', unit: 'grams' },
        { name: 'Triscuts (low fat)', unit: 'grams' },
        { name: 'Corn', unit: 'grams' },
        { name: 'Sherbet', unit: 'grams' }
    ],
    veggie: [
        { name: 'Green Beans', unit: 'grams' },
        { name: 'Broccoli', unit: 'grams' },
        { name: 'Asparagus', unit: 'grams' },
        { name: 'Peppers', unit: 'grams' },
        { name: 'Cauliflower', unit: 'grams' },
        { name: 'Brussel Sprouts', unit: 'grams' },
        { name: 'Kale', unit: 'grams' },
        { name: 'Celery', unit: 'grams' },
        { name: 'Spinach', unit: 'grams' },
        { name: 'Lettuce', unit: 'grams' },
    ],
    supplement: [
        { name: 'Phormula-1', unit: 'Scoop' },
        { name: 'Ignition', unit: 'Scoop' },
    ]
};
var values = {
    3: {
        male: {
            protein: [[165, 177, 188, 200, 212, 237, 237],
                [147, 158, 168, 178, 190, 208, 208],
                [153, 165, 177, 188, 200, 220, 220],
                [218, 233, 248, 265, 280, 310, 310],
                [207, 222, 235, 250, 265, 295, 295],
                [12, 13, 15, 15, 17, 17, 17],
                [153, 165, 177, 188, 200, 220, 220],
                [187, 200, 213, 227, 227, 267, 267],
                [1.5, 2.0, 2.0, 2.0, 2.5, 2.5, 2.5],
                [207, 222, 235, 250, 265, 295, 295],
                [188, 188, 200, 217, 228, 255, 255],
                [192, 205, 220, 233, 248, 275, 275],
                [173, 185, 197, 212, 225, 250, 250],
                [197, 212, 225, 240, 253, 282, 282],
                [222, 238, 253, 270, 287, 318, 318],
                [403, 435, 467, 493, 523, 582, 582],
                [440, 472, 503, 535, 567, 630, 630],
                [165, 177, 188, 200, 212, 237, 237],
                [152, 160, 172, 182, 193, 213, 213],
                [155, 165, 177, 188, 198, 222, 222]],
            carb: [[68, 73, 78, 83, 88, 88, 98],
                [203, 215, 233, 247, 262, 262, 290],
                [163, 175, 187, 198, 210, 210, 230],
                [218, 235, 250, 267, 282, 282, 313],
                [218, 235, 250, 267, 282, 282, 313],
                [152, 162, 172, 183, 195, 195, 217],
                [177, 188, 202, 213, 227, 227, 252],
                [3, 3, 3, 3, 3, 3, 3],
                [608, 652, 695, 738, 782, 782, 868],
                [323, 347, 368, 392, 415, 415, 460],
                [390, 418, 447, 475, 502, 502, 557],
                [2, 2, 3, 3, 3, 3, 3],
                [2, 2, 2, 2, 3, 3, 3],
                [5, 7, 7, 7, 8, 8, 8],
                [225, 242, 258, 273, 290, 290, 322],
                [238, 255, 272, 288, 307, 307, 340],
                [218, 235, 250, 267, 282, 282, 313],
                [65, 70, 75, 80, 85, 85, 93],
                [58, 63, 67, 72, 75, 75, 83],
                [67, 70, 73, 77, 82, 82, 92],
                [67, 70, 73, 77, 82, 82, 92],
                [57, 62, 63, 67, 70, 70, 77],
                [57, 62, 63, 67, 70, 70, 77],
                [140, 150, 155, 167, 177, 177, 200],
                [67, 73, 77, 82, 87, 87, 97],
                [250, 267, 283, 300, 317, 317, 350],
                [60, 63, 68, 73, 77, 77, 83],
                [60, 63, 68, 73, 77, 77, 83],
                [483, 517, 550, 583, 617, 617, 683],
                [58, 65, 70, 73, 77, 77, 83],
                [450, 500, 533, 550, 583, 583, 650],
                [158, 168, 180, 192, 203, 203, 225]],
            veggie: [[128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195]],
            supplement: [[1, 1.25, 1.25, 1.5, 1.5, 1.5, 1.5],
                [.5, .5, .5, .75, .75, .75, .75]]
        },
        female: {
            protein: [
                [142, 153, 165, 177, 177, 177, 177, 177],
                [125, 138, 147, 158, 158, 158, 158, 158],
                [130, 142, 153, 165, 165, 165, 165, 165],
                [187, 203, 218, 233, 233, 233, 233, 233],
                [177, 192, 207, 222, 222, 222, 222, 222],
                [10, 12, 12, 13, 13, 13, 13, 13],
                [130, 142, 153, 165, 165, 165, 165, 165],
                [160, 173, 187, 200, 200, 200, 200, 200],
                [1.5, 1.5, 1.5, 2.0, 2.0, 2.0, 2.0, 2.0],
                [177, 192, 207, 222, 222, 222, 222, 222],
                [153, 165, 188, 188, 188, 188, 188, 188],
                [165, 178, 192, 205, 205, 205, 205, 205],
                [150, 162, 173, 185, 185, 185, 185, 185],
                [170, 183, 197, 212, 212, 212, 212, 212],
                [192, 207, 222, 238, 238, 238, 238, 238],
                [350, 377, 403, 435, 435, 435, 435, 435],
                [378, 410, 440, 472, 472, 472, 472, 472],
                [142, 153, 165, 177, 177, 177, 177, 177],
                [128, 140, 152, 160, 160, 160, 160, 160],
                [133, 143, 155, 165, 165, 165, 165, 165]
            ],
            carb: [
                [42, 47, 52, 57, 62, 72, 73, 76],
                [123, 138, 153, 168, 183, 210, 215, 233],
                [98, 110, 122, 133, 145, 168, 175, 187],
                [133, 148, 163, 180, 195, 227, 235, 250],
                [133, 148, 163, 180, 195, 227, 235, 250],
                [92, 103, 113, 125, 135, 157, 162, 172],
                [107, 120, 132, 145, 157, 182, 188, 202],
                [2, 2, 2, 2, 3, 3, 3, 3],
                [370, 413, 457, 500, 543, 630, 652, 695],
                [195, 218, 242, 265, 288, 335, 347, 368],
                [237, 265, 293, 322, 348, 405, 418, 447],
                [1, 1, 2, 2, 2, 2, 2, 2],
                [1, 2, 2, 2, 2, 2, 2, 2],
                [3, 3, 5, 5, 5, 5, 7, 7],
                [137, 153, 170, 187, 202, 235, 242, 258],
                [145, 162, 178, 195, 212, 247, 255, 272],
                [133, 148, 163, 180, 195, 227, 235, 250],
                [40, 45, 48, 53, 58, 68, 70, 75],
                [35, 40, 43, 48, 52, 60, 63, 67],
                [40, 45, 48, 53, 57, 67, 70, 73],
                [40, 45, 48, 53, 57, 67, 70, 73],
                [33, 38, 42, 45, 50, 60, 62, 63],
                [33, 38, 42, 45, 50, 60, 62, 63],
                [83, 95, 107, 115, 122, 147, 150, 155],
                [42, 47, 52, 57, 60, 70, 73, 77],
                [153, 167, 183, 200, 217, 258, 267, 283],
                [37, 42, 45, 50, 53, 62, 63, 68],
                [37, 42, 45, 50, 53, 62, 63, 68],
                [300, 333, 367, 400, 433, 500, 517, 550],
                [38, 43, 47, 52, 55, 63, 65, 70],
                [283, 317, 350, 383, 417, 483, 500, 533],
                [100, 108, 122, 133, 143, 160, 168, 180]
            ],
            veggie: [
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195]
            ],
            supplement: [
                [1, 1, 1, 1.25, 1.25, 1.25, 1.25, 1.25],
                [.25, .25, .25, .5, 0.5, .5, .5, .5]
            ],
        }
    },
    4: {
        male: {
            protein: [[123.8, 132.5, 141.3, 150.0, 158.8, 177.5, 177.5],
                [110.0, 118.8, 126.3, 133.8, 142.5, 156.3, 156.3],
                [115.0, 123.8, 132.5, 141.3, 150.0, 165.0, 165.0],
                [163.8, 175.0, 186.3, 198.8, 210.0, 232.5, 232.5],
                [155.0, 166.3, 176.3, 187.5, 198.8, 221.3, 221.3],
                [8.8, 10.0, 11.3, 11.3, 12.5, 12.5, 12.5],
                [115.0, 123.8, 132.5, 141.3, 150.0, 165.0, 165.0],
                [140.0, 150.0, 160.0, 170.0, 170.0, 200.0, 200.0],
                [1.3, 1.6, 1.6, 1.6, 1.9, 1.9, 1.9],
                [155.0, 166.3, 176.3, 187.5, 198.8, 221.3, 221.3],
                [141.3, 141.3, 150.0, 162.5, 171.3, 191.3, 191.3],
                [143.8, 153.8, 165.0, 175.0, 186.3, 206.3, 206.3],
                [130.0, 138.8, 147.5, 158.8, 168.8, 187.5, 187.5],
                [147.5, 158.8, 168.8, 180.0, 190.0, 211.3, 211.3],
                [166.3, 178.8, 190.0, 202.5, 215.0, 238.8, 238.8],
                [302.5, 326.3, 350.0, 370.0, 392.5, 436.3, 436.3],
                [330.0, 353.8, 377.5, 401.3, 425.0, 472.5, 472.5],
                [123.8, 132.5, 141.3, 150.0, 158.8, 177.5, 177.5],
                [113.8, 120.0, 128.8, 136.3, 145.0, 160.0, 160.0],
                [116.3, 123.8, 132.5, 141.3, 148.8, 166.3, 166.3]],
            carb: [[51.3, 55.0, 58.8, 62.5, 66.3, 66.3, 73.8],
                [152.5, 161.3, 175.0, 185.0, 196.3, 196.3, 217.5],
                [122.5, 131.3, 140.0, 148.8, 157.5, 157.5, 172.5],
                [163.8, 176.3, 187.5, 200.0, 211.3, 211.3, 235.0],
                [163.8, 176.3, 187.5, 200.0, 211.3, 211.3, 235.0],
                [113.8, 121.3, 128.8, 137.5, 146.3, 146.3, 162.5],
                [132.5, 141.3, 151.3, 160.0, 170.0, 170.0, 188.8],
                [1.9, 1.9, 1.9, 1.9, 2.5, 2.5, 2.5],
                [456.3, 488.8, 521.3, 553.8, 586.3, 586.3, 651.3],
                [242.5, 260.0, 276.3, 293.8, 311.3, 311.3, 345.0],
                [292.5, 313.8, 335.0, 356.3, 376.3, 376.3, 417.5],
                [1.3, 1.3, 1.9, 1.9, 1.9, 1.9, 1.9],
                [1.3, 1.3, 1.3, 1.3, 1.9, 1.9, 1.9],
                [3.8, 5.0, 5.0, 5.0, 6.3, 6.3, 6.3],
                [168.8, 181.3, 193.8, 205.0, 217.5, 217.5, 241.3],
                [178.8, 191.3, 203.8, 216.3, 230.0, 230.0, 255.0],
                [163.8, 176.3, 187.5, 200.0, 211.3, 211.3, 235.0],
                [48.8, 52.5, 56.3, 60.0, 63.8, 63.8, 70.0],
                [43.8, 47.5, 50.0, 53.8, 56.3, 56.3, 62.5],
                [50.0, 52.5, 55.0, 57.5, 61.3, 61.3, 68.8],
                [50.0, 52.5, 55.0, 57.5, 61.3, 61.3, 68.8],
                [42.5, 46.3, 47.5, 50.0, 52.5, 52.5, 57.5],
                [42.5, 46.3, 47.5, 50.0, 52.5, 52.5, 57.5],
                [105.0, 112.5, 116.3, 125.0, 132.5, 132.5, 150.0],
                [50.0, 55.0, 57.5, 61.3, 65.0, 65.0, 72.5],
                [187.5, 200.0, 212.5, 225.0, 237.5, 237.5, 262.5],
                [45.0, 47.5, 51.3, 55.0, 57.5, 57.5, 62.5],
                [45.0, 47.5, 51.3, 55.0, 57.5, 57.5, 62.5],
                [362.5, 387.5, 412.5, 437.5, 462.5, 462.5, 512.5],
                [43.8, 48.8, 52.5, 55.0, 57.5, 57.5, 62.5],
                [337.5, 375.0, 400.0, 412.5, 437.5, 437.5, 487.5],
                [118.8, 126.3, 135.0, 143.8, 152.5, 152.5, 168.8]],
            veggie: [[128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195]],
            supplement: [[1, 1.25, 1.25, 1.5, 1.5, 1.5, 1.5],
                [.5, .5, .5, .75, .75, .75, .75]]
        },
        female: {
            protein: [
                [106.3, 115.0, 123.8, 132.5, 132.5, 132.5, 132.5, 132.5],
                [93.8, 103.8, 110.0, 118.8, 118.8, 118.8, 118.8, 118.8],
                [97.5, 106.3, 115.0, 123.8, 123.8, 123.8, 123.8, 123.8],
                [140.0, 152.5, 163.8, 175.0, 175.0, 175.0, 175.0, 175.0],
                [132.5, 143.8, 155.0, 166.3, 166.3, 166.3, 166.3, 166.3],
                [7.5, 8.8, 8.8, 10.0, 10.0, 10.0, 10.0, 10.0],
                [97.5, 106.3, 115.0, 123.8, 123.8, 123.8, 123.8, 123.8],
                [120.0, 130.0, 140.0, 150.0, 150.0, 150.0, 150.0, 150.0],
                [1.3, 1.3, 1.3, 1.6, 1.6, 1.6, 1.6, 1.6],
                [132.5, 143.8, 155.0, 166.3, 166.3, 166.3, 166.3, 166.3],
                [115.0, 123.8, 141.3, 141.3, 141.3, 141.3, 141.3, 141.3],
                [123.8, 133.8, 143.8, 153.8, 153.8, 153.8, 153.8, 153.8],
                [112.5, 121.3, 130.0, 138.8, 138.8, 138.8, 138.8, 138.8],
                [127.5, 137.5, 147.5, 158.8, 158.8, 158.8, 158.8, 158.8],
                [143.8, 155.0, 166.3, 178.8, 178.8, 178.8, 178.8, 178.8],
                [262.5, 282.5, 302.5, 326.3, 326.3, 326.3, 326.3, 326.3],
                [283.8, 307.5, 330.0, 353.8, 353.8, 353.8, 353.8, 353.8],
                [106.3, 115.0, 123.8, 132.5, 132.5, 132.5, 132.5, 132.5],
                [96.3, 105.0, 113.8, 120.0, 120.0, 120.0, 120.0, 120.0],
                [100.0, 107.5, 116.3, 123.8, 123.8, 123.8, 123.8, 123.8]
            ],
            carb: [
                [31.3, 35.0, 38.8, 42.5, 46.3, 53.8, 55.0, 58.0],
                [92.5, 103.8, 115.0, 126.3, 137.5, 157.5, 161.3, 175.0],
                [73.8, 82.5, 91.3, 100.0, 108.8, 126.3, 131.3, 140.0],
                [100.0, 111.3, 122.5, 135.0, 146.3, 170.0, 176.3, 187.5],
                [100.0, 111.3, 122.5, 135.0, 146.3, 170.0, 176.3, 187.5],
                [68.8, 77.5, 85.0, 93.8, 101.3, 117.5, 121.3, 128.8],
                [80.0, 90.0, 98.8, 108.8, 117.5, 136.3, 141.3, 151.3],
                [1.3, 1.3, 1.3, 1.3, 1.9, 1.9, 1.9, 1.9],
                [277.5, 310.0, 342.5, 375.0, 407.5, 472.5, 488.8, 521.3],
                [146.3, 163.8, 181.3, 198.8, 216.3, 251.3, 260.0, 276.3],
                [177.5, 198.8, 220.0, 241.3, 261.3, 303.8, 313.8, 335.0],
                [0.6, 0.6, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
                [0.6, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
                [2.5, 2.5, 3.8, 3.8, 3.8, 3.8, 5.0, 5.0],
                [102.5, 115.0, 127.5, 140.0, 151.3, 176.3, 181.3, 193.8],
                [108.8, 121.3, 133.8, 146.3, 158.8, 185.0, 191.3, 203.8],
                [100.0, 111.3, 122.5, 135.0, 146.3, 170.0, 176.3, 187.5],
                [30.0, 33.8, 36.3, 40.0, 43.8, 51.3, 52.5, 56.3],
                [26.3, 30.0, 32.5, 36.3, 38.8, 45.0, 47.5, 50.0],
                [30.0, 33.8, 36.3, 40.0, 42.5, 50.0, 52.5, 55.0],
                [30.0, 33.8, 36.3, 40.0, 42.5, 50.0, 52.5, 55.0],
                [25.0, 28.8, 31.3, 33.8, 37.5, 45.0, 46.3, 47.5],
                [25.0, 28.8, 31.3, 33.8, 37.5, 45.0, 46.3, 47.5],
                [62.5, 71.3, 80.0, 86.3, 91.3, 110.0, 112.5, 116.3],
                [31.3, 35.0, 38.8, 42.5, 45.0, 52.5, 55.0, 57.5],
                [115.0, 125.0, 137.5, 150.0, 162.5, 193.8, 200.0, 212.5],
                [27.5, 31.3, 33.8, 37.5, 40.0, 46.3, 47.5, 51.3],
                [27.5, 31.3, 33.8, 37.5, 40.0, 46.3, 47.5, 51.3],
                [225.0, 250.0, 275.0, 300.0, 325.0, 375.0, 387.5, 412.5],
                [28.8, 32.5, 35.0, 38.8, 41.3, 47.5, 48.8, 52.5],
                [212.5, 237.5, 262.5, 287.5, 312.5, 362.5, 375.0, 400.0],
                [75.0, 81.3, 91.3, 100.0, 107.5, 120.0, 126.3, 135.0]
            ],
            veggie: [
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195]
            ],
            supplement: [
                [1, 1, 1, 1.25, 1.25, 1.25, 1.25, 1.25],
                [.25, .25, .25, .5, 0.5, .5, .5, .5]
            ],
        }
    },
    5: {
        male: {
            protein: [[99, 106, 113, 120, 127, 142, 142],
                [88, 95, 101, 107, 114, 125, 125],
                [92, 99, 106, 113, 120, 132, 132],
                [131, 140, 149, 159, 168, 186, 186],
                [124, 133, 141, 150, 159, 177, 177],
                [7, 8, 9, 9, 10, 10, 10],
                [92, 99, 106, 113, 120, 132, 132],
                [112, 120, 128, 136, 136, 160, 160],
                [1, 1.25, 1.25, 1.25, 1.5, 1.5, 1.5],
                [124, 133, 141, 150, 159, 177, 177],
                [113, 113, 120, 130, 137, 153, 153],
                [115, 123, 132, 140, 149, 165, 165],
                [104, 111, 118, 127, 135, 150, 150],
                [118, 127, 135, 144, 152, 169, 169],
                [133, 143, 152, 162, 172, 191, 191],
                [242, 261, 280, 296, 314, 349, 349],
                [264, 283, 302, 321, 340, 378, 378],
                [99, 106, 113, 120, 127, 142, 142],
                [91, 96, 103, 109, 116, 128, 128],
                [93, 99, 106, 113, 119, 133, 133]],
            carb: [[41, 44, 47, 50, 53, 53, 59],
                [122, 129, 140, 148, 157, 157, 174],
                [98, 105, 112, 119, 126, 126, 138],
                [131, 141, 150, 160, 169, 169, 188],
                [131, 141, 150, 160, 169, 169, 188],
                [91, 97, 103, 110, 117, 117, 130],
                [106, 113, 121, 128, 136, 136, 151],
                [1.5, 1.5, 1.5, 1.5, 2, 2, 2],
                [365, 391, 417, 443, 469, 469, 521],
                [194, 208, 221, 235, 249, 249, 276],
                [234, 251, 268, 285, 301, 301, 334],
                [1, 1, 1.5, 1.5, 1.5, 1.5, 1.5],
                [1, 1, 1, 1, 1.5, 1.5, 1.5],
                [3, 4, 4, 4, 5, 5, 5],
                [135, 145, 155, 164, 174, 174, 193],
                [143, 153, 163, 173, 184, 184, 204],
                [131, 141, 150, 160, 169, 169, 188],
                [39, 42, 45, 48, 51, 51, 56],
                [35, 38, 40, 43, 45, 45, 50],
                [40, 42, 44, 46, 49, 49, 55],
                [40, 42, 44, 46, 49, 49, 55],
                [34, 37, 38, 40, 42, 42, 46],
                [34, 37, 38, 40, 42, 42, 46],
                [84, 90, 93, 100, 106, 106, 120],
                [40, 44, 46, 49, 52, 52, 58],
                [150, 160, 170, 180, 190, 190, 210],
                [36, 38, 41, 44, 46, 46, 50],
                [36, 38, 41, 44, 46, 46, 50],
                [290, 310, 330, 350, 370, 370, 410],
                [35, 39, 42, 44, 46, 46, 50],
                [270, 300, 320, 330, 350, 350, 390],
                [95, 101, 108, 115, 122, 122, 135]],
            veggie: [[128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195],
                [128, 128, 128, 195, 195, 195, 195]],
            supplement: [[1, 1.25, 1.25, 1.5, 1.5, 1.5, 1.5],
                [.5, .5, .5, .75, .75, .75, .75]]
        },
        female: {
            protein: [
                [85, 92, 99, 106, 106, 106, 106, 106],
                [75, 83, 88, 95, 95, 95, 95, 95],
                [78, 85, 92, 99, 99, 99, 99, 99],
                [112, 122, 131, 140, 140, 140, 140, 140],
                [106, 115, 124, 133, 133, 133, 133, 133],
                [6, 7, 7, 8, 8, 8, 8, 8],
                [78, 85, 92, 99, 99, 99, 99, 99],
                [96, 104, 112, 120, 120, 120, 120, 120],
                [1, 1, 1, 1.25, 1.25, 1.25, 1.25, 1.25],
                [106, 115, 124, 133, 133, 133, 133, 133],
                [92, 99, 113, 113, 113, 113, 113, 113],
                [99, 107, 115, 123, 123, 123, 123, 123],
                [90, 97, 104, 111, 111, 111, 111, 111],
                [102, 110, 118, 127, 127, 127, 127, 127],
                [115, 124, 133, 143, 143, 143, 143, 143],
                [210, 226, 242, 261, 261, 261, 261, 261],
                [227, 246, 264, 283, 283, 283, 283, 283],
                [85, 92, 99, 106, 106, 106, 106, 106],
                [77, 84, 91, 96, 96, 96, 96, 96],
                [80, 86, 93, 99, 99, 99, 99, 99]
            ],
            carb: [
                [25, 28, 31, 34, 37, 43, 44, 47],
                [74, 83, 92, 101, 110, 126, 129, 140],
                [59, 66, 73, 80, 87, 101, 105, 112],
                [80, 89, 98, 108, 117, 136, 141, 150],
                [80, 89, 98, 108, 117, 136, 141, 150],
                [55, 62, 68, 75, 81, 94, 97, 103],
                [64, 72, 79, 87, 94, 109, 113, 121],
                [1, 1, 1, 1, 1.5, 1.5, 1.5, 1.5],
                [222, 248, 274, 300, 326, 378, 391, 417],
                [117, 131, 145, 159, 173, 201, 208, 221],
                [142, 159, 176, 193, 209, 243, 251, 268],
                [.5, .5, 1, 1, 1, 1, 1, 1],
                [.5, 1, 1, 1, 1, 1, 1, 1],
                [2, 2, 3, 3, 3, 3, 4, 4],
                [82, 92, 102, 112, 121, 141, 145, 155],
                [87, 97, 107, 117, 127, 148, 153, 163],
                [80, 89, 98, 108, 117, 136, 141, 150],
                [24, 27, 29, 32, 35, 41, 42, 45],
                [21, 24, 26, 29, 31, 36, 38, 40],
                [24, 27, 29, 32, 34, 40, 42, 44],
                [24, 27, 29, 32, 34, 40, 42, 44],
                [20, 23, 25, 27, 30, 36, 37, 38],
                [20, 23, 25, 27, 30, 36, 37, 38],
                [50, 57, 64, 69, 73, 88, 90, 93],
                [25, 28, 31, 34, 36, 42, 44, 46],
                [92, 100, 110, 120, 130, 155, 160, 170],
                [22, 25, 27, 30, 32, 37, 38, 41],
                [22, 25, 27, 30, 32, 37, 38, 41],
                [180, 200, 220, 240, 260, 300, 310, 330],
                [23, 26, 28, 31, 33, 38, 39, 42],
                [170, 190, 210, 230, 250, 290, 300, 320],
                [60, 65, 73, 80, 86, 96, 101, 108]
            ],
            veggie: [
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195],
                [128, 128, 128, 128, 128, 128, 195, 195]
            ],
            supplement: [
                [1, 1, 1, 1.25, 1.25, 1.25, 1.25, 1.25],
                [.25, .25, .25, .5, 0.5, .5, .5, .5]
            ],
        }
    }
};
var macros = {
    male: [
        { calories: 1749, protein: 168, carbs: 168, fats: 45 },
        { calories: 1845, protein: 180, carbs: 180, fats: 45 },
        { calories: 1986, protein: 192, carbs: 192, fats: 50 },
        { calories: 2082, protein: 204, carbs: 204, fats: 50 },
        { calories: 2223, protein: 216, carbs: 216, fats: 55 },
        { calories: 2319, protein: 240, carbs: 216, fats: 55 },
        { calories: 2460, protein: 240, carbs: 240, fats: 60 }
    ],
    female: [
        { calories: 1250, protein: 145, carbs: 100, fats: 30 },
        { calories: 1350, protein: 155, carbs: 115, fats: 30 },
        { calories: 1490, protein: 168, carbs: 126, fats: 35 },
        { calories: 1632, protein: 180, carbs: 138, fats: 40 },
        { calories: 1680, protein: 180, carbs: 150, fats: 40 },
        { calories: 1821, protein: 180, carbs: 174, fats: 45 },
        { calories: 1845, protein: 180, carbs: 180, fats: 45 },
        { calories: 1938, protein: 180, carbs: 192, fats: 50 }
    ]
};



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-live-stream-live-stream-module~pages-live-streaming-l~872d64db.js.map