function bind(obj, eventstr, callback) {
    if (obj.addEventListener) {
        obj.addEventListener(eventstr, callback, false);
    } else {
        obj.attachEvent("on" + eventstr, function() {
            callback.call(obj);
        });
    }
}