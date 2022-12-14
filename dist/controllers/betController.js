var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as betRepository from '../repository/betRepository.js';
function getBets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, betRepository.listBets(res.locals.userId)];
                case 1:
                    result = _a.sent();
                    if (!result.rows[0]) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [2 /*return*/, res.status(200).send({
                            bets: result.rows
                        })];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.sendStatus(500)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function createBets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, _a, gameId, bet, userCheck, gameCheck, bets, alreadyBet, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = req.params.userId;
                    _a = req.body, gameId = _a.gameId, bet = _a.bet;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, betRepository.checkUser(Number(userId))];
                case 2:
                    userCheck = _b.sent();
                    if (!userCheck.rows[0]) {
                        return [2 /*return*/, res.sendStatus(401)];
                    }
                    return [4 /*yield*/, betRepository.checkGame(gameId)];
                case 3:
                    gameCheck = _b.sent();
                    if (!gameCheck.rows[0]) {
                        return [2 /*return*/, res.status(404).send('The game was not found')];
                    }
                    if (gameCheck.rows[0].status === 'closed') {
                        return [2 /*return*/, res.status(401).send('Bets have already been settled for this game')];
                    }
                    return [4 /*yield*/, betRepository.listBets(Number(userId))];
                case 4:
                    bets = _b.sent();
                    alreadyBet = bets.rows.find(function (element) { return element.gameId === gameId; });
                    if (alreadyBet) {
                        return [2 /*return*/, res.status(409).send('You already bet on this game')];
                    }
                    return [4 /*yield*/, betRepository.insertBet(Number(userId), gameId, bet)];
                case 5:
                    _b.sent();
                    return [2 /*return*/, res.status(201).send('Good luck')];
                case 6:
                    error_2 = _b.sent();
                    console.log(error_2);
                    return [2 /*return*/, res.sendStatus(500)];
                case 7: return [2 /*return*/];
            }
        });
    });
}
;
function updateBets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var betId, bet, betCheck, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    betId = req.params.betId;
                    bet = req.body.bet;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, betRepository.checkBet(Number(betId))];
                case 2:
                    betCheck = _a.sent();
                    if (!betCheck.rows[0]) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [4 /*yield*/, betRepository.updateBet(Number(betId), bet)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send('Bet updated')];
                case 4:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [2 /*return*/, res.sendStatus(500)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
function deleteBets(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var betId, betCheck, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    betId = req.params.betId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, betRepository.checkBet(Number(betId))];
                case 2:
                    betCheck = _a.sent();
                    if (!betCheck.rows[0]) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [4 /*yield*/, betRepository.deleteBet(Number(betId))];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send('Bet deleted')];
                case 4:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [2 /*return*/, res.sendStatus(500)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
function betStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var list, gameList_1, hits, numberHits, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, betRepository.listBets(res.locals.userId)];
                case 1:
                    list = _a.sent();
                    if (!list.rows[0]) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [4 /*yield*/, betRepository.listClosedGames()];
                case 2:
                    gameList_1 = _a.sent();
                    hits = list.rows.filter(function (element) {
                        for (var i = 0; i < gameList_1.rows.length; i++) {
                            if (element.gameId === gameList_1.rows[i].id) {
                                if (element.bet === gameList_1.rows[i].scoreBoard) {
                                    return element;
                                }
                            }
                        }
                    });
                    numberHits = hits.length;
                    if (numberHits === 0) {
                        return [2 /*return*/, res.status(200).send('You didn??t hit any bets')];
                    }
                    return [4 /*yield*/, betRepository.updateUserHits(numberHits, res.locals.userId)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send("You hit ".concat(numberHits, " bets"))];
                case 4:
                    error_5 = _a.sent();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
export { getBets, createBets, updateBets, deleteBets, betStatus };
