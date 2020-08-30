function black() {
    Object.values(NOP_VIEWER.impl.matman()._materials)[Object.values(NOP_VIEWER.impl.matman()._materials).length - 2].color = new THREE.Color(0.2, 0.2, 0.2);
    NOP_VIEWER.impl.invalidate(true, true, false);
}

function white() {
    Object.values(NOP_VIEWER.impl.matman()._materials)[Object.values(NOP_VIEWER.impl.matman()._materials).length - 2].color = new THREE.Color(0.98, 0.98, 0.98);
    NOP_VIEWER.impl.invalidate(true, true, false);
}

function yellow() {
    Object.values(NOP_VIEWER.impl.matman()._materials)[Object.values(NOP_VIEWER.impl.matman()._materials).length - 2].color = new THREE.Color(0.98, 0.98, 0);
    NOP_VIEWER.impl.invalidate(true, true, false);
}

function red() {
    Object.values(NOP_VIEWER.impl.matman()._materials)[Object.values(NOP_VIEWER.impl.matman()._materials).length - 2].color = new THREE.Color(0.98, 0, 0);
    NOP_VIEWER.impl.invalidate(true, true, false);
}