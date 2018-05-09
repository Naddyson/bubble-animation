import $ from 'jquery'

export function getPositions(box) {
    var $box = $(box);
    var pos = $box.position();
    console.log(pos)
    var width = $box.width();
    var height = $box.height();
    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

export function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

export function checkCollision( a, b ){
    console.log(a)
    var pos = getPositions(a);

    var pos2 = getPositions(b);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);
    var match = horizontalMatch && verticalMatch;
    if (match) { console.log('match'); return true }
    else return false;
}
