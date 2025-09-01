import { animationInput } from './dom-interaction/input-animation.mjs';
import { generateTicket } from './dom-interaction/generate-ticket.mjs';
class Main {
    static main() {
        animationInput();
        generateTicket();
    }
}
Main.main();
