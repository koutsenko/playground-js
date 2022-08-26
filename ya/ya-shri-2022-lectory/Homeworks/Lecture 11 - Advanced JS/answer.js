module.exports = YetAnotherSet;

function YetAnotherSet(iterator = []) {
  if (!new.target) {
    return new YetAnotherSet(iterator);
  }

  this._values = [];
  if (iterator !== undefined && isIterable(iterator)) {
    for (const item of iterator) {
      this._values.indexOf(item) === -1 && this._values.push(item);
    }
  }

  Object.defineProperty(YetAnotherSet.prototype, Symbol.toStringTag, {
    configurable: true,
    get: () => "^_^",
  });

  Object.defineProperty(YetAnotherSet.prototype, "size", {
    configurable: true,
    get: () => this._values.length,
  });

  YetAnotherSet.prototype[Symbol.iterator] = function () {
    let i = 0;
    return {
      next: () => {
        const nextValue =
          i < this._values.length
            ? {
                done: false,
                value: this._values[i],
              }
            : {
                done: true,
                value: undefined,
              };

        i++;
        return nextValue;
      },
    };
  };

  YetAnotherSet.prototype.add = (v) => {
    if (!this.has(v)) {
      this._values.push(v);
    }
    return this;
  };

  YetAnotherSet.prototype.has = (v) =>
    this._values.some((el) => Object.is(el, v));

  YetAnotherSet.prototype.delete = (v) => {
    if (this.has(v)) {
      this._values = this._values.filter((el) => !Object.is(el, v));
      return true;
    }
    return false;
  };

  YetAnotherSet.prototype.clear = () => (this._values = []);

  YetAnotherSet.prototype.forEach = Array.prototype.forEach.bind(this);

  YetAnotherSet.prototype.keys = () => ({
    [Symbol.iterator]: () => {
      let i = 0;
      return {
        next: () => {
          const nextValue =
            i < this._values.length
              ? {
                  value: this._values[i],
                  done: false,
                }
              : {
                  value: undefined,
                  done: true,
                };

          i++;
          return nextValue;
        },
      };
    },
  });

  YetAnotherSet.prototype.values = YetAnotherSet.prototype.keys;

  YetAnotherSet.prototype.entries = () => ({
    [Symbol.iterator]: () => {
      let i = 0;
      return {
        next: () => {
          const nextValue =
            i < this._values.length
              ? {
                  done: false,
                  value: [this._values[i], this._values[i]],
                }
              : {
                  done: true,
                  value: undefined,
                };

          i++;
          return nextValue;
        },
      };
    },
  });
}

// вспомогательные функции

function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}
