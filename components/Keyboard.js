import styles from '../styles/Keyboard.module.css';

import Key from './Key';

const Keyboard = () => {
    return (
        <div className={styles.keyboardLayout}>
            <div className={styles.keyboardRow}>
                <Key class='key key-192'>~ `</Key>
                <Key class='key key-49'>! 1</Key>
                <Key class='key key-50'>@ 2</Key>
                <Key class='key key-51'># 3</Key>
                <Key class='key key-52'>$ 4</Key>
                <Key class='key key-53'>% 5</Key>
                <Key class='key key-54'>^ 6</Key>
                <Key class='key key-55'>& 7</Key>
                <Key class='key key-56'>* 8</Key>
                <Key class='key key-57'>( 9</Key>
                <Key class='key key-48'>) 0</Key>
                <Key class='key key-189'>_ -</Key>
                <Key class='key key-187'>+ =</Key>
                <Key class='Backspace key-8'>Backspace</Key>
            </div>
            <div className={styles.keyboardRow}>
                <Key class='Tab key-9'>Tab</Key>
                <Key class='key key-81'>Q q</Key>
                <Key class='key key-87'>W w</Key>
                <Key class='key key-69'>E e</Key>
                <Key class='key key-82'>R r</Key>
                <Key class='key key-84'>T t</Key>
                <Key class='key key-89'>Y y</Key>
                <Key class='key key-85'>U u</Key>
                <Key class='key key-73'>I i</Key>
                <Key class='key key-79'>O o</Key>
                <Key class='key key-80'>P p</Key>
                <Key class='key key-219'>{'{ ['}</Key>
                <Key class='key key-221'>{'} ]'}</Key>
                <Key class='key Tab key-220'>| \</Key>
            </div>
            <div className={styles.keyboardRow}>
                <Key class='CapsLock key-20'>CapsLock</Key>
                <Key class='key key-65'>A a</Key>
                <Key class='key key-83'>S s</Key>
                <Key class='key key-68'>D d</Key>
                <Key class='key key-70'>F f</Key>
                <Key class='key key-71'>G g</Key>
                <Key class='key key-72'>H h</Key>
                <Key class='key key-74'>J j</Key>
                <Key class='key key-75'>K k</Key>
                <Key class='key key-76'>L l</Key>
                <Key class='key key-186'>: ;</Key>
                <Key class="key key-222">" '</Key>
                <Key class='Enter key-13'>Enter</Key>
            </div>
            <div className={styles.keyboardRow}>
                <Key class='Shift ShiftLeft key-16'>Shift</Key>
                <Key class='key key-90'>Z z</Key>
                <Key class='key key-88'>X x</Key>
                <Key class='key key-67'>C c</Key>
                <Key class='key key-86'>V v</Key>
                <Key class='key key-66'>B b</Key>
                <Key class='key key-78'>N n</Key>
                <Key class='key key-77'>M m</Key>
                <Key class='key key-188'>{'< ,'}</Key>
                <Key class='key key-190'>{'> .'}</Key>
                <Key class='key key-191'>? /</Key>
                <Key class='Shift ShiftRight key-16'>Shift</Key>
            </div>
            <div className={styles.keyboardRow}>
                <Key class='Control ControlLeft key-17'>Ctrl</Key>
                <Key class='Meta key-91'>⊞ Win</Key>
                <Key class='Alt AltLeft key-18'>Alt</Key>
                <Key class='space key-32'> </Key>
                <Key class='Alt AltRight key-18'>Alt</Key>
                <Key class='Control ControlRight key-17'>Ctrl</Key>
            </div>
        </div>
    );
}

export default Keyboard;