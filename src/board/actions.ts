import {ActionType, createStandardAction} from "typesafe-actions";

export const clickSquare = createStandardAction('square/CLICK').map((i: number) => ({
        payload: {
            i,
            value: "X",
        },
    }));

export type BoardActions = ActionType<typeof clickSquare>
