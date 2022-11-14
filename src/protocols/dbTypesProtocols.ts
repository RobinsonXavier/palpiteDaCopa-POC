
export type dataBaseQueryGames = {
    id: number,
    name: string,
    status: string,
    scoreBoard: string,
    gameTime: string,
};

export type dataBaseQuerySessions = {
    id: number,
    userId: number,
    token: string,
    lastStatus: number,
};

export type dataBaseQueryBets = {
    id?: number,
    userId: number,
    gameId: number,
    bet: string,
};