function Vector(x,y){
    this.x = x;
    this.y = y;

    this.add = function(vector){
        this.x += vector.x;
        this.y += vector.y;
    };

    this.sub = function(vector){
        this.x -= vector.x;
        this.y -= vector.y;
    };

    this.mult = function(scalar){
        this.x *= scalar;
        this.y *= scalar;
    };

    this.div = function(scalar){
        this.x /= scalar;
        this.y /= scalar;
    };

    this.mag = function(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.normalize = function(){
        var m = this.mag();
        this.div(m);
    };

    this.limit = function(max){
        var magnitude = this.mag();
        if(magnitude > max && magnitude > 0) {
            var ratio = max/magnitude;
            this.x *= ratio;
            this.y *= ratio;
        }
    };

    this.logPos = function(){
        console.log(this.x + ', ' + this.y);
    }

    // "static" methods
    Vector.prototype.random2D = function(){
        var ranVect = new Vector((Math.random()*2)-1,(Math.random()*2)-1);
        ranVect.mag();
        return ranVect;
    };

    Vector.prototype.add = function(vect1, vect2){
        var vect = new Vector(vect1.x + vect2.x, vect1.y + vect2.y);
        return vect;
    };

    Vector.prototype.sub = function(vect1, vect2){
        var vect = new Vector(vect1.x - vect2.x, vect1.y - vect2.y);
        return vect;
    };

    Vector.prototype.mult = function(vect1, scalar){
        var vect = new Vector(vect1.x * scalar, vect1.y * scalar);
        return vect;
    };

    Vector.prototype.div = function(vect1, scalar){
        var vect = new Vector(vect1.x/scalar, vect2.x/scalar);
        return vect;
    };

}


