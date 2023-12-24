const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = typeof direct === 'boolean' ? direct : true;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    let curCipherPos = 0;
    let res = '';
    for (let i = 0; i < message.length; i += 1) {
      const code = message[i].toUpperCase().charCodeAt();
      const keyCode = key.toUpperCase().charCodeAt(curCipherPos);
      if (code < 65 || code > 90) {
        res += message[i];
        continue;
      }
      res += String.fromCharCode(((code + keyCode - 130) % 26) + 65);
      console.log(((code + keyCode - 130) % 26) + 65);
      curCipherPos += 1;
      curCipherPos %= key.length;
    }
    if (this.direct) return res;
    return Array.from(res).reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    let curCipherPos = 0;
    let res = '';
    for (let i = 0; i < message.length; i += 1) {
      const code = message[i].toUpperCase().charCodeAt();
      const keyCode = key[curCipherPos].toUpperCase().charCodeAt();
      if (code < 65 || code > 90) {
        res += message[i];
        continue;
      }
      res += String.fromCharCode(90 - ((25 - (code - keyCode)) % 26));
      curCipherPos += 1;
      curCipherPos %= key.length;
    }
    if (this.direct) return res;
    return Array.from(res).reverse().join('');
  }
}
module.exports = {
  VigenereCipheringMachine,
};
