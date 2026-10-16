class TriangleConcurrency {
    static Centroid(p1, p2, p3) {
        const p1x = p1[0]
        const p1y = p1[1]
        const p2x = p2[0]
        const p2y = p2[1]
        const p3x = p3[0]
        const p3y = p3[1]

        const centroidCalculated = [((p1x + p2x + p3x) / 3), ((p1y + p2y + p3y) / 3)]
        return centroidCalculated;
    }


    static Circumcenter(p1, p2, p3) {
        const p1x = p1[0]
        const p1y = p1[1]
        const p2x = p2[0]
        const p2y = p2[1]
        const p3x = p3[0]
        const p3y = p3[1]

        let slope1 = slope([p1x, p1y], [p2x, p2y])
        let slope2 = slope([p1x, p1y], [p3x, p3y])
        let slope3 = slope([p3x, p3y], [p2x, p2y])

        const potentialNormalSlopes =  [[[slope1], [p1x, p1y], [p2x, p2y]], [[slope2], [p1x, p1y], [p3x, p3y]], [[slope3], [p3x, p3y], [p2x, p2y]]];
        let usableSlopes = new Array();
        const randomInt1 = Math.floor(Math.random()*3)
        usableSlopes.push(potentialNormalSlopes[randomInt1])
        potentialNormalSlopes.splice(randomInt1, 1)
        const randomInt2 = Math.floor(Math.random()*2)
        usableSlopes.push(potentialNormalSlopes[randomInt2])
        potentialNormalSlopes.splice(randomInt2, 1)

        let usableSlope1 = usableSlopes[0];
        let usableSlope2 = usableSlopes[1];
        let midpoint1;
        let midpoint2;
        let eqs = new Array();
        let systemsEQ = new Array();
        let answer;
        let y_position;
        let x_position;

        if (((usableSlope1[0] > 0 || usableSlope1[0] < 0) && Math.abs(usableSlope1[0]) !== Infinity) && ((usableSlope2[0] > 0 || usableSlope2[0] < 0) && Math.abs(usableSlope2[0]) !== Infinity)) {
            midpoint1 = midpoint(usableSlope1[1], usableSlope1[2])
            midpoint2 = midpoint(usableSlope2[1], usableSlope2[2])
            eqs.push([usableSlope1[0], midpoint1], [usableSlope2[0], midpoint2])

            for (let i = 0; i < eqs.length; i++) {
                systemsEQ.push([-1 * (-1 / eqs[i][0]), 1, (eqs[i][1][1] - (-1 / eqs[i][0]) * eqs[i][1][0])])
            }
            answer = systemsSolver(systemsEQ[0][0], systemsEQ[0][1], systemsEQ[0][2], systemsEQ[1][0], systemsEQ[1][1], systemsEQ[1][2])
        } else if ((usableSlope1[0] == 0 || Math.abs(usableSlope1[0]) === Infinity) && (usableSlope2[0] == 0 || Math.abs(usableSlope2[0]) === Infinity)) {
            answer = twoSidesStraight(usableSlopes);
        }
        return answer;
    }
}