var SoftEngine;
(function (SoftEngine) {
    var Mesh = (function () {
        function Mesh(name, verticesCount) {
            this.name = name;
            this.Vertices = new Array(verticesCount);
            this.Rotation = BABYLON.Vector3.Zero();
            this.Position = BABYLON.Vector3.Zero();
        }
        return Mesh;
    }());
    SoftEngine.Mesh = Mesh;
})(SoftEngine || (SoftEngine = {}));
//# sourceMappingURL=Mesh.js.map