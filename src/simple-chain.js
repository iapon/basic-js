/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'string') {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    if (Number.isNaN(position)) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    if (!(Number(position) === position && position % 1 === 0)) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    if (Number(position - 1) >= this.chain.length || Number(position) - 1 < 0) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  },
};
module.exports = {
  chainMaker,
};
