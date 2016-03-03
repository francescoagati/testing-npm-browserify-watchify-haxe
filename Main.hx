@:jsRequire("moment")
extern class Moment {
  @:selfCall public function new():Void;
  public  function format():Void;
}


class Main {

  public static function main() {
    trace("now");
    trace(new Moment().format());
  }
}
