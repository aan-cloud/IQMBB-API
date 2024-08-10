import operatorService from "@/services/operatorServices";

const operator = new operatorService();

export function getAllOperators(c: any) {
    return c.json(operator.getAllOperator())
}