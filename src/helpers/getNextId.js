export const getNextId = obj =>
    Math.max.apply(Math, obj.map(o => o.id)) + 1;