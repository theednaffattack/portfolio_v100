import fse, { copy } from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export async function asyncWrapper(fn: (...arg) => Promise<any>, args = null) {
    if (args) {
        try {
            const data = await fn(args);
            return [null, data];
        } catch (error) {
            return [error, null];
        }
    } else {
        try {
            const data = await fn();
            return [null, data];
        } catch (error) {
            return [error, null];
        }
    }
}

type TupleType = [null, any] | [any, null];

export async function asyncWrapperV2<
    F extends (...args: any[]) => Promise<any>
>(fn: F, ...args: any[]): Promise<TupleType> {
    try {
        const data = await fn(...args);
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

async function fakeFunc() {
    const [error, data] = await asyncWrapperV2(fse.readdir, "dist");
    const what = await wrapErrors(fse.readdir, "dist");
}

// Below adapted from: https://www.typescriptlang.org/play?#code/C4TwDgpgBAggziAdgYwGIFcUB4AqUIAewEiAJnFAIaIgDaAugDRQCqAfFALxQAUAdAMoAnAOZwAXFBwBKLhwAKQgPYBbAJZwIWdgCgdAM0zJgapYigB3IZTABRIcqFxc+IiXJUaDZux6GUkvBIaEa4PmzSkvyCohJSspwKyuqa2lAAPlAAbkpqpBwA3jpQUEIQwOhC5v7GpojRfMJikjJQRSUlZRVVUDUNTXDSfMiUwMgAFjw8CYVQAEQA8uNQiEoQc1AAvtIA3MVbOptAA

type AsyncFunc<T extends any[], U> = (...args: T) => Promise<U>;

function wrapErrors<T extends any[], U>(
    func: AsyncFunc<T, U>,
    fnArgs: T
): (...args: T) => Promise<U | void> {
    return function (...args: T) {
        return func(...args).catch(() => {
            "Oh noe";
        });
    };
}
