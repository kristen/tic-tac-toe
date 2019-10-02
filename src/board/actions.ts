import {ActionType, createStandardAction} from "typesafe-actions";

export const clickSquare = createStandardAction('square/CLICK').map((i: number, xIsNext: boolean) => ({
        payload: {
            i,
            xIsNext,
        },
    }));

export type BoardActions = ActionType<typeof clickSquare>
