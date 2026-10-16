function slope(p1, p2) {
    return (p2[1] - p1[1]) / (p2[0] - p1[0])
}

function midpoint(p1, p2) {
    const x =  (p1[0] + p2[0]) / 2
    const y = (p1[1] + p2[1]) / 2
    return [x,y]
}

function systemsSolver(x1, y1, x1y1, x2, y2, x2y2) {
    const firstY1 = y1 * x2;
    const firstx1y1 = x1y1 * x2;
    const firstY2 = y2 * x1;
    const firstx2y2 = x2y2 * x1;
    
    const YAnswer = (firstx1y1 - firstx2y2) / (firstY1 - firstY2);
    const XAnswer = [x1y1 - (y1 * YAnswer)] / x1;

    return [XAnswer, YAnswer]
}

function twoSidesStraight(usableSlopes) {
    let usableSlope1 = usableSlopes[0];
    let usableSlope2 = usableSlopes[1];
    let midpoint1;
    let midpoint2;
    let eqs = new Array();
    let y_position;
    let x_position;
    midpoint1 = midpoint(usableSlope1[1], usableSlope1[2])
    midpoint2 = midpoint(usableSlope2[1], usableSlope2[2])
    eqs.push([usableSlope1[0], midpoint1], [usableSlope2[0], midpoint2])

    if (Math.abs(eqs[0][0]) === Infinity) {
        y_position = eqs[0][1][1];
    } else if (eqs[0][0] == 0) {
        x_position = eqs[0][1][0];
    }

    if (Math.abs(eqs[1][0]) === Infinity) {
        y_position = eqs[1][1][1];
    } else if (eqs[1][0] == 0) {
        x_position = eqs[1][1][0];
    }
    return [x_position, y_position]
}