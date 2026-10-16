function sendCoordinates() {
    const x1 = Number(document.getElementById("x1").value);
    const y1 = Number(document.getElementById("y1").value);
    const x2 = Number(document.getElementById("x2").value);
    const y2 = Number(document.getElementById("y2").value);
    const x3 = Number(document.getElementById("x3").value);
    const y3 = Number(document.getElementById("y3").value);

    if (document.getElementById("RegressionChoose").value == "centroid") {
        const centroidValue = TriangleConcurrency.Centroid([x1, y1], [x2, y2], [x3, y3]);
        document.getElementById("pointsIdentity").textContent = `[${centroidValue}]`;         
    } else if (document.getElementById("RegressionChoose").value == "circumcenter") {
        const circumcenterValue = TriangleConcurrency.Circumcenter([x1, y1], [x2, y2], [x3, y3]);
        document.getElementById("pointsIdentity").textContent = `[${circumcenterValue}]`;        
    } else {
        console.log('Error! ')
    }

}