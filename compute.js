/**
 * Created by ryan on 2016/11/30.
 */

exports.mapToObj = function(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
};

exports.objToMap = function(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
};
exports.groupBy = function(values, key) {
    let map = new Map();
    for (let value of values) {
        if (!value.hasOwnProperty(key)) {
            return [];
        }
        let groupkey = value[key];
        let groupSet = map.get(groupkey) || new Set();
        groupSet.add(value);
        map.set(groupkey, groupSet);

    }
    return map;
};

exports.distinct = function(values) {
    if (!Array.isArray(values))
        throw new Error("invalid param");
    return [...new Set(values)];
};
exports.flat = function*(a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield * flat(item);
        } else {
            yield item;
        }
    }
};