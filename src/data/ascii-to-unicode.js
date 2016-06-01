/**
 * Ascii smiley to unicode table
 *
 * The order is important! O:) must be before :)
 */
export default [
    // angry
    ['>?:-?\\[', '😡'], // >:[ >:-[ :[ :-[
    ['>:-?\\(', '😠'], // >:( >:-(
    ['\\]:-?[\\/]', '👿'], // ]:\ ]:/ ]:-\ ]:-/
    // sweat
    ['-_+-[uU]', '😓'], // -_-u -__-u ...
    ["':-?\\|", '😓'], // ':| ':-|
    ["':-?\\[", '😰'], // ':[ ':-[
    ["':-?\\(", '😥'], // ':( ':-(
    ["':-?\\)", '😅'], // ':) ':-)
    ['\\^_*\\^[uU]', '😅'], // ^_^u ^__^U ...
    ["'=-?\\)", '😅'], // '=) '=-)
    // cool
    ['B-?\\)', '😎'], // B) B-)
    [']:-?\\)', '😈'],
    [':-?,', '😏'], // :, :-,
    ['[oO]:-?\\)', '😇'], // o:) O:) o:-) ...
    // happy
    [':-?\\)', '🙂'], // :) :-)
    [':-?D', '😃'], // :D :-D
    ['=-?\\)', '😊'], // =) =-)
    [':-?>', '😁'], // :> :->
    ['[xX]-?D', '😆'], // xD x-D
    ['[xX]-?D+', '😂'], // xDDD x-DDD
    ['[xX]\'D', '😂'], // x'D
    ['\\^_*\\^', '😄'], // ^^ ^_^ ^__^ ...
    // sad
    [':-?\\(', '🙁'], // :( :-(
    // wink
    [';-?\\)', '😉'], // ;) ;-)
    // tonge
    [':-?[pPÞþ]', '😛'], // :p :P :Þ :þ :-p :-P :-Þ :-þ
    [';-?[pPÞþ]', '😜'], // ;p ;P ;Þ ;þ ;-p ;-P ;-Þ ;-þ
    ['[:;]-?[d]', '😋'], // :d :-d ;d ;-d
    ['[xX]-[pPÞþd]', '😝'], // x-p X-P
    // love
    ['<3', '❤'], // <3
    ['<[\\\\/]3', '💔'], // <\3 </3
    ['=-?\\*', '😙'], //  =* =-*
    [';-?\\*+', '😘'], // ;* ;-* ;** ;-** ...
    [':-?\\*\\*+', '😘'], // :* :-*
    [':-?\\*+', '😗'], // :* :-*
    // cry
    ['[:;=][\'_]-?\\(', '😢'],
    ['[xX][\'_]-?\\(', '😭'],
    ['T_+T', '😭'], // T_T T__T ...
    // confused / surprise
    [':-?[sS]', '😖'], // :s :-s :S :-S
    [':-?[oO]', '😮'], // :o :O :-o :-O
    // sleep
    ['-_+-[zZ]+', '😪'], // -_-zZz ...
    ['u_+u[zZ]+', '😴'], // u_uzZz ...
    // scared
    ['D-?:', '😦'], // D: D-:
    [':-?[cC]', '😦'], // :c :-c :C :-C
    ['D-X', '😫'], // D-X
    ['[x]_+[xX]', '😲'], // x_x x__x ...
    ['[X]_+[xX]', '😵'], // X_X X__X ...
    ['[oO]_+[oO]', '😱'], // o_o o__O O___O ...
    // misc
    ['-_+-', '😑'], // -_- -__- -___- ...
    [':-?\\\\', '😕'], // :\ :-\
    [':-?/(?!\\/)', '😕'], // :/ :-/
    [':-?\\|', '😐'], // :| :-|
    ['[uv]_+[uv]', '😔'], // u_u v_v u__u v___v ...
    ['[xX]-?\\(', '😣'], // x( x-( X( X-(
    ['¬_*¬', '😒'] // ¬¬ ¬_¬ ¬__¬ ...
];

